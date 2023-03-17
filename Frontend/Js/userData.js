//find customer by Id
function searchCustomer(){
    // var email=document.getElementById("emailId").value;
    var email=localStorage.getItem("emailId")
    fetch("http://localhost:3000/api/login/findUserByEmailId/"+email,{
        method:"get",
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json())
    .then(result=>{
        if(result.msg!=null){
        opData=document.getElementById("viewCustomer");
        opData.innerHTML=result.msg;
        }else{
            opData=document.getElementById("viewCustomer");
            opData.innerHTML="first_name:  "+result.first_name+"<br/>Last_name:  " +result.last_name+"<br>Email Id:  "+result.emailId+"<br>Type of User:  "+result.type_of_user+"<br>Address:  "+result.address+"<br>Contact:  "+result.contact;
        }
    }).catch(err=>console.log(err));
}



