"use client"

import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import {NavItem} from "@/ui/Nav/hammenu";

const NavRoutes = ({btn,setbtn,items}: { items: NavItem[], btn:number,setbtn:Function }) => {
const [cats , setCats]=useState([])
    const path = usePathname()
    const search = useSearchParams()
  
    useEffect(()=>{
        const handlefeth= async ()=>{
            try {
                const res = await fetch("/api/Categories")
                if (res.ok){
                    const data =await res.json()
                  
                    setCats(data.categories)
                }
            }catch (err){

            }
        }
        handlefeth()
        // console.log(btn)
    },[])
    return (
        <>
            {(btn===1 ?   items.map((item, index) => (
                <Link
                    href={item.path}
                    key={index}
                    className={`w-full h-fit py-3 flex items-center pr-5 text-sm border-b border-black/20 transition-all duration-200 ${path === item.path ? "text-[#ee156f]" : "text-black/60 hover:text-black"}`}
                >
                    {item.name}
                </Link>
            ))
                : cats?.map((e:any,index:number) => {
                    
                    return(
                    <Link
                        href={`/shop?Category=${e.Slug}`}
                        key={index}
                        className={`w-full h-fit py-3 flex items-center pr-5 text-sm border-b border-black/20 transition-all duration-200 ${search.get("Category") === e.Slug ? "text-[#ee156f]" : "text-black/60 hover:text-black"}`}
                    >
                        {e.name}
                    </Link>)
            }))}
        </>
    )
}

export default NavRoutes
