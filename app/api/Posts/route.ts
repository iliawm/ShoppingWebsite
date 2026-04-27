import {Post} from "@/models/Post";
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { user } from "@/models/user";
export async function GET(request:any){
    try {
        
    
    const posts = await Post.find({}).populate("Auth", "name")
        if (!posts) {
        return NextResponse.json({
            message: "No products"
        })
    }
        
    return NextResponse.json({
        post:posts,
    },{status:200})
    }
    catch (error){
        if (error){
        console.log(error)
    }}
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const title = formData.get('title') as string;
        const video = formData.get('video') as File;
        const banner = formData.get('banner') as File;
        const Auth = formData.get('Auth') as string;

        if (!title || !video || !Auth) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const timestamp = Date.now();
        const videoFilename = `video-${timestamp}-${video.name}`;
        const videoPath = path.join(process.cwd(), 'public', 'uploads', 'videos', videoFilename);

        await mkdir(path.join(process.cwd(), 'public', 'uploads', 'videos'), { recursive: true });
        await writeFile(videoPath, Buffer.from(await video.arrayBuffer()));

        let bannerUrl = null;
        if (banner) {
            const bannerFilename = `banner-${timestamp}-${banner.name}`;
            const bannerPath = path.join(process.cwd(), 'public', 'uploads', 'banners', bannerFilename);
            await mkdir(path.join(process.cwd(), 'public', 'uploads', 'banners'), { recursive: true });
            await writeFile(bannerPath, Buffer.from(await banner.arrayBuffer()));
            bannerUrl = `/uploads/banners/${bannerFilename}`;
        }

        const newPost = await Post.create({
            title,
            video: `/uploads/videos/${videoFilename}`,
            Banner: bannerUrl,
            Auth,
            IsValidated: false
        });

        return NextResponse.json(newPost, { status: 201 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
