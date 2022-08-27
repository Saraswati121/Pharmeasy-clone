const express = require('express')
const OTP = require('../model/otp.model')
const router = express.Router()
const nodemailer= require("nodemailer")
const { readFileSync} =require("fs")
const hbs= require("handlebars")

const EMAIL= "riley33@ethereal.email"
const PASSWORD= "s1msRvR8TCADTGSjPH"

// const transport= nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port:587,   
//     auth: {
//         user:EMAIL,
//         pass:PASSWORD
//     }
// })

// router.post('/', async(req,res)=>{
//     const {email}= req.body;
//     const sendOtp= Math.floor(100000 + Math.random() * 900000)
//     const template= hbs.compile(readFileSync("./login.hbs","utf-8")) 
// transport.sendMail({
//     from:"pharmeasy@gmail.com",
//     to:email,
//     subject:"otp",
//     text:"your otp here",
//     html: template({
//         OTP:sendOtp
//     })
// }).then((info)=>{
//     const data= new OTP({
//         email:email,
//         otp:sendOtp,
//     })
//     data.save()
//     return res.send({message:"mail sent succesfully",data})
// })
// })

router.post('/verify', async(req,res)=>{
    try{
    const {email,otp}=req.body;
    const findEmail= await OTP.findOne({email}).lean().exec()
    if(findEmail.otp === otp){
       return res.status(200).send({message:"login successful"}) 
    }
    return res.status(403).send({message:"Invalid OTP"})
    }
    catch(err){
        return res.send({message:err.message})
    }
})

module.exports = router
