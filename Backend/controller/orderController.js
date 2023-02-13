
let orderModel = require("../model/orderModel");

let addorderData = async (request, response) => {
    let order = request.body;
    try {
        let result = await orderModel.insertMany(order);
        // response.send("done")
        if (result != null) {
            response.json({ "msg": "Order details stored sucessfully" })
        }
    } catch (err) {
        response.json(err)
    }
}
let showAllOrder = async (request, response) => {
    try {
        let result = await orderModel.find({});
        var res = JSON.stringify(result)
        response.send(res);
        // response.json(result)
    } catch (err) {
        response.json(err);
    }
}

let findOrderByCustEmailId = async (request, response) => {
    try {
        let custId =  request.params.customerEmailId;
        let result = await orderModel.findOne({ customerEmailId: custId});
        if (result == null) {
            response.json({msg:"Record not found with email id  as "+customerEmailId})
        }else{
            response.json(result);
        }
    } catch (err) {
        response.json(err)
    }
}
module.exports = { addorderData ,showAllOrder,findOrderByCustEmailId}