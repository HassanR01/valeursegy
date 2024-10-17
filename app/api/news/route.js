import connectMongoDB from "@/libs/mongoose"
import News from "@/models/news"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr } = await req.json()
    await connectMongoDB()
    await News.create({ title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr })
    return NextResponse.json({ message: 'News Created' }, { status: 201 })
}

export async function GET(req){
    await connectMongoDB()
    const news = await News.find()
    return NextResponse.json({news})
}

