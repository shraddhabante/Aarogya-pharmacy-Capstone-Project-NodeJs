import axios from "axios";
import {useState } from "react";


function AddProduct() {
    let [id, setId] = useState(0);
    let [pname, setProductName] = useState("");
    let[price,setPrice]=useState(0);
    let[quantity,setQuantity]=useState(0);
    let[categoryId,setCategoryId]=useState(0)
    let [pImage, setProductImg] = useState("");
    let [msg, setMsg] = useState("");


    async function addProductData() {
        event.preventDefault();
        let product = { _id: id, pname: pname, price:price,quantity:quantity,categoryId:categoryId,pImage:pImage, pImage: pImage };
        console.log(product);
        let result = await axios.post("http://localhost:3000/api/product/storeProductData", product,{
            headers: {
                "Content-type": "application/json",
                "authorization": sessionStorage.getItem("token")
            }
        });
        setMsg(result.data.msg)
    }


    return (
        <div>
            <form onSubmit={addProductData}>
                <label>Product Id</label>
                <input type="number" name="_id" onChange={(e) => setId(e.target.value)} /><br />
                <label>Product Name</label>
                <input type="text" name="pname" onChange={(e) => setProductName(e.target.value)} /><br />
                <label>Price</label>
                <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} /><br />
                <label>Quantity</label>
                <input type="number" name="quantity" onChange={(e) => setQuantity(e.target.value)} /><br />
                <label>Category Id</label>
                <input type="number" name="categoryId" onChange={(e) => setCategoryId(e.target.value)} /><br />
                <label>Product Image</label>
                <input type="url" name="pImage" onChange={(e) => setProductImg(e.target.value)} /><br />
                <input type="submit" value="Add Category" />
                <input type="reset" value="reset" />
            </form>
            <span>{msg}</span>
        </div>
    )
}
export default AddProduct;