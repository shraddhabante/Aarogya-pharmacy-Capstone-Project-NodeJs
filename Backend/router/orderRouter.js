let express=require("express");

let router=express.Router();
let orderController=require("../controller/orderController");

//http://localhost:3000/api/login/signUpData
router.post("/addorderData",orderController.addorderData);
router.get("/viewOrderData",orderController.showAllOrder);
router.get("/findOrderByCustId/:customerEmailId",orderController.findOrderByCustEmailId)

module.exports=router;