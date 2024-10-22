import connectMongoDB from "@/libs/mongoose"
import Impacts from "@/models/impacts"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr } = await req.json()
    await connectMongoDB()
    await Impacts.create({ title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr })
    return NextResponse.json({ message: 'Social Imapct Created' }, { status: 201 })
}

export async function GET(req) {
    await connectMongoDB()
    const socialimpacts = await Impacts.find()
    return NextResponse.json({ socialimpacts })
}

