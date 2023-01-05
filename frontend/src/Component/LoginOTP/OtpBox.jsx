import React from 'react';
import "./otpBox.css";
import axios from "axios"
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { handleModalClose } from '../../Redux/Otp/action';

// const url= "https://pharmaeasy.herokuapp.com"
const url = "https://pharmaeasy-backend.onrender.com/";
export const OtpBox = () => {

const inputRef=useRef([])
let [otp,setOtp]=useState("")
const dispatch = useDispatch();

    const go = async()=>{
       try{
        let email = JSON.parse(localStorage.getItem("email"))
        otp = +otp
        
        let data = {email,otp}

        const res= await axios.post(`${url}/getotp/verify`,data)
        handleModalClose(dispatch)
        console.log(res)
       }
       catch(err){
        alert("Invalid OTP")
       }
    }

  return (
  <div className='main'>
  
    <div className="login">
      <p>ENTER OTP</p>
    </div>

    {/* for otp */}

    <div id="ip">
      {/* Take 4 and 1 from config and formuakte accordingly */}
        {new Array(4).fill(1).map((el ,index)=>(
        <input 
        onChange={e=>{
          setOtp(otp+e.target.value)
        }}
          onKeyUp={(e)=>{
            //if index < 0 or index > inputRef.current.length return
              if(e.code === "Backspace" ){
                if(index>0){
                    inputRef.current[index-1].focus()
                    inputRef.current[index-1].select()
                }
              }
              else{
                if(index < 4-1){
                    inputRef.current[index+1].focus()
                }
                }
          }}

        ref={(element)=>{
            if(inputRef.current && element){
                inputRef.current[index]=element
            }
        }}
        pattern={"[0-9]"} 
        type={"text"}
        maxLength={1} 
        className="otpInput" key={index}/>
    ))}
    </div>

    {/* bottom section */}

    <div id="entry">
      <button className="go" onClick={()=>go()}>Continue</button>
    </div>
    <div className="foot">
      By clicking continue, you agree with our <a href="/#">Privacy Policy</a>
    </div>
    </div>
  )
}
