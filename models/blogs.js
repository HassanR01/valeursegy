import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: String,
    titleAr: String,
    keywords: String,
    image: String,
    description: String,
    descriptionAr: String,
    sections: [], // image, subTitle , text
    sectionsAr: [],
    writer: String,
}, { timestamps: true })

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)

export default Blog;