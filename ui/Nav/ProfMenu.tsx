"use client"

import { useState, useRef } from "react";
import {signOut, useSession} from "@/lib/auth-client";
import Image from "next/image";
import { LayoutDashboard , Trophy , Mail , User , LogOut } from 'lucide-react';
import Link from "next/link";

const ProfMenu = () => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const session = useSession()
    const user =session?.data?.user

    const handleSvgMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setOpen(true);
    };

    const handleSvgMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 200);
    };

    const handleMenuMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setOpen(true);
    };

    const handleMenuMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 200);
    };

    
    return (
        <div className={"lg:flex gap-5 hidden "}>
        <div className={"flex flex-col items-end"}>
            <div>
            <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={"cursor-pointer hover:opacity-70 scale-[1.1]"} onMouseEnter={handleSvgMouseEnter} onMouseLeave={handleSvgMouseLeave}
                >
                <circle cx="20" cy="20" r="20" stroke="currentColor" strokeWidth="1"/>
                <circle cx="20" cy="14" r="5" stroke="#fc1374" strokeWidth="2"/>
                <path d="M8 30C8 25 12 22 20 22C28 22 32 25 32 30" stroke="#fc1374" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            </div>
            <div
                className={`absolute w-90 h-60 bg-white border gap-2 flex flex-row-reverse border-gray-300 top-10 rounded-lg shadow-sm p-5  shadow-black transition-all delay-1000 ease-out ${open ? "flex" : "hidden"}`}
                style={{ top: "calc(5.5rem)" }}
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
            >
                <div className="w-fit h-full relative shrink-0 flex flex-col gap-5 items-center overflow-hidden ">
                    <div
                        className={"w-[50px] h-[50px] relative rounded-full shrink-0 cursor-pointer overflow-hidden"}
                        onClick={() => window.open(user?.image || "/placeholder.png", "_blank", "noopener,noreferrer")}
                    >
                        <Image
                            src={user?.image || "/placeholder.png"}
                            alt="Profile"
                            fill
                            sizes="50px"
                            className="object-cover rounded-full hover:opacity-80 transition"
                        />
                    </div>
                    <Link href={"/dashboard"} className={"text-black/80 my-auto cursor-pointer hover:opacity-70"}>
                        <LayoutDashboard size={24} />
                    </Link>
                    <div className={"text-black/80 my-auto cursor-pointer hover:opacity-70"} onClick={()=>{
                        signOut()
                        setTimeout(()=>{
                            window.location.reload()

                        },100)
                    }}>
                        <LogOut size={24} />
                    </div>
                </div>
                <div className={"w-full h-full flex flex-col p-3 text-gray-500 gap-7 rounded-lg  "}>
                    <div className={"w-full h-fit text-nowrap flex gap-2 "} dir={"ltr"}>
                        <Mail size={20} className="text-[#fc1a73]" />
                        {user?.email}
                    </div>
                    <div className={"w-full h-fit text-nowrap flex gap-2"} dir={"ltr"}>
                        <User size={24} className="text-[#fc1a73]"/>
                        {user?.name}
                    </div>
                    <div className={"w-full h-fit text-nowrap flex gap-2"} dir={"ltr"}>
                        <Trophy size={24} className="text-[#fc1a73]"/>
                        {user?.role}
                    </div>

                </div>
            </div>
        </div>
            <div className={""}>
            <svg
                width="45"
                height="35"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"cursor-pointer hover:opacity-70 scale-[1.1] "}
                
            >
                <circle cx="20" cy="20" r="19.5" stroke="currentColor" strokeWidth="1"/>
                <path
                    d="M20 30C20 30 12 24 12 18C12 14 15 12 18 12C20 12 20 14 20 14C20 14 20 12 22 12C25 12 28 14 28 18C28 24 20 30 20 30Z"
                    stroke="#fc1374"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            </div>

            
        </div>
    );
};

export default ProfMenu;
