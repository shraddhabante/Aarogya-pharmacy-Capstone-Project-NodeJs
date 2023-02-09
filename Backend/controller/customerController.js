let customerModel=require("../model/customerModel");

let storeCustomerInfo= async (request,response)=> {
    let customer = request.body;
    try{
    let result  = await customerModel.insertMany(customer);
    if(result!=null){
        response.send("Record stored successfully");
    }
    //response.send(result);
    }catch(ex){
        response.send(ex);
    }
}

module.exports={storeCustomerInfo}