import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: String,
    description: String,
    model: String,
    sections: [] // subTitle , text
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product