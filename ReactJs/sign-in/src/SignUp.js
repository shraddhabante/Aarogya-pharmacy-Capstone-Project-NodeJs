import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
    let [first_name, setFirstName] = useState();
    let [last_name, setLastName] = useState();
    let [emailId, setEmail] = useState();
    let [password, setPassword] = useState();
    let [address, setAddress] = useState();
    let [contact, setContact] = useState();
    // let navigate = useNavigate();
    let [type_of_user, setTypeOfUser] = useState();

    async function signUpData(event) {
        event.preventDefault();
        try {
            var signUp = { first_name: first_name, last_name: last_name, emailId: emailId, password: password, type_of_user: type_of_user, address: address, contact: contact }
            let result = await axios.post("http://localhost:3000/api/login/signUpData", signUp);
            console.log(result.data.msg)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={signUpData}>
                <h2 className="text-center">SignUp Page!</h2>
                <label className="mt-3 ps-5">Type of User</label>
                <input type="radio" name="type_of_user" onChange={(e) => setTypeOfUser(e.target.value)} />Admin
                <input type="radio" name="type_of_user" onChange={(e) => setTypeOfUser(e.target.value)} />Customer<br />
                <label>First Name</label>
                <input type="text" name="first_name" className="my-1 mt-4" onChange={(e) => setFirstName(e.target.value)} />
                <label>Last Name</label>
                <input type="text" name="last_name" className="m-1" onChange={(e) => setLastName(e.target.value)} /><br />
                <label>Email Id</label>
                <input type="email" name="emailId" className="m-1 mt-4" onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" name="password" className="m-1" onChange={(e) => setPassword(e.target.value)} /><br />
                <label>Address</label>
                <input type="text" name="address" className="m-1 mt-4" onChange={(e) => setAddress(e.target.value)} />
                <label>Contact</label>
                <input type="tel" name="contact" className="m-1" onChange={(e) => setContact(e.target.value)} /><br />
                <input type="button" value="submit" className="mt-3 btn btn-dark btn-sm px-5" />
                <input type="reset" value="reset" className="ms-3 btn btn-dark btn-sm px-5 mt-3" /><br />
                <p className="mt-3 text-center">Already have an account?<Link to="/loginPage">Login</Link></p>
            </form>
        </div>
    )
}
export default SignUp;