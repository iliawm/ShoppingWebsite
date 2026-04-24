"use client"

import {useState} from "react";

const NavSearch = () => {
    const [search,setSearch]=useState("")
    return (
        <div className={" w-full h-full bg-white flex p-4 border-b border-black/20 "}>
            <div className={"w-full h-full"}>
                <input type="search" className={"w-full h-full placeholder:text-black/60 px-2 focus:outline-0 "}placeholder={"جستجوی محصولات"}/>
            </div>
            <div className={"w-fit h-full  flex items-center justify-center"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 15L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}
export default NavSearch
