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

// let findProductByName = async (request, response) => {
//     let product_name = request.body.pname;
//     try {
//         let result = await productModel.findOne({ pname: product_name });
//         // response.json(result);
//         if (result != null) {
//             var res = JSON.stringify(result)
//             response.send(res)
//         }
//     } catch (err) {
//         // response.json(err)
//         response.json(err)
//     }
// }
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

module.exports = { storeProductData, showAllProduct, findProductByName }