const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = new mongoose.Schema({
    fullName: {type: String, maxlengh: 25},
    twitterHandle: {type: String},
    email: { type: String, required: true, maxlength: 50,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: ({ value }) => `${value} is not valid, Email validation failed`
        }
    },
    image: {type: String,
        validate: {
            validator: (value) => validator.isURL(value),
            message: ({ value }) => `${value} is not valid, Image validation failed`
        }
    }
}, {_id: false});

const blogSchema = new mongoose.Schema({
    title: {type: String, unique: true, required: true},
    authors: [authorSchema],
    content: String,
    publishedAt: Date
}, 
{timestamps: true});



module.exports = blogSchema