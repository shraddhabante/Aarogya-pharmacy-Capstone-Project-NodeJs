
//view all category
async function viewAllCategory(){
    let res=await fetch("http://localhost:3000/api/category/showAllCategory");
    let data=await res.json();
    console.log(data);
    var tableTag = document.createElement("table");
    tableTag.setAttribute("class","table categoryTab table-dark table-striped-columns");
    var firstRow = document.createElement("tr");
    firstRow.setAttribute("class","tr")
    
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("_id");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("dname");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);

    tableTag.appendChild(firstRow);

    for(i=0;i<data.length;i++){
        var secondRow = document.createElement("tr");
        
        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);
    
        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode(data[i].dname);
        secondRowSecondColumn.appendChild(secondRowSecondColumnValue);
    
        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
    
        tableTag.appendChild(secondRow);
        }
        document.getElementById("viewCategory").appendChild(tableTag);
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
        // document.getElementById("addCategory").innerHTML=result.msg;
        window.alert(result.msg)
        console.log(result);
    }).catch(err=>console.log(err));
}













//view all category
// function viewAllCategory(){
//     fetch("http://localhost:3000/api/category/showAllCategory",{
//         method:"get"
//     })
//     .then(res=>res.text()).then(result=>{
//         document.getElementById("viewCategory").innerHTML=result;
//         console.log(result);
//     }).catch(err=>console.log(err));
// }