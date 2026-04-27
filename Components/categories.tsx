import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Categories =async () => {
    let cats ;
    try {
        const res = await fetch("http://localhost:3000/api/Categories",{

        })
        if (res.ok){
            cats = await res.json()
            
        }
    }catch (err){
        console.log(err)
    }



    return (
        <div className={"w-full h-full bg-white flex flex-col items-center"}>
            <h1 className={"text-xl font-bold"}>دسته بندی محصولات</h1>
        <div className={"w-full h-fit flex flex-wrap items-center justify-center lg:gap-x-20 gap-5 lg:gap-y-15 p-5 lg:p-10 xl:gap-x-25 xl:px-25"}>
            {
                cats.categories?.map((e:any,index:number)=>{
                    
                    return(
                        <Link href={`/shop?Category=${e.Slug}`} key={index} className={"w-60 h-45 xl:w-80 bg-white border border-gray-200 rounded-lg flex-col flex shrink-0 items-center justify-center gap-3"}>
                            <div className={"w-20 h-20 bg-white relative  "}>
                                <Image src={e.image || "/placeholder.png"} alt={e.Slug} fill className={"rounded-2xl"} sizes={"100%"}/>
                            </div>
                            <div className={"text-sm text-gray-500 "}>{e.name}</div>
                        </Link>
                    )
                })
            }
        </div>
        </div>
    )
}
export default Categories
