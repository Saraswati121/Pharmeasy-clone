// We should always follow DRY principle while formulating our code structure.
// Each we need to import express module in each controller but this can be part of middleware and these redundant imports can be avoided.
// https://codezup.com/create-separate-route-file-node-js-mean-stack/#:~:text=Create%20Employee%20Route%20File%20in%20Node&text=So%20first%20we%20need%20to,an%20argument%20to%20the%20function.

const {Router} = require("express") //check this
const userRoute= Router()
const User= require("../model/User.model")
const jwt= require("jsonwebtoken")

// MVC should always be driven through some factory patterns as per framework
// You can use repository pattern here 
// https://iperiago.medium.com/node-js-app-in-the-real-world-what-they-never-really-tell-you-part-2-of-a-5-part-series-8e9d41d1824
// We should always have our controlle as skinnny as possible.
userRoute.post("/signup",async(req,res)=>{
    //Whatever is coming in request(req.body.email) you should always validate before processing in your logic.
    //use camelCase as standard convention for js
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
    // JWT is a type of authenticating mechanism , you should use limited variables for recognising or validating a user.
    // Our request should be light weighted for better and fast processing.
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