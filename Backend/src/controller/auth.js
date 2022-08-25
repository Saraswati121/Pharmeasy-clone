const {Router} = require("express")
const userRoute= Router()
const User= require("../model/User.model")
const jwt= require("jsonwebtoken")

userRoute.post("/signup",async(req,res)=>{
    const usermail= await User.findOne({email: req.body.email})
    if(usermail){
        return res.send({message: "user already exist"})
    }
    const user= new User(req.body)
    user.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"Error occured"})
        }
        return res.status(201).send({message:"signup successful", User:success._doc})
    })
})

userRoute.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    const validUser= await User.findOne({email,password})
    if(!validUser){
        return res.status(401).send({message:"Invalid Credentials"})
    }
    const token = jwt.sign({
        email:validUser.email,
        age:validUser.age,
        password:validUser.password,
        username:validUser.username,
        gender:validUser.gender,
        city:validUser.city
    },"Secret")
    return res.status(201).send({validUser,token})
})



module.exports= userRoute