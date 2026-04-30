import {dbconnect} from "@/lib/db";

import {getSession} from "@/lib/authServer";
import {NextResponse} from "next/server";
import {user} from "@/models/user";

export async function GET(request:any){
    try {
        await dbconnect()
        const session =await getSession()
        if (!session){
            return NextResponse.json({
                err:"Not Authenticated"
            })
        }
        const id = session.user.id
        const client = await user.findById(id)
        if (!client){
            return NextResponse.json({
               message: "Client not found"
            })
        }
    return NextResponse.json({
        client: client,
    },{status:200})
    }
    catch (err){
        console.log(err)
    }
}
