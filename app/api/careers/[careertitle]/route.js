import connectMongoDB from "@/libs/mongoose"
import Job from "@/models/jobs"
import { NextResponse } from "next/server"

export async function PUT(req, {params}) {
    const { careertitle } = params
    const { title, keywords, jobTitle, jobType, experience, location, details, applying, requests, status, titleAr, jobTitleAr, jobTypeAr, detailsAr } = await req.json()
    await connectMongoDB()
    await Job.findByIdAndUpdate(careertitle , { title, keywords, jobTitle, jobType, experience, location, details, applying, requests, status, titleAr, jobTitleAr, jobTypeAr, detailsAr })
    return NextResponse.json({ message: 'Job Edited'} , {status: 200})
}

export async function GET(req, {params}) {
    const { careertitle } = params
    await connectMongoDB()
    const job = await Job.findOne({ title: careertitle })
    return NextResponse.json({job})
}

export async function DELETE(req, {params}) {
    const { careertitle } = params
    await connectMongoDB()
    await Job.findByIdAndDelete(careertitle)
    return NextResponse.json({message: 'Job Deleted'} , {status: 200})
}