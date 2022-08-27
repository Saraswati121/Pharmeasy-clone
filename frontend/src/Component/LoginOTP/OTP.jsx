import React, { useState } from 'react';
import "./otp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {OtpHeader} from "../LoginOTP/OtpHeader";


const url= "http://localhost:8080"
  export const OTP = () => {
 
  const [email,setEmail]=useState("")
  const nav = useNavigate();

  const handleChange=(e)=>{
    const data= e.target.value
    setEmail(data)
    // console.log(data)
  }
  
  const handleClick= async ()=>{
    localStorage.setItem("email",JSON.stringify(email))
    try{
      const mails= await axios.post(`${url}/getotp`,{email})
      nav("/OtpBox")
      console.log(mails)
    }
    catch(err){
      console.log (err)
    }

  }
  return (
    <div className='main'>
      <OtpHeader/>
    <div className="login">
      <p>Quick Login /Register</p>
    </div>
    <div id="entry">
      <input type="text" placeholder="Enter your Email" id="num" onChange={handleChange}/>
      <button className="go" onClick={handleClick}>Send OTP</button>
    </div>
    <div className="foot">
      By clicking continue, you agree with our <a href="/#">Privacy Policy</a>
    </div>
    </div>
  )
}
