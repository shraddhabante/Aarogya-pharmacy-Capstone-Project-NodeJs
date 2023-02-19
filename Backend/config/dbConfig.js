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
        // console.log(admin.password);
        // console.log(admin.type_of_user);
        // console.log(admin.emailId)
        console.log("admin account created")
    }else{
        console.log("admin account exists")
    }
}

// let adminAccount=async(request,response)=>{
//     try{
//         let admin={
//             emailId:"admin@gmail.com",
//             password:"admin@123",
//             type_of_user:"admin"
//         };

//         let result=await loginModel.findOne({type_of_user:admin.type_of_user});
//         console.log(result)
//         if(result==null){
//             admin.password=await passwordHashConfig.convertPasswordInHash(admin.password) 
//             loginModel.insertMany(admin);
//             console.log(admin.password)
//             console.log("admin account created")
//         }else{
//             console.log("admin account exists")
//         }
//     }catch(err){
//         console.log(err)
//     }
// }



module.exports={dbConnection,adminAccount};