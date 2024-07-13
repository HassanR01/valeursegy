import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: String,
    keywords: String,
    description: String,
    sections: [], // image, subTitle , text
    writer: String,
}, { timestamps: true })

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)

export default Blog;