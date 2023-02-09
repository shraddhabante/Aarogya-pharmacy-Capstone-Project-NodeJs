let mongoose=require("mongoose");
mongoose.pluralize(null);

let customerSchema=mongoose.Schema({
    _id:Number,
    first_name:{
        type:String,
        required:[true,"first name must be required"]
    },
    last_name:{
        type:String,
        required:false
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    contact:{
        type:Number,
        required:true,
        unique:true
    }
})

let customerModel=mongoose.model("Customer",customerSchema);
module.exports=customerModel;