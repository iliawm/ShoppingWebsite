"use client"

import {useState, useRef, useEffect} from "react";
import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import { ShoppingBag, Heart, ShoppingCart, User } from "lucide-react";
const UnderNav = () => {
    const [Ham, Setham] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const search = useSearchParams()
    const [Catagories , setCats]=useState([])

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
    
    
    

    const items = [
        { name: "صفحه اصلی", path: "/" },
        { name: "درباره ما", path: "/about" },
        { name: "فروشگاه", path: "/shop" },
        { name: "ارتباط با ما", path: "/contact" },
        { name: "بلاگ", path: "/blog" }
    ];
    //
    // const Catagories = [
    //     { name: "صفحه اصلی", path: "/" },
    //     { name: "درباره ما", path: "/about" },
    //     { name: "فروشگاه", path: "/shop" },
    //     { name: "ارتباط با ما", path: "/contact" },
    //     { name: "بلاگ", path: "/blog" }
    // ];
    const mobile_items = [
        { name: "فروشگاه", path: "/shop", icon: ShoppingBag },
        { name: "علاقه مندی", path: "/dashboard?section=favorite", icon: Heart },
        { name: "سبد خرید", path: "/dashboard?section=Cart", icon: ShoppingCart },
        { name: "حساب کاربری", path: "/dashboard", icon: User }
    ];
    const path = usePathname();

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        Setham(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            Setham(false);
        }, 200);
    };

    return (
        <>
            <div className={"p-5 w-full  z-10 h-fit lg:flex gap-15  hidden  "}>
                <div
                    className={"flex gap-3 text-gray-500 w-70 justify-between cursor-pointer mr-20"}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={"flex flex-col w-fit h-fit"}>
                        <div>
                            دسته‌بندی کالا‌ها
                        </div>
                        <div
                            className={`absolute w-70   h-fit bg-white border-2 border-gray-100 top-10 rounded-xl  flex flex-col    transition-all delay-1000 ease-out ${Ham ? "" : "hidden"}`}
                            style={{ top: "calc(11rem)" }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {
                                Catagories.slice(0,5).map((e:any,index:number)=>{
                                    const last = Catagories.length -1
                                    return(
                                        <Link href={`/shop/?Category=${e.Slug}`} key={index} className={`w-full h-fit border-b border-gray-300 text-sm  transition-all ease-linear duration-200 pr-2 py-5 flex items-center cursor-pointer hover:opacity-70 ${index===last?"rounded-b-xl ":""} ${index===0?"rounded-t-xl":""}  ${search.get("Category") === e.Slug ? "text-[#ee156f]" : "text-black/60 hover:text-[#ee156f]"}`}>{e.name}</Link>
                                    )
                                })
                            }
                        </div>
                    
                    </div>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all ease-linear duration-400   ${Ham ? "rotate-180" : ""}`}>
                            <path d="M4 12L12 4L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    
                </div>
                <div className={"mr-10 flex gap-5 text-lg"}>
                    {items.map((e, index) => {
                        return (
                            <Link href={e.path} className={`${e.path === path ? "text-[#fc1374]" : "text-gray-500"}`} key={index}>{e.name}</Link>
                        );
                    })}
                </div>
            </div>
            <div className={"fixed z-50 bottom-0 bg-white w-full min-h-20 lg:hidden flex gap-5 items-center justify-around text-gray-500 p-5"}>
                {mobile_items.map((e:any,index:number)=>{
                    return(
                        <Link href={e.path} key={index} className="flex flex-col shrink-0 w-fit h-full items-center">
                            <e.icon size={20} />
                            <div className={"text-sm "}>{e.name}</div>
                        </Link>

                    )
                })}

            </div>
        </>
    );
};

export default UnderNav;
