import connectMongoDB from "@/libs/mongoose"
import User from "@/models/users"
import { NextResponse } from "next/server"

export async function PUT(req, {params}){
    const { userId } = params
    const { name, username, password, role } = req.json()
    await connectMongoDB()
    await User.findByIdAndUpdate(userId, { name, username, password, role })
    return NextResponse.json({message: "user Updated"} , {status: 200})
}

export async function DELETE({params}){
    const { userId } = params
    await connectMongoDB()
    await User.findByIdAndDelete(userId)
    return NextResponse.json({message:"User Deleted"} , {status: 200})
}
