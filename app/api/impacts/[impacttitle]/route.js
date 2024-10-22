import connectMongoDB from "@/libs/mongoose"
import Impacts from "@/models/impacts"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { impacttitle } = params
    const { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr } = await req.json()
    await connectMongoDB()
    await Impacts.findByIdAndUpdate(impacttitle, { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr })
    return NextResponse.json({ message: "Social impact Edited" }, { status: 200 })
}

export async function GET(req, { params }) {
    const { impacttitle } = params
    await connectMongoDB()
    const socialimpact = await Impacts.findOne({ title: impacttitle })
    return NextResponse.json({ socialimpact })
}

export async function DELETE(req, { params }) {
    const { impacttitle } = params
    await connectMongoDB()
    await Impacts.findByIdAndDelete(impacttitle)
    return NextResponse.json({ message: "Social Impact Deleted" }, { status: 200 })
}

