const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {type: String, unique: true, required: true},
    authors: [String],
    content: String,
    publishedAt: Date
}, 
{timestamps: true});

module.exports = blogSchema