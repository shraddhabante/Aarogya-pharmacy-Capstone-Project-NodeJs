let mongoose=require("mongoose");
mongoose.pluralize(null);

let supplierSchema=mongoose.Schema({
    supplierID: {type: String , require:true},
    name: {type: String , require:true},
    email: {type: String , require:true},
    contact: {type: String , require:true},
    drugsAvailable: {type: String , require:true}
})

let supplierModel=mongoose.model("Supplier",supplierSchema);
module.exports=supplierModel;