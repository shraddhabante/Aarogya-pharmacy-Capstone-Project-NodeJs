let mongoose=require("mongoose");
mongoose.pluralize(null);

let orderSchema=mongoose.Schema({
    // _id:Number,
    categoryName:{
        type:String,
        required:[true,"category id required"]
    },
    productName:{
        type:String,
        required:[true,"Product id is required"]
    },
    customerEmailId:{
        type:String,
        required:[true,"Customer id required"]
    },
    pQuantity:{
        type:Number,
        required:[true,"product quantity required"]
    },
    amount:{
        type:Number,
        required:[true,"Amount is required"]
    },
    orderDate:{
        type:String,
        required:[true,"Order date must required"]
    }
})

let orderModel=mongoose.model("Order",orderSchema);
module.exports=orderModel;