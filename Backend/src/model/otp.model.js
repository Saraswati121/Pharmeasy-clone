const mongoose = require('mongoose')

const otpSchema= mongoose.Schema({
    email: String,
    otp:Number,
})

const OTP = mongoose.model("otp",otpSchema)

module.exports=OTP