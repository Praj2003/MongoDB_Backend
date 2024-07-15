const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true,
        unique : true
    },

    name : {
        type : String,
        required : true,
        unique : true
    },

    description : {
        type : String,
        required : true,
        unique : true
    },

    cost : {
        type : String,
        required : true
    }

    
},{versionKey : false, timestamps : true});

module.exports = mongoose.model("Product",productSchema);