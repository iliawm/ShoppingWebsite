import { dbconnect } from "@/lib/db";
import { Products } from "@/models/products";
import { getAuth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await dbconnect();

        const auth = await getAuth();
        const session = await auth?.api.getSession({
            headers: await headers()
        });

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized - Please login" },
                { status: 401 }
            );
        }

        if (session.user.role !== "Admin" && session.user.role !== "Owner") {
            return NextResponse.json(
                { error: "Forbidden - Only admins can create products" },
                { status: 403 }
            );
        }

        const body = await request.json();
        const {
            name,
            description,
            image,
            brand,
            Category,
            sku,
            price,
            availability,
            rating,
            Comments,
            offer,
            SoldAmount
        } = body;

        if (!name || !description || !image || !sku || !price || availability === undefined) {
            return NextResponse.json(
                {
                    error: "Missing required fields",
                    required: ["name", "description", "image", "sku", "price", "availability"]
                },
                { status: 400 }
            );
        }

        const existingProduct = await Products.findOne({ sku });
        if (existingProduct) {
            return NextResponse.json(
                { error: "Product with this SKU already exists" },
                { status: 409 }
            );
        }

        const product = await Products.create({
            name,
            description,
            image,
            brand: brand || null,
            Category,
            sku,
            price: Number(price),
            availability: Number(availability),
            rating: rating || null,
            Comments: Comments || [],
            offer: offer || false,
            SoldAmount: SoldAmount || 0
        });

        return NextResponse.json({
            success: true,
            message: "Product created successfully",
            product: {
                id: product._id,
                name: product.name,
                sku: product.sku,
                price: product.price,
                availability: product.availability,
                category: product.Category,
                offer: product.offer,
                soldAmount: product.SoldAmount
            }
        }, { status: 201 });

    } catch (error: any) {
        console.error("Error creating product:", error);

        if (error.code === 11000) {
            return NextResponse.json(
                { error: "Duplicate SKU - Product with this SKU already exists" },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { error: "Internal server error", details: error.message },
            { status: 500 }
        );
    }
}
export async function GET(request: NextRequest) {
    try {
        await dbconnect();

        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");
        const offer = searchParams.get("offer");
        const minPrice = searchParams.get("minPrice");
        const maxPrice = searchParams.get("maxPrice");
        const limit = parseInt(searchParams.get("limit") || "50");
        const page = parseInt(searchParams.get("page") || "1");
        const sortBy = searchParams.get("sortBy") || "createdAt";
        const sortOrder = searchParams.get("sortOrder") === "asc" ? 1 : -1;
        const skip = (page - 1) * limit;

        let query: any = {};

        if (category && category !== "all") {
            query.Category = category;
        }

        if (offer === "true") {
            query.offer = true;
        }

        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        const [products, total] = await Promise.all([
            Products.find(query)
                .sort({ [sortBy]: sortOrder })
                .skip(skip)
                .limit(limit),
            Products.countDocuments(query)
        ]);

        return NextResponse.json({
            success: true,
            products,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });

    } catch (error: any) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { error: "Internal server error", details: error.message },
            { status: 500 }
        );
    }
}
