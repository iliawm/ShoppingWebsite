"use client"

import Link from "next/link";
import {useRouter} from "next/navigation";
import {signIn, useSession} from "@/lib/auth-client";
import {useEffect, useState} from "react";

const Page = () => {
    const [form,setForm]=useState({
        email:'',
        password:''
    })
    const [error,setError]=useState("")
    const [Loading,setLoading]=useState(false)
    const router = useRouter()
    const session =useSession()
    useEffect(() => {

        if (session.data){
            // router.push("/dashboard")
        }
    }, [session]);
    const handlesubmit=async (e:any)=>{
        e.preventDefault()
        setLoading(true)
        try {
            if (session.data){
                router.push("/dashboard")
                console.log("user already logged in")
            return;
            }
            await signIn.email({
                email:form.email,
                password:form.password,
                callbackURL: "/dashboard",
            }, {
                onSuccess:()=>{
                console.log("success")
            },onError:(e)=>{
                    setError(e.error.code)
                }
            
            }
        )
        }catch (error){
            setError("مشکلی پیش امده,بعدا تلاش کنید")
        }
    }
    return (
        <div className={"w-full min-h-screen h-full heightNav bg-[#fc1374] p-4 flex items-center justify-center"}>
            <div className={"w-fit px-10 lg:px-15 bg-white h-fit rounded-lg flex flex-col text-[#fc1374] p-5"}>
                <h1 className={"text-xl pb-4 border-[#fc1374]/70 border-b"}>ورود</h1>
                <form onSubmit={handlesubmit} className={"pt-4 flex flex-col gap-2"}>
                    <span className={"w-fit h-fit text-lg mt-4"}>ایمیل</span>
                    <input type="email" className={"w-55 h-fit bg-[#fc1374] focus:outline-0 rounded-md py-2 px-2 text-white autofill:bg-[#fc1374] "} dir={"auto"} onChange={(e)=>{
                        setForm({
                            ...form,
                            email:e.target.value
                        })
                    }}/>
                     <span className={"w-fit h-fit text-lg mt-4"}>پسورد</span>
                    <input type="password" className={"w-55 h-fit bg-[#fc1374] focus:outline-0 rounded-md py-2 px-2 text-white autofill:bg-[#fc1374] "} dir={"auto"} onChange={(e)=>{
                        setForm({
                            ...form,
                            password:e.target.value
                        })
                    }}/>
                    <div className={"flex items-center justify-center w-full  flex-col"}>
                        <div className={"w-full"}>
                        <Link href={"/register"} className={"w-full h-full text-sm mt-2"}>اکانت نداری؟</Link>
                        </div>
                            <input type="submit" className={"bg-[#fc1374] mt-5 py-2 rounded-md flex items-center justify-center text-white text-text-white px-15 hover:opacity-70 cursor-pointer"} value={"تایید"}/>
                    </div>
                    
                    </form>
            </div>

        </div>
    )
}
export default Page
