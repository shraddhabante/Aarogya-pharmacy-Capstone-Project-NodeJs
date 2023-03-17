let productModel = require("../model/productModel");

let storeProductData = async (request, response) => {
    let product = request.body;
    try {
        let result = await productModel.insertMany(product);
        // response.json(result)
        if (result != null) {
            response.json({ "msg": "Product details stored sucessfully" })
        }

    } catch (err) {
        response.json({ "msg": "Product Id must be unique" })
    }
}

let showAllProduct = async (request, response) => {
    try {
        let result = await productModel.find().sort({_id:1});
        var res = JSON.stringify(result)
        response.send(res);
    } catch (err) {
        response.json(err);
    }
}

let findProductByName = async (request, response) => {
    try {
        let product_name =  request.params.pname;
        let result = await productModel.findOne({ pname: product_name});
        if (result == null) {
            response.json({msg:"Record not found with product name as "+pname})
        }else{
            response.json(result);
        }
    } catch (err) {
        response.json(err)
    }
}

// let updateCategoryByName=async (request,response)=>{
//     try{
//         let category=request.body;
//         let result=await categoryModel.updateOne({dname:category.dname},{$set:category});
//         if(result.modifiedCount>0){
//             response.json({"msg":"Record Updated Sucessfully"})
//         }else if(result.matchedCount>0){
//             response.json({"msg":"Can't update beacause new and old value are same"})
//         }else{
//             response.json({"msg":"Record Not present"})
//         }
//     }catch(err){
//         response.send(err)
//     }
// }
let updateProductById=async(request,response)=>{
    try {
        const result = await productModel.updateOne({_id:request.params._id}, {$set: request.body});
        if(result.modifiedCount>0){
            response.json({"msg":"Record Updated sucessfully"})
        }else if(result.matchedCount>0){
            response.json({"msg":"Can't update Because Old and new data are same"})
        }else{
            response.json({"msg":"Record not present"})
        }
    } catch (error) {
        response.json(error)
    }
}

let deletePorductById = async (request, response) => {
    try {
        const result = await productModel.deleteOne({_id:request.params._id});
        if(result.deletedCount>0){
            response.json({"msg":"Record deleted sucessfully"})
        }else{
            response.json({"msg":"Record not present"})
        }
    
    } catch (error) {
        response.json(error)
    }
}

module.exports = { storeProductData, showAllProduct, findProductByName,updateProductById ,deletePorductById}