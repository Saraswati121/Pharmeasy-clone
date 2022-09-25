const mongoose = require('mongoose')

// Always use separate creds for authentications. This provides you flexibility on changing fb as per env.
module.exports= ()=>{
    return mongoose.connect("mongodb+srv://pharma123:pharma123@cluster0.iwnkhoq.mongodb.net/?retryWrites=true&w=majority")
}