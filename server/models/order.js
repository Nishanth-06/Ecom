const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product:{
        type:ObjectId,
        ref:"Product"
    },
    name:String,
    count:Number,
    price:Number
});

const ProductCart = mongoose.model("ProductCart",ProductCartSchema)

const OrderSchema = new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_Id:{},
    amount:{type:Number},
    address:String,
    status:{
        type:String,
        default:"",
        enum:["Cancelled","Delivered","Shipped","Processing","Recieved"]
    },
    update:Date,
    user:{
        type:ObjectId,
        ref:"User"
    }
},{timeStamps:true});

const Order = mongoose.model("Order",OrderSchema)


module.exports={Order,ProductCart};