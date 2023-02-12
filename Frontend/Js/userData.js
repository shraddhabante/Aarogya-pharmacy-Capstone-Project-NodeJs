// async function searchCustomer() {
//     let email = document.getElementById("emailId").value;
//     let result=document.getElementById("viewCustomer");
//     let getdata=await fetch("http://localhost:3000/api/login/findUserByEmailId/"+email);
//     let data=await getdata.json();
//     console.log(data); 
//     if(data.length==0){
//         result.innerHTML="No Customer present with email id as "+email
//     }else {
//         result.innerHTML = data.map(obj=>obj._id,obj.first_name,obj.last_name,obj.emailId,obj.password,obj.type_of_user,obj.address,obj.contact).join("<br/>");  
//     }

// }

function searchCustomer(){
    var email=document.getElementById("emailId").value;
    fetch("http://localhost:3000/api/login/findUserByEmailId/"+email,{
        method:"get"
    }).then(res=>res.text()).then(result=>{
        document.getElementById("viewCustomer").innerHTML=(result);
       result.map(obj=> document.getElementById("viewCustomer").innerHTML=(obj.first_name,obj.last_name,obj.emailId,obj.password,obj.type_of_user,obj.address,obj.contact)
        console.log(result);
    }).catch(err=>console.log(err));
}

// async function searchCustomer() {
//     let email = document.getElementById("emailId").value;
//     let res = await fetch("http://localhost:3000/api/login/findUserByEmailId/"+email);
//     let data = await res.json();
//     console.log(data);

