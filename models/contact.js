import mongoose, { Schema } from "mongoose";

const contactsSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    message: String,
}, {timestamps: true})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactsSchema)

export default Contact