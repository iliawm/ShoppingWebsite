import Image from "next/image";
import PostF from "@/ui/PostF/Posts";
import {Suspense} from "react";


const Posts =async () => {
    let posts;
    try {
        const response = await fetch("http://localhost:3000/api/Posts",
            {
                cache:"no-cache"
            })
        if (response.ok){
            posts = await response.json()
        }
    }catch (error){
        console.log("something went wrong")
    }
    // posts? console.log("aa",posts): null
    return (
        <div className={"py-5 px-4 w-full h-fit overflow-x-scroll flex items-center justify-end hide-scrollbar gap-5"}>
            <Suspense fallback={<div>loading...</div>}>
                <PostF items={posts?.post}/>
            </Suspense>
        </div>
    )
}
export default Posts
