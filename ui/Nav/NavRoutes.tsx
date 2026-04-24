"use client"

import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {NavItem} from "@/ui/Nav/hammenu";

const NavRoutes = ({btn,setbtn,items}: { items: NavItem[], btn:number,setbtn:Function }) => {

    const path = usePathname()
    useEffect(()=>{
        console.log(btn)
    },[btn])
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
                : "")}
        </>
    )
}

export default NavRoutes
