
let categoryModel = require("../model/categoryModel");

let addCategoryData = async (request, response) => {
    let category = request.body;
    try {
        let result = await categoryModel.insertMany(category);
        // response.json(result)
        if (result != null) {
            response.json({ "msg": "Category details stored sucessfully" })
        }
    } catch (err) {
        response.json({"msg":"Category Id must be unique"})
    }
}

let showAllCategory = async (request, response) => {
    try {
        let result = await categoryModel.find({});
        var res = JSON.stringify(result)
        response.send(res);
        // response.json(result)
    } catch (err) {
        response.json(err);
    }
}

let findCategoryByName = async (request, response) => {
    try {
        let category_name =  request.params.dname;
        let result = await categoryModel.findOne({ dname: category_name});
        // response.json(result);
        if (result == null) {
            response.json({msg:"Record not found with disease name as "+dname})
            // var res=JSON.stringify(result)
            // response.send(res)
        }else{
            response.json(result);
        }
    } catch (err) {
        // response.json(err)
        response.json(err)
    }
}

module.exports = { addCategoryData, showAllCategory,findCategoryByName }