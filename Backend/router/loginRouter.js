let express=require("express");

let router=express.Router();
let loginController=require("../controller/loginController");

//http://localhost:3000/api/login/signUpData
router.post("/signUpData",loginController.signUpData)

router.post("/signInData",loginController.signInData)
router.get("/showAllCustomers",loginController.showAllCustomers)
router.post("/findUserByEmailId",loginController.findUserByEmailId)
module.exports=router;