const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log("Connected to DB at", process.env.DB_URI)
    }
    catch (error){
        console.log("Failed to connect to DB", error)
    }
    }

    module.exports = connectDB;