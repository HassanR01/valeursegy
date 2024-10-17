import connectMongoDB from "@/libs/mongoose"
import News from "@/models/news"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { newstitle } = params
    const { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr } = await req.json()
    await connectMongoDB()
    await News.findOneAndUpdate({ title: newstitle }, { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr })
    return NextResponse.json({ message: 'News Edited' }, { status: 200 })
}

export async function GET(req, { params }) {
    const { newstitle } = params
    await connectMongoDB()
    const news = await News.findOne({ title: newstitle })
    return NextResponse.json({ news })
}

export async function DELETE(req, {params}) {
    const { newstitle } = params
    await connectMongoDB()
    await News.findOneAndDelete({ title: newstitle })
    return NextResponse.json({message: "News Deleted"}, {status: 200})
}