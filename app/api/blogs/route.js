import connectMongoDB from "@/libs/mongoose"
import Blog from "@/models/blogs"
import { NextResponse } from "next/server"

export async function POST(req){
    const { title, keywords, description, sections, writer } = await req.json()
    await connectMongoDB()
    await Blog.create({ title, keywords, description, sections, writer })
    return NextResponse.json({message: "Blog Created"}, {status: 201})
}

export async function GET(){
    await connectMongoDB()
    const blogs = await Blog.find()
    return NextResponse.json({blogs})
}

