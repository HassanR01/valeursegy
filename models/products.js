import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: String,
    nameAr: String,
    description: String,
    descriptionAr: String,
    model: String,
    sections: [], // subTitle , text
    sectionsAr: [],
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product