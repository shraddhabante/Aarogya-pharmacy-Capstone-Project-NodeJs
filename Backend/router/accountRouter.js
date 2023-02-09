let express=require("express");
let router=express.Router();
let accountController=require("../controller/accountController");

router.post("/storeAccountInfo",accountController.storeAccountInfo);

module.exports=router;