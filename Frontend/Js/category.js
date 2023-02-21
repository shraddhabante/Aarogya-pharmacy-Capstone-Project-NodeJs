
//view all category
async function viewAllCategory(){
    let res=await fetch("http://localhost:3000/api/category/showAllCategory",{
        method:"get",
        headers:{
            "Content-type":"application/json",
            // "authorization":sessionStorage.getItem("token")
            "authorization":localStorage.getItem("token")
        }
    });
    let data=await res.json();
    console.log(data);
    var tableTag = document.createElement("table");
    tableTag.setAttribute("class","table");
    var firstRow = document.createElement("tr");
    firstRow.setAttribute("class","tr")
    
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("_id");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("dname");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("dImage");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);

    tableTag.appendChild(firstRow);

    for(i=0;i<data.length;i++){
        var secondRow = document.createElement("tr");
        
        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);
    
        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode(data[i].dname);
        secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

        var secondRowThirdColumn = document.createElement("td");
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src",data[i].dImage);
        // imgTag.setAttribute("src",data[i].dImage)
        secondRowThirdColumn.appendChild(imgTag);
        imgTag.setAttribute("width","130px");
        imgTag.setAttribute("height","130px");

        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
        secondRow.appendChild(secondRowThirdColumn);
    
        tableTag.appendChild(secondRow);
        }
        document.getElementById("viewCategory").appendChild(tableTag);
}

//Add Category
function addCategory(){
    var idValue=document.getElementById("_id").value;
    var diseaseName=document.getElementById("dname").value;
    var diseaseImg=document.getElementById("dImage").value;
    var category={_id:idValue,dname:diseaseName,dImage:diseaseImg};
    // console.log(category);
    fetch("http://localhost:3000/api/category/addCategoryData",{
        method:"post",
        body:JSON.stringify(category),
        headers:{
            "Content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json()).then(result=>{
        // document.getElementById("addCategory").innerHTML=result.msg;
        window.alert(result.msg)
        console.log(result);
    }).catch(err=>console.log(err));
}

//by category Name
function categoryName(){
    var categoryName=document.getElementById("dname").value;
    fetch("http://localhost:3000/api/category/findCategoryByName/"+categoryName,{
        method:"get",
        headers:{
            "Content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }

    }).then(res=>res.json()).
    then(result=>{
        if(result.msg!=null){
            opData=document.getElementById("categoryName");
            opData.innerHTML=result.msg;
        }else{
            opData=document.getElementById("categoryName");
            opData.innerHTML="id : "+result._id+"<br>Disease Name: "+result.dname;
        }
    }).catch(err=>console.log(err));
}

