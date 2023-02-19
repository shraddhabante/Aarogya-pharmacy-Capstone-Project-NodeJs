
let jwt = require("jsonwebtoken");

exports.verifyUserToken = (request, response, next) => {
    try {
        let token = request.headers.authorization;
        if (token == undefined) {
            response.json({
                "msg": "Unauthorized request or user"
            })
        } else {
            let verifyToken = jwt.verify(token, "secretKey");
            request.type_of_user = verifyToken.type_of_user;
            // console.log(verifyToken)
            next();
        }
        // console.log(token);
        // next();
    } catch (err) {
        response.json({
            "msg": "Invalid Token" + err
        })
    }
}


exports.isCustomerOrAdmin = (request, response, next) => {
    try {
        console.log(request.type_of_user + " " + request.path);
        if (request.type_of_user == "admin" && (request.path == "/showAllCustomers" || request.path == "/addCategoryData"||request.path=="/showAllCategory" ||request.path=="/storeProductData"|| request.path=="/showAllProduct"||request.path=="/viewOrderData")) {
            console.log("admin condition");
            next();
        } else if (request.type_of_user == "customer" && (request.path == "/findUserByEmailId/:emailId" ||request.path=="/showAllCategory"||request.path=="/findCategoryByName/:dname"|| request.path=="/showAllProduct"||request.path=="/findProductByName/:pname"||request.path=="/addorderData"||request.path=="/findOrderByCustId/:customerEmailId")){
            console.log("customer condition");
            next();
        } else {
            response.json({
                "msg": "You are unauthorized person or don't have role to access that resource"
            })
        }
    } catch (err) {
        response.json({
            "msg": "wrong user" + ex
        })
    }
}