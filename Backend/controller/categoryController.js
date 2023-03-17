
const { request, response } = require("express");
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
            response.json({"msg":"Record not found with disease name"})
            // var res=JSON.stringify(result)
            // response.send(res)
        }else{
            response.json({"msg":"Record Present","category":result});
        }
    } catch (err) {
        // response.json(err)
        response.json(err)
    }
}


let updateCategoryById=async(request,response)=>{
    try {
        const result = await categoryModel.updateOne({_id:request.params._id}, {$set: request.body});
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

let deleteCategoryById = async (request, response) => {
    try {
        const result = await categoryModel.deleteOne({_id:request.params._id});
        if(result.deletedCount>0){
            response.json({"msg":"Record deleted sucessfully"})
        }else{
            response.json({"msg":"Record not present"})
        }
    
    } catch (error) {
        response.json(error)
    }
}
module.exports = { addCategoryData, showAllCategory,findCategoryByName ,updateCategoryById,deleteCategoryById}