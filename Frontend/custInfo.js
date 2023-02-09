//sign in 
function signInData() {
    var email = document.getElementById("emailId").value;
    var pass = document.getElementById("password").value;
    var adminValue = document.getElementsByName("type_of_user")[0].checked;
    var customerValue = document.getElementsByName("type_of_user")[1].checked;
    var type_of_user_val;
    if (adminValue) {
        type_of_user_val = "admin"
    }
    if (customerValue) {
        type_of_user_val = "customer"
    }
    var login = { emailId: email, password: pass, type_of_user: type_of_user_val }
    // console.log(login);
    fetch("http://localhost:3000/api/login/signInData", {
        method: "post",
        body: JSON.stringify(login),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).then(result => {
        // document.getElementById("msg").innerHTML = result;
        // console.log(result)
        if(result.msg=="Admin login Sucessfully"){
            window.location.href="http://127.0.0.1:5500/adminHome.html"
        }else if(result.msg=="Customer login sucessfully"){
            window.location.href="http://127.0.0.1:5500/customerHome.html" 
        } else {
            document.getElementById("msg").innerHTML=result.msg;

        }
    }).catch(err => console.log(err));
    reset();
}

//sign Up
function signUpData(){
    var fname=document.getElementById("first_name").value;
    var lname=document.getElementById("last_name").value;
    var email = document.getElementById("emailId").value;
    var pass = document.getElementById("password").value;
    var adminValue = document.getElementsByName("type_of_user")[0].checked;
    var customerValue = document.getElementsByName("type_of_user")[1].checked;
    var type_of_user_val;
    if (adminValue) {
        type_of_user_val = "admin"
    }
    if (customerValue) {
        type_of_user_val = "customer"
    }
    var addressVal=document.getElementById("address").value;
    var contactVal=document.getElementById("contact").value;
    var login = {first_name:fname,last_name:lname, emailId: email, password: pass, type_of_user: type_of_user_val ,address:addressVal,contact:contactVal}
    console.log(login);
    fetch("http://localhost:3000/api/login/signUpData",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
        document.getElementById("msg").innerHTML=result.msg;
        console.log(result);
    }).catch(err=>console.log(err));
}

//show all customers
function showAllCustomers(){
    fetch("http://localhost:3000/api/login/showAllCustomers",{
        method:"get"
    })
    .then(res=>res.text()).then(result=>{
        document.getElementById("display").innerHTML=result;
        console.log(result);
    }).catch(err=>console.log(err));
}

//Add Category
function addCategory(){
    var idValue=document.getElementById("_id").value;
    var diseaseVal=document.getElementById("dname").value;
    var category={_id:idValue,dname:diseaseVal};
    // console.log(category);
    fetch("http://localhost:3000/api/category/addCategoryData",{
        method:"post",
        body:JSON.stringify(category),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
        document.getElementById("addCategory").innerHTML=result.msg;
        console.log(result);
    }).catch(err=>console.log(err));
}

//view all category
function viewAllCategory(){
    fetch("http://localhost:3000/api/category/showAllCategory",{
        method:"get"
    })
    .then(res=>res.text()).then(result=>{
        document.getElementById("viewCategory").innerHTML=result;
        console.log(result);
    }).catch(err=>console.log(err));
}

//ADd product Details
function addProduct(){
    var idValue=document.getElementById("_id").value;
    var pnameVal=document.getElementById("pname").value;
    var priceVal=document.getElementById("price").value;
    var quantityVal=document.getElementById("quantity").value;
    var categoryIdVal=document.getElementById("categoryId").value;
    var product={_id:idValue,pname:pnameVal,price:priceVal,quantity:quantityVal,categoryId:categoryIdVal};
     // console.log(category);
     fetch("http://localhost:3000/api/product/storeProductData",{
        method:"post",
        body:JSON.stringify(product),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
        document.getElementById("addProduct").innerHTML=result.msg;
        console.log(result);
    }).catch(err=>console.log(err));
}

//view All products
function viewAllProduct(){
    fetch("http://localhost:3000/api/product/showAllProduct",{
        method:"get"
    })
    .then(res=>res.text()).then(result=>{
        document.getElementById("viewProduct").innerHTML=result;
        console.log(result);
    }).catch(err=>console.log(err));
}

//add order details
function addOrderData(){
    var idValue=document.getElementById("_id").value;
    var categoryIdVal=document.getElementById("categoryId").value;
    var productIdVal=document.getElementById("productId").value;
    var custIdVal=document.getElementById("customerId").value;
    var amountVal=document.getElementById("amount").value;
    var orderDateVal=document.getElementById("orderDate").value;
    var order={_id:idValue,categoryId:categoryIdVal,productId:productIdVal,customerId:custIdVal,amount:amountVal,orderDate:orderDateVal};
     // console.log(category);
     fetch("http://localhost:3000/api/order/addorderData",{
        method:"post",
        body:JSON.stringify(order),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
        document.getElementById("addOrder").innerHTML=result.msg;
        console.log(result);
    }).catch(err=>console.log(err));
}

//customer details by emailId
function viewUserDetails(){
    var email=document.getElementById("emailId").value;
    var login={emailId:email}
    fetch("http://localhost:3000/api/login/findUserByEmailId",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.text()).then(result=>{
        document.getElementById("userData").innerHTML=result;
        console.log(result);
    }).catch(err=>console.log(err));
}

//Product name
function productName(){
    var productName=document.getElementById("pname").value;
    var product={pname:productName}
    fetch("http://localhost:3000/api/product/findProductByName",{
        method:"post",
        body:JSON.stringify(product),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.text()).then(result=>{
        document.getElementById("productName").innerHTML=result;
        console.log(result);
    }).catch(err=>console.log(err));
}

//by category Name
function categoryName(){
    var categoryName=document.getElementById("dname").value;
    var category={dname:categoryName}
    fetch("http://localhost:3000/api/category/findCategoryByName",{
        method:"post",
        body:JSON.stringify(category),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.text()).then(result=>{
        document.getElementById("categoryName").innerHTML=result;
        console.log(result);
    }).catch(err=>console.log(err));
}




function reset(){
    document.getElementById("emailId").value="";
    document.getElementById("password").value="";
}