let express=require("express");

let router=express.Router();
let loginController=require("../controller/loginController");
let authToken=require("../config/authToken")


router.get("/showAllCustomers",authToken.verifyUserToken,authToken.isCustomerOrAdmin,loginController.showAllCustomers)

router.get("/findUserByEmailId/:emailId",loginController.findUserByEmailId)

router.post("/signUpData",loginController.signUpData)

router.post("/signInData",loginController.signInData)


module.exports=router;