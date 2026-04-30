import {dbconnect} from "@/lib/db";

import {NextResponse} from "next/server";
import {Products} from "@/models/products";


export async function GET(req:Request){
    try {
        await dbconnect()
        const {searchParams} =new URL(req.url)
        const id = searchParams.get("prod")
        const product = await Products.findById(id)
        if (!product){
            return NextResponse.json({
                err:"product not found"
            })
        }
        return NextResponse.json({
            product :  product
        })
    }catch (err){
        console.log(err)
    }
}
