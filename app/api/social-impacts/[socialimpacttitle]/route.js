import connectMongoDB from "@/libs/mongoose"
import SocialImapct from "@/models/social-impacts"
import { NextResponse } from "next/server"

export async function PUT(req , {params}){
    const { socialimpacttitle } = params
    const { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr } = await req.json()
    await connectMongoDB()
    await SocialImapct.findOneAndUpdate({ title: socialimpacttitle }, { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr })
    return NextResponse.json({message: "Social impact Edited"}, {status: 200})
}

export async function GET(req, { params }) {
    const { socialimpacttitle } = params
    await connectMongoDB()
    const socialimpact = await SocialImapct.findOne({ title: socialimpacttitle })
    return NextResponse.json({socialimpact})
}

export async function DELETE(req, { params }) {
    const { socialimpacttitle } = params
    await connectMongoDB()
    await SocialImapct.findOneAndDelete({ title: socialimpacttitle })
    return NextResponse.json({message: "Social Impact Deleted"}, {status: 200})
}

