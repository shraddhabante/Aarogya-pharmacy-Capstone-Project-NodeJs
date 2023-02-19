let mongoose=require("mongoose");
mongoose.pluralize(null);

let loginSchema=mongoose.Schema({
    // _id:Number,
    // },
    first_name:{
        type:String,
        required:false
    },
    last_name:{
        type:String,
        required:false
    },
    emailId:{
        type:String,
        required:[true,"EmailId must be required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password must be required"]
    },
    type_of_user:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    contact:{
        type:Number,
        required:false
    }
})

let loginModel=mongoose.model("Login",loginSchema);
module.exports=loginModel;