import mongoose, { Schema } from "mongoose"

const meetingSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    position: String,
    medId: String,
    message: String,
}, {timestamps: true})

const Meeting = mongoose.models.Meeting || mongoose.model('Meeting', meetingSchema)

export default Meeting;