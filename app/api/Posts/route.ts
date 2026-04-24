import {Post} from "@/models/Post";
import {NextResponse} from "next/server";

export async function GET(request:any){
    try {
        
    
    const posts = await Post.find({})
    if (!posts){
        return NextResponse.json({
            message:"No products"
        })
    }
    return NextResponse.json({
        post:posts
    },{status:200})
    }
    catch (error){
        if (error){
        console.log(error)
    }}
}
