import connectMongoDB from "@/libs/mongoose"
import HCP from "@/models/hcps"
import { NextResponse } from "next/server"

export async function DELETE(req , {params}){
    const { id } = params
    await connectMongoDB()
    await HCP.findByIdAndDelete(id)
    return NextResponse.json({message: "HCP Deleted"}, {status: 200})
}
