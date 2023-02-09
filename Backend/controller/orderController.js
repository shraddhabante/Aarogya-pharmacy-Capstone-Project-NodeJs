
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

let findOrderByCustId=async(request,response)=>{
    let custId = request.body.customerId;
    try {
        let result = await orderModel.findOne({customerId:custId});
        // response.json(result);
        if (result != null) {
            var res=JSON.stringify(result)
            response.send(res)
        }
    } catch (err) {
        // response.json(err)
        response.send("Error generated",+err)
    }
}


module.exports = { addorderData ,findOrderByCustId}