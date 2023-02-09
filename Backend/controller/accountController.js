let accountModel=require("../model/accountModel");


let storeAccountInfo= async (request,response)=> {
    let account = request.body;
    try{
    let result  = await accountModel.insertMany(account);
    if(result!=null){
        // response.send("account deatils stored successfully");
        response.send("done");
        console.log(result)
    }
    
    }catch(err){
        response.send(err);
    }
}

module.exports={storeAccountInfo}