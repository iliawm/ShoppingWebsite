
import HamMenu from "@/ui/Nav/hammenu";
import {getSession} from "@/lib/authServer";
import Link from "next/link";
import Image from "next/image";
import ProfMenu from "@/ui/Nav/ProfMenu";
import Search from "@/ui/Nav/Search";

const Navbar =async () => {

    const items = [
        { name: "صفحه اصلی", path: "/" },
        { name: "درباره ما", path: "/about" },
        { name: "فروشگاه", path: "/shop" },
        { name: "ارتباط با ما", path: "/contact" },
        { name: "بلاگ", path: "/blog" }
    ]
    const session =await getSession()
    if (!session){
        console.log("no session found ")
    }
    
    return (
        <nav className={"w-full h-full flex gap-3 items-center p-3 lg:pl-15 lg:pr-5 "}>
            <section className={" flex gap-2 items-center w-full h-full p-2 text-black/60 "}>
                <div className={"flex gap-2 lg:hidden"}>
                   <HamMenu items={items}/>
                    <div className={"w-fit h-fit"}>فهرست</div>
                </div>
                <Link href={"/"} className={" gap-2 w-20 h-20 hidden lg:flex relative"}>
                    <Image src={"/Logo.png"} width={400} height={400}  priority className={"w-20 h-20 object-contain"} alt={"Logo"}/>
                    <div className={"flex-col flex h-full justify-center mt-1"}>
                        <h1 className={"text-xl text-nowrap text-black  font-black"}>فروشگاه لوازم خاص</h1>
                        <h3 className={""}>لوازم مورد نیاز شما</h3>
                    </div>
                </Link>
            </section>
            <section className={"w-full h-fit flex gap-6  justify-end items-center"}>
                <Search/>
                {
                    session?<div className={"text-gray-200 flex justify-end left-60 gap-4"}>
                        
                        <ProfMenu/>
                    </div> : <Link href={"/Login"} className={`px-2 py-1 w-fit h-fit bg-gray-500 text-white rounded-md text-nowrap`}>وارد شوید</Link>
                }

            </section>
            <div className={"bg-[#fc1374] rounded-4xl pl-3 pr-1 py-1 w-fit min-w-30 h-fit flex gap-1 items-center "}>

                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={"bg-white rounded-full w-fit h-fit px-1 py-1"}>
                    <rect x="4" y="8" width="16" height="13" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 8V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 3L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15 3L17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className={"w-fit h-fit flex gap-3 items-center text-white "}>
                    <div className={"w-fit  flex relative top-0 text-sm pr-1 mt-1"}>0</div>
                    <div className={"w-fit h-fit"}>
                        تومان
                    </div>
                </div>
            </div>
            

            
        </nav>
    )
}
export default Navbar
