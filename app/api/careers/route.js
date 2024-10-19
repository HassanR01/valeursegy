import connectMongoDB from "@/libs/mongoose"
import Job from "@/models/jobs"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { title, keywords, jobTitle, jobType, experience, location, details, applying, requests, status, titleAr, jobTitleAr, jobTypeAr, detailsAr } = await req.json()
    await connectMongoDB()
    await Job.create({ title, keywords, jobTitle, jobType, experience, location, details, applying, requests, status, titleAr, jobTitleAr, jobTypeAr, detailsAr })
    return NextResponse.json({ message: 'Job Created' }, { status: 201 })
}

export async function GET() {
    await connectMongoDB()
    const jobs = await Job.find()
    return NextResponse.json({ jobs })
} 