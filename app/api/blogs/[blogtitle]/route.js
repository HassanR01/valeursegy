import connectMongoDB from "@/libs/mongoose"
import Blog from "@/models/blogs"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { blogtitle } = params
    const { title, keywords, image, description, sections, writer, titleAr, descriptionAr, sectionsAr } = await req.json()
    await connectMongoDB()
    await Blog.findByIdAndUpdate(blogtitle, { title, keywords, image, description, sections, writer, titleAr, descriptionAr, sectionsAr })
    return NextResponse.json({ message: 'Blog Updated' }, { status: 200 })
}

export async function GET(req, { params }) {
    const { blogtitle } = params
    await connectMongoDB()
    const blog = await Blog.findOne({ title: blogtitle })
    return NextResponse.json({ blog })
}

export async function DELETE(req, { params }) {
    const { blogtitle } = params
    await connectMongoDB()
    await Blog.findByIdAndDelete(blogtitle)
    return NextResponse.json({ message: 'Blog Deleted' }, { status: 200 })
}


