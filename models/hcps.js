import mongoose, { Schema } from "mongoose";


const hcpSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    speciality: String,
})

const HCP = mongoose.models.HCP || mongoose.model('HCP', hcpSchema)

export default HCP;