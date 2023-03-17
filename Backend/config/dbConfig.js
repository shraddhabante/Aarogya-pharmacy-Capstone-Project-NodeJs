const { response } = require("express");
let mongoose = require("mongoose");
let loginModel=require("../model/loginModel");
let passwordHashConfig=require("./passwordHashConfig")
let url = "mongodb://127.0.0.1:27017/mydb";
mongoose.set('strictQuery', false);


let dbConnection = mongoose.connect(url).then(res => console.log("Db Connected")).catch(err => console.log("error generated " + err));

let adminAccount=async function(){
    let password="admin@123";
    let hashPassword=await passwordHashConfig.convertPasswordInHash(password)
    // console.log(hashPassword)
    let admin={"emailId":"admin@gmail.com","password":hashPassword,"type_of_user":"admin"};
    let result=await loginModel.findOne({"emailId":admin.emailId});
    if(result==null){
        loginModel.insertMany(admin);
        console.log("admin account created")
    }else{
        console.log("admin account exists")
    }
}





module.exports={dbConnection,adminAccount};