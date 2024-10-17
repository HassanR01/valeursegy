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
})

const News = mongoose.models.News || mongoose.model('News', newsSchema)

export default News