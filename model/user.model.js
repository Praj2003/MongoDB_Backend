const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    userID : {
        type : String,
        require : true,
        unique : true
    },

    email : {
      type : String,
      required : true,
      unique : true
    },

    password : {
        type : String,
        required : true,
        unique : true
    },

    userType : {
        type: String,
        default : "CUSTOMER",
        enum : ["ADMIN","CUSTOMER"],
        required : true
    }
    
    
},{timestamps : true,versionKey : false})

module.exports = mongoose.model("User",userSchema);