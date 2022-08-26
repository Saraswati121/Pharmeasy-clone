const mongoose = require('mongoose')

const productSchema= mongoose.Schema({
    id:Number,
    desc:String,
    company:String,
    img1:String,
    img2:String,
    img3:String,
    img4:String,
    img5:String,
    ratings:Number,
    newPrice:Number,
    originalPrice:Number,
    offer:Number,
    about:String,
    category_id:{type:mongoose.Schema.Types.ObjectId,ref:"category",require:true}
})

const Product = mongoose.model("product",productSchema)

module.exports=Product