import connectMongoDB from "@/libs/mongoose"
import Meeting from "@/models/meetings"
import { NextResponse } from "next/server"

export async function POST(req){
    const { name, email, phone, position, medId, message } = await req.json()
    await connectMongoDB()
    await Meeting.create({ name, email, phone, position, medId, message })
    return NextResponse.json({message: 'Meeting holded'}, {status: 201})
}

export async function GET(){
    await connectMongoDB()
    const meetings = await Meeting.find()
    return NextResponse.json({meetings})
}
