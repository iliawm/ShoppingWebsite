'use client'

import {useEffect, useState} from "react";
import NavSearch from "@/ui/Nav/NavSearch";
import Hambuttons from "@/ui/Nav/Hambuttons";
import NavRoutes from "@/ui/Nav/NavRoutes";

export interface NavItem {
    name: string;
    path: string;
}


const HamMenu = ({items}:{items:NavItem[]}) => {
    const [Ham,Setham]=useState(false)
    const [sec,setSec]=useState(1)
    

    return (
        <div className={"z-70"}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-fit h-fit cursor-pointer hover:opacity-70 transition-all duration-300 ease-linear ${Ham?"rotate-90":"rotate-0"}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={()=>{
                Setham(!Ham)
            }}>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            <div className={`fixed bg-black/40 w-full h-full top-0  cursor-pointer transition-all ease-linear duration-100 ${Ham?"left-0":"-left-full"}`} onClick={()=>{
                Setham(!Ham)
            }}></div>
            <div className={`fixed bg-white w-3/5 h-full top-0  cursor-pointer transition-all ease-linear duration-400 flex flex-col ${Ham?"right-0":"-right-full"}`}>
                <div className={"flex flex-col w-full h-full"}
                    >
                    <section className={"w-full h-17 bg-black search"}>
                        <NavSearch/>
                    </section>
                    <section className={"w-full h-14"}>
                        <Hambuttons btn={sec} setbtn={setSec}/>
                    </section>
                    <section className="w-full h-full flex flex-col ">
                        <NavRoutes items={items} btn={sec} setbtn={setSec}/>
                    </section>
                </div>
            </div>
        </div>

    )
}
export default HamMenu
