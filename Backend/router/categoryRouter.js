let express=require("express");

let router=express.Router();
let categoryController=require("../controller/categoryController");

//http://localhost:3000/api/category/addCategoryData
router.post("/addCategoryData",categoryController.addCategoryData);
router.get("/showAllCategory",categoryController.showAllCategory);
router.get("/findCategoryByName/:dname",categoryController.findCategoryByName)
module.exports=router;