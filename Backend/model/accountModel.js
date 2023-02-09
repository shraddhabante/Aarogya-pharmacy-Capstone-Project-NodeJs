let mongoose=require("mongoose");
mongoose.pluralize(null);

let accountSchema=mongoose.Schema({
    _id:Number,
    accNo:{
        type:Number,
        required:[true,"Account number required"],
        // unique:true
    },
    amount:{
        type:Number,
        required:true
    }
})

let accountModel=mongoose.model("Account",accountSchema);
module.exports=accountModel;