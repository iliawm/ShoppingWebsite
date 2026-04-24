"use client"

import Link from "next/link";
import {useEffect, useState} from "react";
import {authClient, signUp, useSession} from "@/lib/auth-client";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    const session =useSession()
    useEffect(() => {

        if (session.data){
            router.push("/dashboard")
        }
    }, [session]);
    const [form,setForm]=useState({
        email:"",
        password:"",
        confPass:"",
        callbackURL: "/dashboard",
    })
    const [error,setError]=useState("")
    const [Loading,setLoading]=useState(false)
    const handlesubmit = async (e:any)=>{
        e.preventDefault()
        setLoading(true)

        
        if (form.password!==form.confPass){
            setError("پسورد و تکرار ان باید یکی باشند ")
        }
        try {
            if (session.data){
                router.push("/dashboard")
                return;
            }
            await signUp.email({
                email:form.email,
                password:form.password,
                name:form.email.split("@")[0],
            }, {
                onSuccess: () => {
                    console.log("Success!");
                },
                onError: (e) => {
                    if (e.error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
                        setError("این ایمیل قبلاً ثبت نام کرده است");
                    }
                },
            });
        } catch (err: any) {
           
            console.log("Full error:", err);
                setError("خطا در ثبت نام، لطفاً دوباره تلاش کنید");
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={"w-full min-h-screen h-full heightNav bg-[#fc1374] p-4 flex items-center justify-center"}>
            <div className={"w-fit lg:px-15 px-10 bg-white h-fit rounded-lg flex flex-col text-[#fc1374] p-5"}>
                <h1 className={"text-xl pb-4 border-[#fc1374] border-b"}>ثبت نام</h1>
                <form onSubmit={handlesubmit} className={"pt-4 flex flex-col gap-2"} >
                    <div className={`${error?"flex":"hidden"} w-full items-center justify-center bg-red-500/80 text-white py-2 rounded-lg`}>{error}</div>
                    <span className={"w-fit h-fit text-lg mt-4"}>ایمیل</span>
                    <input type="email" className={"w-55 h-fit bg-[#fc1374] focus:outline-0 rounded-md py-2 px-2 text-white autofill:bg-[#fc1374] "} dir={"auto"} onInput={(e)=>{
                        setForm({
                            ...form,
                            email:e.target.value
                        })}} required={true} autoFocus={true}/>
                     <span className={"w-fit h-fit text-lg mt-4"}>پسورد</span>
                    <input type="password" className={"w-55 h-fit bg-[#fc1374] focus:outline-0 rounded-md py-2 px-2 text-white autofill:bg-[#fc1374] "} dir={"auto"} onInput={(e)=>{
                        setForm({
                            ...form,
                            password:e.target.value
                        })
                    }} required={true}/>
                    <span className={"w-fit h-fit text-lg mt-4"}>تکرار پسورد</span>
                    <input type="password" className={"w-55 h-fit bg-[#fc1374] focus:outline-0 rounded-md py-2 px-2 text-white autofill:bg-[#fc1374] "} dir={"auto"} onInput={(e)=>{
                        setForm({
                            ...form,
                            confPass:e.target.value
                        })
                    }} required={true}/>
                    <div className={"flex items-center justify-center w-full  flex-col"}>
                        <div className={"w-full"}>
                            <Link href={"/Login"} className={"w-fit h-full text-sm mt-2 hover:opacity-70"}>اکانت داری؟</Link>
                        </div>
                    <input type="submit" className={"bg-[#fc1374] mt-5 py-2 rounded-md flex items-center justify-center text-white text-text-white px-15 hover:opacity-70 cursor-pointer "} value={Loading? "درحال ثبت نام ...": "تایید"}/>
                    </div>

                    </form>
            </div>

        </div>
    )
}
export default Page
