import mongoose, { Schema } from "mongoose";

const partnershipsSchema = new Schema({
    name: String,
    nameAr: String,
    logo: String,
    description: String,
    descriptionAr: String,
    link: String,
    type: String
})

const Partnership = mongoose.models.Partnership || mongoose.model('Partnership', partnershipsSchema)

export default Partnership