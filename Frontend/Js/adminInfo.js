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
        if (result.msg == "Admin login Sucessfully") {
            window.location.href = "http://127.0.0.1:5555/adminHome.html"
        } else if (result.msg == "Customer login sucessfully") {
            window.location.href = "http://127.0.0.1:5555/customerHome.html"
        } else {
            document.getElementById("msg").innerHTML = result.msg;

        }
    }).catch(err => console.log(err));
    reset();
}

//sign Up
function signUpData() {
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
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
    var addressVal = document.getElementById("address").value;
    var contactVal = document.getElementById("contact").value;
    var login = { first_name: fname, last_name: lname, emailId: email, password: pass, type_of_user: type_of_user_val, address: addressVal, contact: contactVal }
    console.log(login);
    fetch("http://localhost:3000/api/login/signUpData", {
        method: "post",
        body: JSON.stringify(login),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).then(result => {
        document.getElementById("msg").innerHTML = result.msg;
        console.log(result);
    }).catch(err => console.log(err));
}

//show all customers
// function showAllCustomers(){
//     fetch("http://localhost:3000/api/login/showAllCustomers",{
//         method:"get"
//     })
//     .then((res)=>res.text()).then((result)=>{
//         document.getElementById("display").innerHTML=(result);
//         console.log(result);
//     }).catch(err=>console.log(err));
// }
async function showAllCustomers() {
    let res = await fetch("http://localhost:3000/api/login/showAllCustomers");
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table table-bordered border-primary mt-3");
    var firstRow = document.createElement("tr");

    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("first_name");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("last_name");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("emailId");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("password");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    var firstRowFifthColumn = document.createElement("th");
    var firstRowFifthColumnValue = document.createTextNode("type_of_user");
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);

    var firstRowSixthColumn = document.createElement("th");
    var firstRowSixthColumnValue = document.createTextNode("address");
    firstRowSixthColumn.appendChild(firstRowSixthColumnValue);

    var firstRowSeventhColumn = document.createElement("th");
    var firstRowSeventhColumnValue = document.createTextNode("contact");
    firstRowSeventhColumn.appendChild(firstRowSeventhColumnValue);

    var firstRowEighthColumn = document.createElement("th");
    var firstRowEighthColumnValue = document.createTextNode("_id");
    firstRowEighthColumn.appendChild(firstRowEighthColumnValue);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);
    firstRow.appendChild(firstRowFifthColumn);
    firstRow.appendChild(firstRowSixthColumn);
    firstRow.appendChild(firstRowSeventhColumn);
    firstRow.appendChild(firstRowEighthColumn);


    tableTag.appendChild(firstRow);

    for (i = 0; i < data.length; i++) {
        var secondRow = document.createElement("tr");

        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i].first_name);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode(data[i].last_name);
        secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

        var secondRowThirdColumn = document.createElement("td");
        var secondRowThirdColumnValue = document.createTextNode(data[i].emailId);
        secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

        var secondRowFourthColumn = document.createElement("td");
        var secondRowFourthColumnValue = document.createTextNode(data[i].password);
        secondRowFourthColumn.appendChild(secondRowFourthColumnValue);

        var secondRowFifthColumn = document.createElement("td");
        var secondRowFifthColumnValue = document.createTextNode(data[i].type_of_user);
        secondRowFifthColumn.appendChild(secondRowFifthColumnValue);

        var secondRowSixthColumn = document.createElement("td");
        var secondRowSixthColumnValue = document.createTextNode(data[i].address);
        secondRowSixthColumn.appendChild(secondRowSixthColumnValue);

        var secondRowSeventhColumn = document.createElement("td");
        var secondRowSeventhColumnValue = document.createTextNode(data[i].contact);
        secondRowSeventhColumn.appendChild(secondRowSeventhColumnValue);

        var secondRowEighthColumn = document.createElement("td");
        var secondRowEighthColumnValue = document.createTextNode(data[i]._id);
        secondRowEighthColumn.appendChild(secondRowEighthColumnValue);

        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
        secondRow.appendChild(secondRowThirdColumn);
        secondRow.appendChild(secondRowFourthColumn);
        secondRow.appendChild(secondRowFifthColumn);
        secondRow.appendChild(secondRowSixthColumn);
        secondRow.appendChild(secondRowSeventhColumn);
        secondRow.appendChild(secondRowEighthColumn);

        tableTag.appendChild(secondRow);
    }
    document.getElementById("display").appendChild(tableTag)
}




function logout() {
    window.location.href = "http://127.0.0.1:5555/index.html"
}

function reset() {
    document.getElementById("emailId").value = "";
    document.getElementById("password").value = "";
}