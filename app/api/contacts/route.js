import connectMongoDB from "@/libs/mongoose"
import Contact from "@/models/contact"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { name, phone, email, message } = await req.json()
    await connectMongoDB()
    await Contact.create({ name, phone, email, message })
    return NextResponse.json({ message: 'Create Contact' }, { status: 201 })
}

export async function GET() {
    await connectMongoDB()
    const contacts = await Contact.find()
    return NextResponse.json({ contacts })
}