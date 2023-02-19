let express=require("express");

let router=express.Router();
let categoryController=require("../controller/categoryController");
let authToken=require("../config/authToken")

//http://localhost:3000/api/category/addCategoryData
router.post("/addCategoryData",authToken.verifyUserToken,authToken.isCustomerOrAdmin,categoryController.addCategoryData);
router.get("/showAllCategory",authToken.verifyUserToken,authToken.isCustomerOrAdmin,categoryController.showAllCategory);
router.get("/findCategoryByName/:dname",authToken.verifyUserToken,authToken.isCustomerOrAdmin,categoryController.findCategoryByName)
module.exports=router;