const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    username:String,
    email:String,
    password:String,
    gender:String,
    age:Number,
    city:String
})

const User= mongoose.model("user",userSchema)

module.exports= User