let express=require("express");

let router=express.Router();
let orderController=require("../controller/orderController");

//http://localhost:3000/api/login/signUpData
router.post("/addorderData",orderController.addorderData);
router.post("/findOrderByCustId",orderController.findOrderByCustId)

module.exports=router;