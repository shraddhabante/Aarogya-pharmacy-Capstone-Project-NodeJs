import { Link } from "react-router-dom";

function AdminHome() {
    return (
        <div>
            {/* <h2>Welcome to admin Home Page!</h2>
            <div>
                <Link to="/adminhome/showallcustomer">View All Customer|</Link>

                <Link to="/adminhome/viewcategory">View Category|</Link>

                <Link to="/adminhome/viewproduct">View Product|</Link>
                <Link to="/adminhome/vieworder">View Order</Link>
            </div>

            <div className="main-container d-flex">
                <div className="sidebar" id="side_nav">
                    <div className="header-box" style={{ backgroundColor: "#EEE9DA" }}>
                        <a className="navbar-brand" href="#"><img src="./image/logo.jpg"
                            style={{ width: "50px", height: "50px", borderRadius: "50%;" }} />
                            <span style={{ color: "dodgerblue" }} className="fw-bold fs-4">Arogya Pharma</span>
                        </a>
                    </div>
                    <div className="m-5">
                        <img src="./image/admin img.jpg" style={{ width: "50px", height: "50px", borderRadius: "50%;" }} />
                        <p className="fw-bold text-white mt-3 lh-1">JOHN MOSEF</p>
                        <p className="text-white">Admin</p>
                    </div>
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            <li><a href="" className="text-decoration-none text-white fs-5"><i
                                className="fa-solid fa-house-chimney-user"></i> Dashboard</a></li>
                            <li><Link to="/adminhome/showallcustomer" style={{ textDecoration: "none" }} className="text-white fs-5">View All Customer</Link></li>
                            <li><Link to="/adminhome/viewcategory" style={{ textDecoration: "none" }} className="text-white fs-5">View Category</Link></li>
                            <li><Link to="/adminhome/viewproduct" style={{ textDecoration: "none" }} className="text-white fs-5">View Product</Link></li>
                            <li><Link to="/adminhome/vieworder" style={{ textDecoration: "none" }} className="text-white fs-5">View Order</Link></li>
                        </ul>

                    </div>
                </div>
                <div className="content">
                    <h2 className="text-center text-light p-2 text-dark bg-opacity-50" style={{ backgroundColor: "#BDCDD6" }}>Welcome to
                        admin home page</h2>
                    <div className="border">
                        <nav className="navbar bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand text-bold">Dashboard</a>
                                <form className="d-flex">
                                    <a href="#"><input type="button" value="Logout" className=" mt-3 fs-5 px-3 rounded btn btn-outline-success" style={{ marginLeft: "30px" }} /></a><br />
                                </form>
                            </div>
                        </nav>
                    </div>
                    <div className="d-flex">

                    </div>
                </div>
            </div> */}


            <>
                <div className="container-fluid admin-container">

                    <ul className="sidebar text-dark admin-sidebar">
                        <img src="./image/admin img.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%;" }} className="mt-2" />
                        <li><span>Admin</span></li>

                        <li><span><i className="fa fa-home"></i></span><span>Home</span></li>
                        <li id="dashboard"><span><i className="fa fa-dashboard"></i></span><span>Dashboard</span></li>
                        <li id="user"><Link to="/adminhome/showallcustomer" style={{ color: "white", textDecoration: "none" }}><span><i className="fa fa-users"></i></span><span>Users</span></Link></li>
                        <li><Link to="/adminhome/viewcategory" style={{ color: "white", textDecoration: "none" }}><span><i className="fa-solid fa-disease"></i></span><span>Category</span></Link></li>
                        <li><Link to="/adminhome/viewproduct" style={{ color: "white", textDecoration: "none" }}><span><i className="fa-solid fa-pills"></i></span><span>Products</span></Link></li>
                        <li> <Link to="/adminhome/vieworder" style={{ color: "white", textDecoration: "none" }}><span><i className="fa fa-shopping-cart"></i></span><span>Order</span></Link></li>
                      


                    </ul>

                    <div className="content">
                        <h2 className="p-3 bg-info bg-opacity-10 border border-primary-subtle border-start rounded">Welcome to admin Home Page!</h2>
                        {/* <hr/> */}
                    
                        <div className="" id="dashboard">
                            <a className="navbar-brand text-bold">Dashboard</a>
                        </div>
                        <div className="d-flex row container ms-5 mb-5 mt-5">
                            {/* <div className="ps-5 mt-5 col-lg-3">
                                <Link to="/adminhome/showallcustomer" className="text-decoration-none p-5 border  dashboard-div ms-5" style={{ backgroundColor: "#F55050", color: "black" }}>View Customer</Link>
                            </div>
                            <div className="ps-2 mt-5 col-lg-3">
                                <Link to="/adminhome/viewcategory" className="text-decoration-none p-5 border  dashboard-div" style={{ backgroundColor: "#4E6C50", color: "black" }}>View Category</Link>
                            </div>
                            <div className="mt-5 col-lg-3">
                                <Link to="/adminhome/viewproduct" className="text-decoration-none p-5 border  dashboard-div" style={{ backgroundColor: "#9D3C72", color: "black" }}>View Product</Link>
                            </div>
                            <div className="mt-5 col-lg-3 ps-0">
                                <Link to="/adminhome/vieworder" className="text-decoration-none p-5 border  dashboard-div mt-5" style={{ backgroundColor: "#df9422", color: "black" }}>View Order</Link>
                            </div> */}

                        </div>
                    </div>
                </div>
            </>







        </div>
    )
}

export default AdminHome;