import connectMongoDB from "@/libs/mongoose"
import Meeting from "@/models/meetings"
import { NextResponse } from "next/server"

export async function DELETE(req , {params}){
    const { id } = params
    await connectMongoDB()
    await Meeting.findByIdAndDelete(id)
    return NextResponse.json({message: "Meeting Canceld"}, {status: 200})
}
