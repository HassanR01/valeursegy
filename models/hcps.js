import mongoose, { Schema } from "mongoose";


const hcpSchema = new Schema({
    name: String,
    email: String,
    medId: String,
    phone: String,
    speciality: String,
    // noted
})

const HCP = mongoose.models.HCP || mongoose.model('HCP', hcpSchema)

export default HCP;