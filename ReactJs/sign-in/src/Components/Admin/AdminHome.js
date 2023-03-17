import { Link } from "react-router-dom";

function AdminHome(){
    return(
        <div>
            <h2>Welcome to admin Home Page!</h2>
            <div>
                <Link to="/adminhome/showallcustomer">View All Customer|</Link>
                {/* <Link to="/adminhome/addcategory">Add Category|</Link> */}
                <Link to="/adminhome/viewcategory">View Category|</Link>
                {/* <Link to="/adminhome/addproduct">Add Product|</Link> */}
                <Link to="/adminhome/viewproduct">View Product|</Link>
                <Link to="/adminhome/vieworder">View Order</Link>
            </div>
        </div>
    )
}

export default AdminHome;