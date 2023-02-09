let express=require("express");

let router=express.Router();
let categoryController=require("../controller/categoryController");

//http://localhost:3000/api/category/addCategoryData
router.post("/addCategoryData",categoryController.addCategoryData);
router.get("/showAllCategory",categoryController.showAllCategory);
router.post("/findCategoryByName",categoryController.findCategoryByName)
module.exports=router;