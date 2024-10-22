import mongoose, { Schema } from "mongoose"

const impactsSchema = new Schema({
    title: String,
    titleAr: String,
    keyword: String,
    keywordAr: String,
    description: String,
    descriptionAr: String,
    date: String,
    images: [],
    details: String,
    detailsAr: String,
}, {timestamps: true})

const Impacts = mongoose.models.Impacts || mongoose.model('Impacts', impactsSchema)

export default Impacts;