import { useState } from "react";
import axios from "axios";
function Order() {
    let [categoryName, setCategory] = useState("");
    let [productName, setProdName] = useState("");
    let[customerEmailId,setEmail]=useState("");
    let[pQuantity,setQuantity]=useState(0);
    let[amount,setAmount]=useState(0);
    let[orderDate,setDate]=useState("");
    let [msg, setMsg] = useState("");


    async function addOrderData(event) {
        event.preventDefault();
        let order = { categoryName: categoryName, productName: productName,customerEmailId:customerEmailId, pQuantity:pQuantity,amount:amount,orderDate:orderDate};
        let result = await axios.post("http://localhost:3000/api/order/addorderData", order, {
            headers: {
                "Content-type": "application/json",
                "authorization": sessionStorage.getItem("token")
            }
        });
        // console.log(result.data.msg)
        alert(result.data.msg)
    }


    return (
        <div>
           {/* <Link to="/adminhome/viewcategory" className="btn btn-info mt-3 fs-5 px-4 rounded">Back</Link> */}
            <form onSubmit={addOrderData}>
                <h2 className="mt-5">Add Order Details!</h2>
                <div className="container mx-auto col-md-4 p-3 bg-info bg-opacity-10 border border-info border-start rounded">
                    <label>Category Name</label>
                    <input type="text" name="categoryName" className="m-1" onChange={(e) => setCategory(e.target.value)} /><br />
                    <label>Product Name</label>
                    <input type="text" name="productName" className="m-1" onChange={(e) => setProdName(e.target.value)} /><br />
                    <label>Email Id</label>
                    <input type="email" name="customerEmailId" className="m-1" onChange={(e) => setEmail(e.target.value)} /><br />
                    <label>Product Quanity</label>
                    <input type="number" name="pQuantity" className="m-1" onChange={(e) => setQuantity(e.target.value)} /><br />
                    <label>Product Amount</label>
                    <input type="number" name="amount" className="m-1" onChange={(e) => setAmount(e.target.value)} /><br />
                    <label>Order Date</label>
                    <input type="date" name="orderDate" className="m-1" onChange={(e) => setDate(e.target.value)} /><br />
                    <input type="submit" value="Order Now" className="btn btn-info m-3"/>
                    <input type="cancel" value="cancel"  className="btn btn-info m-3"/>
                </div>
            </form>
            {/* <span>{msg}</span> */}

        </div>
    )
}
export default Order;