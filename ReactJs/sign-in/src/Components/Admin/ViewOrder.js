
import axios from "axios";
import { useEffect, useState } from "react";


function ViewOrder() {
    let [order, setOrder] = useState([]);

    useEffect(() => {
        async function viewOrderData() {
            try {
                let result = await axios.get("http://localhost:3000/api/order/viewOrderData",{
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                // console.log(result.data);
                setOrder(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        viewOrderData();
    },[])

    let orderData=order.map(o=><tr key={o._id}><td>{o._id}</td><td>{o.categoryId}</td><td>{o.productId}</td><td>{o.customerEmailId}</td><td>{o.pQuantity}</td><td>{o.amount}</td><td>{o.orderDate}</td></tr>)
    return (
        <div className="text-center mx-auto">
            <h2>All Order Details!</h2>
            <table className="mx-auto table">
                <thead className="table-info">
                    <tr>
                        <th>Id</th>
                        <th>Category Id</th>
                        <th>Product Id</th>
                        <th>Email Id</th>
                        <th>Product Quantity</th>
                        <th>Amount</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData}
                </tbody>
            </table>
        </div>
    )
}
export default ViewOrder;