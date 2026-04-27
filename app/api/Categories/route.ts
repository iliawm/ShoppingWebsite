import { Categories } from "@/models/Catagories";
import { NextResponse } from 'next/server';
import {dbconnect} from "@/lib/db";

export async function GET() {
    try {
        await dbconnect()
        const categories = await Categories.find({});

        if (!categories || categories.length === 0) {
            return NextResponse.json({
                message: "No categories found"
            }, { status: 404 });
        }

        return NextResponse.json({
            categories: categories
        }, { status: 200 });
    }
    catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        console.log(error);
        return NextResponse.json({
            message: "Error fetching categories",
            error: errorMessage
        }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbconnect()
        const body = await request.json();
        const { name, Slug } = body;

        if (!name || !Slug) {
            return NextResponse.json({
                message: "Name and Slug are required"
            }, { status: 400 });
        }

        const existingCategory = await Categories.findOne({
            $or: [{ name }, { Slug }]
        });

        if (existingCategory) {
            return NextResponse.json({
                message: "Category with this name or slug already exists"
            }, { status: 409 });
        }

        const category = await Categories.create({
            name,
            Slug
        });

        return NextResponse.json({
            message: "Category created successfully",
            category: category
        }, { status: 201 });
    }
    catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        console.log(error);
        return NextResponse.json({
            message: "Error creating category",
            error: errorMessage
        }, { status: 500 });
    }
}
