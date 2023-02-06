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
    // console.log(customer);
    fetch("http://localhost:3000/api/login/signInData", {
        method: "post",
        body: JSON.stringify(login),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).then(result => {
        // document.getElementById("msg").innerHTML = result;
        // console.log(result)
        if(result.msg=="Admin login successfully"){
            window.location.href="http://127.0.0.1:5500/adminHome.html"
        }else if(result.msg=="Student login successfully"){
            window.location.href="http://127.0.0.1:5500/customerHome.html" 
        } else {
            document.getElementById("msg").innerHTML=result.msg;

        }
    }).catch(err => console.log(err));
    reset();
}

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



function reset(){
    document.getElementById("emailId").value="";
    document.getElementById("password").value="";
}