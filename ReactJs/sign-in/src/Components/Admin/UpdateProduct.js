import axios from "axios";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function UpdateProduct() {
    let [pname, setProductName] = useState("");
    let[price,setPrice]=useState(0);
    let[quantity,setQuantity]=useState(0);
    let[categoryId,setCategoryId]=useState(0)
    let [pImage, setProductImg] = useState("");
    let{_id}=useParams();

useEffect(()=>{
    getProductData();
},[])
async function getProductData(){
    let result=await axios.get(`http://localhost:3000/api/product/updateProductById/${_id}`);
    setProductName(result.data.pname);
    setPrice(result.data.price);
    setQuantity(result.data.quantity);
    setCategoryId(result.data.categoryId);
    setProductImg(result.data.pImage);
}
    async function updateProductData() {
        event.preventDefault();
        let product = { pname: pname, price:price,quantity:quantity,categoryId:categoryId,pImage:pImage, pImage: pImage };
        console.log(product);
        let result = await axios.patch(`http://localhost:3000/api/product/updateProductById/${_id}`, product,{
            headers: {
                "Content-type": "application/json",
                "authorization": sessionStorage.getItem("token")
            }
        });
        // setMsg(result.data.msg)
        alert(result.data.msg);
    }


    return (
        <div>
            <form onSubmit={updateProductData}>
                <h2 className="mt-5">Update Product Details!</h2>
                <div className="container mx-auto col-md-4 p-3 bg-info bg-opacity-10 border border-info border-start rounded">
                <label>Product Name</label>
                <input type="text" name="pname" className="m-1"onChange={(e) => setProductName(e.target.value)} /><br />
                <label>Price</label>
                <input type="number" name="price" className="m-1" onChange={(e) => setPrice(e.target.value)} /><br />
                <label>Quantity</label>
                <input type="number" name="quantity" className="m-1" onChange={(e) => setQuantity(e.target.value)} /><br />
                <label>Category Id</label>
                <input type="number" name="categoryId" className="m-1" onChange={(e) => setCategoryId(e.target.value)} /><br />
                <label>Product Image</label>
                <input type="url" name="pImage" className="m-1" onChange={(e) => setProductImg(e.target.value)} /><br />
                <input type="submit" value="Update product" className="btn btn-info m-3"/>
                <input type="reset" value="reset" className="btn btn-info m-3"/>
                </div>
            </form>
        </div>
    )
}
export default UpdateProduct;