const mongoose = require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:[{
        _id:false,
        productId:{
            type:String,
        },
        quantity:{
            type:Number,
        },
        title:{
            type:String
        },
        price:{
            type:Number
        }
    }]
})

const User = mongoose.model("User",userSchema)
module.exports = User