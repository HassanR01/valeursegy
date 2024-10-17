import mongoose, { Schema } from "mongoose"

const socialImpactsSchema = new Schema({
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

const SocialImapct = mongoose.models.SocialImapct || mongoose.model('SocialImpact', socialImpactsSchema)

export default SocialImapct