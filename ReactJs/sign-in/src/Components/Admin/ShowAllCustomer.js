import axios from "axios";
import { useEffect, useState } from "react";


function ShowAllCustomer() {
    let [customer, setCustomer] = useState([]);

    useEffect(() => {
        async function viewCustData() {
            try {
                let result = await axios.get("http://localhost:3000/api/login/showAllCustomers",{
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                // console.log(result.data);
                setCustomer(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        viewCustData();
    },[])

    let customerData=customer.map(c=><tr key={c._id}><td>{c._id}</td><td>{c.first_name}</td><td>{c.last_name}</td><td>{c.emailId}</td><td>{c.password}</td><td>{c.type_of_user}</td><td>{c.address}</td><td>{c.contact}</td></tr>)
    return (
        <div>
            {/* <h2>View All Customer Details!</h2> */}
            {/* <input type="button" value="View Customer Data" onClick={viewCustData} /> */}
            {/* <hr/> */}
            <h2>All Customer Details!</h2>
            <table className="table">
                <thead className="table-info">
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Password</th>
                        <th>Type Of User</th>
                        <th>Address</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {customerData}
                </tbody>
            </table>
        </div>
    )
}
export default ShowAllCustomer;