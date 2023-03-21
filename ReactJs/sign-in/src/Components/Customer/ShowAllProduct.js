
import axios from "axios";
import { useEffect, useState } from "react";


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

    // let productData=product.map(p=><tr key={p._id}><td>{p._id}</td><td>{p.pname}</td><td>{p.price}</td><td>{p.quantity}</td><td>{p.categoryId}</td><td><img src={p.pImage} width="200px" height="200px"/></td></tr>)
    // return (
    //     <div className="text-center mx-auto">
    //         <h2>All Product Details!</h2>
    //         <table className="mx-auto table">
    //             <thead className="table-primary">
    //                 <tr>
    //                     <th>Id</th>
    //                     <th>Product Name</th>
    //                     <th>Product Price</th>
    //                     <th>Product Quantity</th>
    //                     <th>Category Id</th>
    //                     <th>Product Image</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {productData}
    //             </tbody>
    //         </table>
    //     </div>
    // )

    return (
        <div>
            <h2 className="mt-4 p-2 bg-warning bg-opacity-10 border border-warning border-start rounded container">All Product Details!</h2>
            <div className="d-flex row mt-5 container ms-5">
                {product.map((p) =>
                    <div className="prod-card col-lg-3 ms-5 mb-3" key={p._id}>
                        <div className="">
                            <h6>Category Id:{p.categoryId}</h6>
                            <hr/>
                            <div className="div2">
                                <img src={p.pImage} width="100%" height="100%" />
                            </div>
                            <div className="">
                                <h4>{p.pname}</h4>
                                <div className="d-flex row" style={{backgroundColor:"khaki"}}>
                                    <div className="col-lg-6">
                                        <p><span className="fw-bold">Price: </span>${p.price}</p>
                                        <p></p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p><span className="fw-bold">Quanity:</span> {p.quantity}</p>
                                        <p></p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                )}
            </div>
        </div>

    )
}
export default ViewProduct;