let express=require("express");

let router=express.Router();
let orderController=require("../controller/orderController");
let authToken=require("../config/authToken")

//http://localhost:3000/api/login/signUpData
router.post("/addorderData",authToken.verifyUserToken,authToken.isCustomerOrAdmin,orderController.addorderData);
router.get("/viewOrderData",authToken.verifyUserToken,authToken.isCustomerOrAdmin,orderController.showAllOrder);
router.get("/findOrderByCustId/:customerEmailId",authToken.verifyUserToken,authToken.isCustomerOrAdmin,orderController.findOrderByCustEmailId)

module.exports=router;