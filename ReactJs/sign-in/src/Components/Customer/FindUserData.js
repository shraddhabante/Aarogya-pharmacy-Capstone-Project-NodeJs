import axios from "axios";
import { useEffect, useState } from "react";

function FindUserData() {
    let [customer, setCustomer] = useState("")
    let [emailId, setEmail] = useState("");
    let [result, setResult] = useState(true);
    let [msg, setMsg] = useState("");

    useEffect(() => {
        userData();
    }, [])

    async function userData() {
        // let email = sessionStorage.getItem("emailId")
        let result = await axios.get("http://localhost:3000/api/login/findUserByEmailId/" + emailId, {
            headers: { "authorization": sessionStorage.getItem("token") }
        });
        setCustomer(result.data)
        console.log(result.data)
    }
    return (
        <div>

            {/* <div className="">
                <table className="table">
                    <thead>
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
                        {customer.map(cust =>
                            <tr key={cust._id}>
                                <td>{cust._id}</td>
                                <td>{cust.first_name}</td>
                                <td>{cust.last_name}</td>
                                <td>{cust.emailId}</td>
                                <td>{cust.password}</td>
                                <td>{cust.type_of_user}</td>
                                <td>{cust.address}</td>
                                <td>{cust.contact}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> */}
        </div>
    )
}

export default FindUserData;