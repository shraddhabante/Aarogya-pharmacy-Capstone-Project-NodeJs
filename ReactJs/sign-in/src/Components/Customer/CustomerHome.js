import { Link } from "react-router-dom";

function CustomerHome(){
    return(
        <div>
            <h2>Welcome to customer Home Page!</h2>
            <div>
                <Link to="/customerhome/finduserdata">View User Data|</Link>
                <Link to="/customerhome/showcategory">View Category|</Link>
                <Link to="/customerhome/showproduct">Show Product|</Link>
                <Link to="/customerhome/categorybyname">Category By Name</Link>
            </div>
        </div>
    )
}

export default CustomerHome;