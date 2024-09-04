import { Schema } from "mongoose";

const jobSchema = new Schema({
    title: String,
    jobTitle: String,
    jobType: String,
    experience: String,
    branch: String,
    details: String,
    requests: [],
    status: String,
}, { timestamps: true })