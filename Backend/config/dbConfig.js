let mongoose = require("mongoose");
let url = "mongodb://127.0.0.1:27017/mydb";
mongoose.set('strictQuery', false);


let dbConnection = mongoose.connect(url).then(res => console.log("Db Connected")).catch(err => console.log("error generated " + err));

module.exports=dbConnection;