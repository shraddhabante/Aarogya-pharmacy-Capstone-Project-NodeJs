let mongoose=require("mongoose");
mongoose.pluralize(null);

let orderSchema=mongoose.Schema({
    _id:Number,
    categoryId:{
        type:Number,
        required:[true,"category id required"]
    },
    productId:{
        type:Number,
        required:[true,"Product id is required"]
    },
    customerId:{
        type:Number,
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