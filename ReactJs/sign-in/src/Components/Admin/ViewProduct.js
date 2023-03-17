
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewProduct() {
    let [product, setProduct] = useState([]);

    useEffect(() => {
        async function viewProductData() {
            try {
                let result = await axios.get("http://localhost:3000/api/product/showAllProduct", {
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                // console.log(result.data);
                setProduct(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        viewProductData();
    }, [])
    async function deleteProduct(_id){
        try{
            let result=await axios.delete(`http://localhost:3000/api/product/deleteProductById/${_id}`);
            viewProductData();
            alert(result.data.msg)
        }catch(err){
            console.log(err);
        }
    }

    // let productData=product.map(p=><tr key={p._id}><td>{p._id}</td><td>{p.pname}</td><td>{p.price}</td><td>{p.quantity}</td><td>{p.categoryId}</td><td><img src={p.pImage} width="200px" height="200px"/></td></tr>)
    return (
        <div>
            <Link to="/adminhome/addproduct" className="btn btn-primary">Add Category</Link>
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(p =>
                        <tr key={p._id}>
                            <td>{p._id}</td>
                            <td>{p.pname}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity}</td>
                            <td>{p.categoryId}</td>
                            <td><img src={p.pImage} width="200px" height="200px" /></td>
                            <td>
                                <Link to={`/adminhome/updateproduct/${p._id}`} className="btn btn-warning px-3 py-2 m-2">Edit</Link>
                                <button onClick={() => deleteProduct(p._id)} className="btn btn-danger p-2 m-2">Delete</button> 
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}
export default ViewProduct;