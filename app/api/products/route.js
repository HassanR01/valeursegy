import connectMongoDB from "@/libs/mongoose"
import Product from "@/models/products"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { name, description, model, sections, nameAr, image, descriptionAr, sectionsAr } = await req.json()
    await connectMongoDB()
    await Product.create({ name, description, model, sections, nameAr, image, descriptionAr, sectionsAr })
    return NextResponse.json({ message: "Product Created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB()
    const products = await Product.find()
    return NextResponse.json({ products })
}
