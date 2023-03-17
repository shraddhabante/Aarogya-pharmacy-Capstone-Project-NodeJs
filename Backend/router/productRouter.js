let express=require("express");

let router=express.Router();
let productController=require("../controller/productController");
let authToken=require("../config/authToken")

//http://localhost:3000/api/login/signUpData
router.post("/storeProductData",authToken.verifyUserToken,authToken.isCustomerOrAdmin,productController.storeProductData)
router.get("/showAllProduct",authToken.verifyUserToken,authToken.isCustomerOrAdmin,productController.showAllProduct)
router.get("/findProductByName/:pname",productController.findProductByName)
router.patch("/updateProductById/:_id",productController.updateProductById);
router.delete("/deleteProductById/:_id",productController.deletePorductById);

module.exports=router;