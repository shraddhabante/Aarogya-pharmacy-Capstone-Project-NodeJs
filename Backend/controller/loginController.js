let loginModel = require("../model/loginModel");
let passwordHashConfig = require("../config/passwordHashConfig");
let jwt =require("jsonwebtoken")
//insert the record
let signUpData = async (request, response) => {
    let login = request.body;
    // console.log(customer)
    // response.send("done")
    try {
        if (login.type_of_user == "admin") {
            response.json({ "msg": "Admin can't create account" })
        } else {
            console.log(login)
            login.password = await passwordHashConfig.convertPasswordInHash(login.password);
            console.log(login);
            let result = await loginModel.insertMany(login);
            if (result != null) {
                response.json({ "msg": "Customer account created" })
                // console.log(result);
            }
        }

    } catch (err) {
        response.send(err);
        // response.json({ "msg": "EmailId must be unique" });
    }
}


// let signInData = async (request, response) => {
//     let login = request.body;
//     try {
//         let result = await loginModel.findOne({ emailId: login.emailId, password: login.password, type_of_user: login.type_of_user });
//         // response.json(result);
//         if (result == null) {
//             response.json({ "msg": "EmailId or password or Type of user may be worng" })
//         } else if (result.type_of_user == "admin") {
//             response.json({ "msg": "Admin login Sucessfully" })
//         } else {
//             response.json({ "msg": "Customer login sucessfully" })
//         }
//     }
//     catch (err) {
//         response.json(err)
//     }
// }


let signInData=async(request,response)=>{
    let login =request.body;
    try{
        let findUser=await loginModel.findOne({emailId:login.emailId});
        if(findUser!=null){
            let result=await passwordHashConfig.comaprePassword(login.password,findUser.password);
            // console.log(login.password)
            if(result){
                console.log(findUser);
                //json web token code
                let payload={"emailId":findUser.emailId,"type_of_user":findUser.type_of_user};
                let tokenValue=jwt.sign(payload,"secretKey");
                if(findUser.type_of_user=="admin" && login.type_of_user=="admin"){
                    response.json({
                        "msg":"Admin login successfully",
                        "token":tokenValue
                    })
                }else if(findUser.type_of_user=="customer" && login.type_of_user=="customer"){
                    response.json({
                        "msg":"Customer login Sucessfully",
                        "token":tokenValue
                    })
                }else{
                    response.json({"msg":"type of user may be wrong"})
                }
            }else{
                response.json({"msg":"password is wrong"})
            }
        }else{
            response.json({"msg":"EmailId is wrong"})
        }
    }catch(err){
        response.json(err)
    }
}

let showAllCustomers = async (request, response) => {
    try {
        let result = await loginModel.find({ type_of_user: { $ne: "admin" } });
        response.send(result);
        //var res = JSON.stringify(result)
        // response.json(result);
        // // console.log(result)
    } catch (err) {
        response.json(err);
    }
}

let findUserByEmailId = async (request, response) => {
    try {
        let email = request.params.emailId;
        let result = await loginModel.findOne({ emailId: email });
        if (result == null) {
            response.json({ msg: "Record not found with email id as " + emailId })
        } else {
            response.json(result);
        }
    } catch (err) {
        response.json(err)
        // response.send("There is no customer exist with email id as "+emailId)
    }
}
// let findStudentByName= async (reqeust,response)=> {
//     try {
//         let fname = reqeust.params.fname;
//         let result = await studentModel.find({first_name:fname});
//         response.json(result);
//     } catch (error) {
//         response.json(error);
//     }
// }
module.exports = { signUpData, signInData, showAllCustomers, findUserByEmailId };