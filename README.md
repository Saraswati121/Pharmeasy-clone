## Pharmeasy clone

server url: https://localhost:8080
##End point for category= /category         //GET request

##End point for categorywise product= /product/:id    //GET request id:mongoose id (category id)

##End point for get OTP= /getotp       // POST request required field  {email:string}

##End point for verify OTP = /getotp/verify    //(POST request required field) -- {email:string , otp:number}