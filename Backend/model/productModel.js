let mongoose=require("mongoose");
mongoose.pluralize(null);

let productSchema=mongoose.Schema({
    _id:Number,
    pname:{
        type:String,
        required:[true,"Product name required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    quantity:{
        type:Number,
        required:[true,"Product quantity required"]
    },
    categoryId:{
        type:Number,
        required:[true,"category id required"]
    },
    pImage:{
        type:String,
        required:false
    }
})

let productModel=mongoose.model("Product1",productSchema);
module.exports=productModel;