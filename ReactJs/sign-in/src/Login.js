import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
    let [emailid, setEmail] = useState();
    let [password, setPassword] = useState();
    let navigate = useNavigate();
    let [typeofuser, setTypeOfUser] = useState();

    async function loginUser(event) {
        event.preventDefault();
        let login = { emailId: emailid, password: password, type_of_user: typeofuser };      // json data using useState hook

        let result = await axios.post("http://localhost:3000/api/login/signInData", login);

        if (result.data.msg === "Admin login successfully") {
            alert(result.data.msg)
            navigate("/adminhome");
            sessionStorage.setItem("token", result.data.token);
        } else if (result.data.msg === "Customer login Sucessfully") {
            alert(result.data.msg);
            navigate("/customerhome");
            sessionStorage.setItem("token", result.data.token);
        } else {
            alert("Failure try once agian")
        }

    }
    return (
        <div className="signInImg">
            <h2 className="fw-bold">Login Page</h2>
            <div className="">
                <form onSubmit={loginUser} className="text-center formLogin mt-5">
                    <label>Email Id</label>
                    <input type="email" name="emailid" onChange={(e) => setEmail(e.target.value)} className="m-2"/><br />
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="m-2"/><br />
                    <input type="radio" name="typeOfUser" value="customer" onClick={(e) => setTypeOfUser(e.target.value)} className="m-2"/>Customer
                    <input type="radio" name="typeOfUser" value="admin" onClick={(e) => setTypeOfUser(e.target.value)} className="m-2"/>Admin<br />
                    <input type="submit" value="submit" className="px-4 ms-5 mt-2 me-2 btn btn-info btn-sm"/>
                    <input type="reset" value="reset"className="px-4 ms-5 mt-2 me-2 btn btn-info btn-sm" />
                    <p class="mt-3 text-center">Don't have an account?<Link to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Login;