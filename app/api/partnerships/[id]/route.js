import connectMongoDB from "@/libs/mongoose"
import Partnership from "@/models/partnerships"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { id } = params
    const { name, nameAr, logo, description, descriptionAr, link, type } = await req.json()
    await connectMongoDB()
    await Partnership.findByIdAndUpdate(id, { name, nameAr, logo, description, descriptionAr, link, type })
    return NextResponse.json({ message: 'Partner Updated' }, { status: 200 })
}

export async function DELETE(req, { params }) {
    const { id } = params
    await connectMongoDB()
    await Partnership.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Parner Delete' }, { status: 200 })
}