import connectMongoDB from "@/libs/mongoose"
import Blog from "@/models/blogs"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { blogtitle } = params
    const { title, keywords, description, sections, writer } = await req.json()
    await connectMongoDB()
    await Blog.findOneAndUpdate({ title: blogtitle }, { title, keywords, description, sections, writer })
    return NextResponse.json({ message: 'Blog Updated' }, { status: 200 })
}

export async function GET(req , { params}){
    const { blogtitle } = params
    await connectMongoDB()
    const blog = Blog.findOne({ title: blogtitle })
    return NextResponse.json({blog})
}

export async function DELETE(req , {params}){
    const { blogtitle } = params
    await connectMongoDB()
    await Blog.findOneAndDelete({ title: blogtitle })
    return NextResponse.json({message: 'Blog Deleted'}, {status: 200})
}


