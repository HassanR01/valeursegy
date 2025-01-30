import connectMongoDB from "@/libs/mongoose"
import Product from "@/models/products"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { name, description, model, sections, nameAr, image, descriptionAr, sectionsAr } = await req.json()
    const { productName } = params
    await connectMongoDB()
    await Product.findByIdAndUpdate(productName, { name, description, model, sections, nameAr, image, descriptionAr, sectionsAr })
    return NextResponse.json({message: "Product Updated"}, {status:200})
}

export async function GET(req, { params }) {
    const { productName } = params
    await connectMongoDB()
    const product = await Product.findOne({ name: productName })
    return NextResponse.json({product})
}

export async function DELETE(req, { params }) {
    const { productName } = params
    await connectMongoDB()
    await Product.findByIdAndDelete(productName)
    return NextResponse.json({message: "Deleted Successfully"}, {status: 200}) 
}
