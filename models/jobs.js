import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    title: String,
    titleAr: String,
    keywords: String,
    jobTitle: String,
    jobTitleAr: String,
    jobType: String,
    experience: String,
    jobTypeAr: String,
    location: String,
    details: String,
    detailsAr: String,
    applying: String,
    requests: [],
    status: String,
}, { timestamps: true })

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema)

export default Job;