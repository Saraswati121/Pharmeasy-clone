const mongoose = require('mongoose')

module.exports= ()=>{
    return mongoose.connect("mongodb+srv://pharma123:pharma123@cluster0.iwnkhoq.mongodb.net/?retryWrites=true&w=majority")
}