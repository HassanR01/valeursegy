import mongoose, { Schema } from "mongoose"

const newsSchema = new Schema({
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

const News = mongoose.models.News || mongoose.model('News', newsSchema)

export default News