import { Schema } from "mongoose";

const jobSchema = new Schema({
    title: String,
    keywords: String,
    jobTitle: String,
    jobType: String,
    experience: String,
    location: String,
    details: String,
    applying: String,
    requests: [],
    status: String,
}, { timestamps: true })