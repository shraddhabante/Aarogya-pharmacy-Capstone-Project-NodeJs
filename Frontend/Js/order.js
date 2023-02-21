//add order details
function addOrderData() {
    // var idValue=document.getElementById("_id").value;
    var categoryIdVal = document.getElementById("categoryId").value;
    var productIdVal = document.getElementById("productId").value;
    var custIdVal = document.getElementById("customerEmailId").value;
    var quantityVal = document.getElementById("pQuantity").value;
    var amountVal = document.getElementById("amount").value;
    var orderDateVal = document.getElementById("orderDate").value;
    var order = { categoryId: categoryIdVal, productId: productIdVal, customerEmailId: custIdVal, pQuantity: quantityVal, amount: amountVal, orderDate: orderDateVal };
    // console.log(category);
    fetch("http://localhost:3000/api/order/addorderData", {
        method: "post",
        body: JSON.stringify(order),
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    }).then(res => res.json()).then(result => {
        document.getElementById("addOrder").innerHTML = result.msg;
        console.log(result);
    }).catch(err => console.log(err));
}


//view Order details by id
function orderByEmailId() {
    var email = document.getElementById("customerEmailId").value;
    fetch("http://localhost:3000/api/order/findOrderByCustId/" + email, {
        method: "get",
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    }).then(res => res.json()).
        then(result => {
            if (result.msg != null) {
                opData = document.getElementById("viewOrder");
                opData.innerHTML = result.msg;
            } else {
                opData = document.getElementById("viewOrder");
                opData.innerHTML = "id : " + result._id + "<br>Category id: " + result.categoryId + "<br>Product Id: " + result.productId + "<br>Customer EmailId:" + result.customerEmailId + "<br>Product Quanity: " + result.pQuantity + "<br>Amount: " + result.amount + "<br>Order Date :" + result.orderDate;
            }
        }).catch(err => console.log(err));
}


async function viewAllOrders(){
    let res = await fetch("http://localhost:3000/api/order/viewOrderData",{
        method: "get",
        headers: {
            "Content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    });
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table table-bordered border-primary mt-3");
    var firstRow = document.createElement("tr");

    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("_id");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("categoryId");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("productId");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("customerEmailId");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    var firstRowFifthColumn = document.createElement("th");
    var firstRowFifthColumnValue = document.createTextNode("pQuantity");
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);

    var firstRowSixthColumn = document.createElement("th");
    var firstRowSixthColumnValue = document.createTextNode("amount");
    firstRowSixthColumn.appendChild(firstRowSixthColumnValue);

    var firstRowSeventhColumn = document.createElement("th");
    var firstRowSeventhColumnValue = document.createTextNode("orderDate");
    firstRowSeventhColumn.appendChild(firstRowSeventhColumnValue);


    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);
    firstRow.appendChild(firstRowFifthColumn);
    firstRow.appendChild(firstRowSixthColumn);
    firstRow.appendChild(firstRowSeventhColumn);
  

    tableTag.appendChild(firstRow);

    for (i = 0; i < data.length; i++) {
        var secondRow = document.createElement("tr");

        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode(data[i].categoryId);
        secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

        var secondRowThirdColumn = document.createElement("td");
        var secondRowThirdColumnValue = document.createTextNode(data[i].productId);
        secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

        var secondRowFourthColumn = document.createElement("td");
        var secondRowFourthColumnValue = document.createTextNode(data[i].customerEmailId);
        secondRowFourthColumn.appendChild(secondRowFourthColumnValue);

        var secondRowFifthColumn = document.createElement("td");
        var secondRowFifthColumnValue = document.createTextNode(data[i].pQuantity);
        secondRowFifthColumn.appendChild(secondRowFifthColumnValue);

        var secondRowSixthColumn = document.createElement("td");
        var secondRowSixthColumnValue = document.createTextNode(data[i].amount);
        secondRowSixthColumn.appendChild(secondRowSixthColumnValue);

        var secondRowSeventhColumn = document.createElement("td");
        var secondRowSeventhColumnValue = document.createTextNode(data[i].orderDate);
        secondRowSeventhColumn.appendChild(secondRowSeventhColumnValue);

        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
        secondRow.appendChild(secondRowThirdColumn);
        secondRow.appendChild(secondRowFourthColumn);
        secondRow.appendChild(secondRowFifthColumn);
        secondRow.appendChild(secondRowSixthColumn);
        secondRow.appendChild(secondRowSeventhColumn);


        tableTag.appendChild(secondRow);
    }
    document.getElementById("displayOrder").appendChild(tableTag)
}