let express=require("express");

let router=express.Router();
let productController=require("../controller/productController");

//http://localhost:3000/api/login/signUpData
router.post("/storeProductData",productController.storeProductData)
router.get("/showAllProduct",productController.showAllProduct)
router.post("/findProductByName",productController. findProductByName)

module.exports=router;