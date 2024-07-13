import connectMongoDB from "@/libs/mongoose"
import HCP from "@/models/hcps"
import { NextResponse } from "next/server"

export async function POST(req){
    const { name, email, medId, phone, speciality } = await req.json()
    await connectMongoDB()
    await HCP.create({ name, email, medId, phone, speciality })
    return NextResponse.json({message: 'HCP Created'}, {status: 201})
}

export async function GET() {
    await connectMongoDB()
    const hsps = await HCP.find()
    return NextResponse.json({hsps})
}
