
import axios from "axios";
import { useEffect, useState } from "react";


function ViewProduct() {
    let [product, setProduct] = useState([]);

    useEffect(() => {
        async function viewProductData() {
            try {
                let result = await axios.get("http://localhost:3000/api/product/showAllProduct",{
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                // console.log(result.data);
                setProduct(result.data);
            } catch (err) {
                console.log(err)
            }
        }
       viewProductData();
    },[])

    let productData=product.map(p=><tr key={p._id}><td>{p._id}</td><td>{p.pname}</td><td>{p.price}</td><td>{p.quantity}</td><td>{p.categoryId}</td><td><img src={p.pImage} width="200px" height="200px"/></td></tr>)
    return (
        <div className="text-center mx-auto">
            <h2>All Product Details!</h2>
            <table className="mx-auto table">
                <thead className="table-primary">
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                        <th>Category Id</th>
                        <th>Product Image</th>
                    </tr>
                </thead>
                <tbody>
                    {productData}
                </tbody>
            </table>
        </div>
    )
}
export default ViewProduct;