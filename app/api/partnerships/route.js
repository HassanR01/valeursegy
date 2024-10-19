import connectMongoDB from "@/libs/mongoose"
import Partnership from "@/models/partnerships"
import { NextResponse } from "next/server"

export async function POST(req, { params }) {
    const { name,nameAr, logo,description, descriptionAr, link } = await req.json()
    await connectMongoDB()
    await Partnership.create({ name,nameAr, logo,description, descriptionAr, link })
    return NextResponse.json({ message: 'Partner Created' }, { status: 201 })
}

export async function GET() {
    await connectMongoDB()
    const partner = await Partnership.find()
    return NextResponse.json({ partner })
}