import React from 'react'
import Link from "next/link";

const Categories =async () => {

        const res = await fetch("http://localhost:3000/api/Categories")
  

    return (
        <div className={"w-full h-fit flex flex-wrap bg-black"}>

            <Link href={"/"} >
                
            </Link>
        </div>
    )
}
export default Categories
