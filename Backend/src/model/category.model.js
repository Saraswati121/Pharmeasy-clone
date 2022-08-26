const mongoose = require('mongoose')

const categorySchema= mongoose.Schema({
    id:Number,
    image:String,
    categoryName:String ,
    discount:String
 
})

const Category = mongoose.model('category',categorySchema)


module.exports =Category
