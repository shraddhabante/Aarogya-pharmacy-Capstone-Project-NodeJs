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
        let email = sessionStorage.getItem("emailId")
        let result = await axios.get("http://localhost:3000/api/login/findUserByEmailId/" + email, {
            headers: { "authorization": sessionStorage.getItem("token") }
        });
        setCustomer(result.data)
    }
    return (
        <div>
            <div className="column is-half">
                <table className="table is-striped is-fullwidth mt-5">
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
                        {customer.map((cust,index)=>{
                            <tr key={cust._id}>
                                <td>{index+1}</td>
                                <td>{cust.first_name}</td>
                                <td>{cust.last_name}</td>
                                <td>{cust.emailId}</td>
                                <td>{cust.password}</td>
                                <td>{cust.type_of_user}</td>
                                <td>{cust.address}</td>
                                <td>{cust.contatc}</td>
                                <td>
                                    <button className="button is-info is-small">Edit</button>
                                    <button className="button is-info is-small">Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FindUserData;