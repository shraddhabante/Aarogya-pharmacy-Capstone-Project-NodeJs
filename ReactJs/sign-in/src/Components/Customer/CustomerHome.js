import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function CustomerHome() {
    return (
        <div>
            <h2>Welcome to customer Home Page!</h2>
            <div>
                <Link to="/customerhome/finduserdata">View User Data|</Link>
                <Link to="/customerhome/showcategory">View Category|</Link>
                <Link to="/customerhome/showproduct">Show Product|</Link>
                <Link to="/customerhome/categorybyname">Category By Name</Link>
                <Link to="/customerhome/order">Order now</Link>
            </div>

            {/* <------------------------------------------------------nav----------------------------------------------> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./image/logo.jpg" width="50px" height="50px" /><span style={{ color: "dodgerblue" }} className="fw-bold fs-4">Aarogya Pharma</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active px-5 fs-5" aria-current="page" href="#home">Home</a>
                            <a className="nav-link px-5 fs-5" href="#aboutus">About</a>
                            <a className="nav-link px-5 fs-5" href="#contact">Contact</a>
                        </div>
                    </div>
                    <form className="d-flex" role="search">
                        <Link to="/" className="btn">LogOut</Link>

                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>

            </nav >

            {/* --------------------------Data---------------------------------------- */}
            <section className="bodyImg" id="home">
                <h2 className="p-5 lh-5 fw-bold text-center">
                    Welcome to <br />Aarogya Pharmacy Management System!
                </h2>
                <div id="home" className="container d-flex">
                    <div className="homeImg">
                        <img src="./image/homeImg2.jpg" width="100%" height="100%" />
                    </div>
                    <div className="p-5" style={{ width: "50%" }}>
                        <i className="fw-bold px-5 fs-4">Medicine delivered discreetly to your door</i>
                        <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas laborum
                            animi quam. Vero consectetur beatae fugit facere id quidem blanditiis, ipsa harum modi
                            nostrum libero adipisci natus dignissimos aperiam!</p>
                        <Link to="/customerhome/order" className="btn px-4 py-2" style={{ backgroundColor: "rgb(11, 138, 189)", color: "whitesmoke" }}>Order now</Link>
                        {/* style={{backgroundColor: "rgb(11, 138, 189)", color: "whitesmoke"}}>Order Now</a> */}

                        <div className="slider-icon mt-3 align-self-center">
                            <span className="mt-xl-1 mt-lg-0 dashicons dashicons-phone"></span>
                            <span className="fs-4 border border-secondary rounded p-2 mt-2"><i
                                className="fa-solid fa-phone rounded-circle bg-dark p-2 text-white"></i>1-234-567-890</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ------------------------------Category------------------------------------------ */}
            <section className="border border-info rounded m-2" id="category">
                <div className="container">
                    <div className="row">
                        <div className="title-section text-center col-12">
                            <h2 className="text-uppercase">Popular Category</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex row justify-content-evenly mt-3">
                        <div className="col-lg-4">
                            <div className="div1">
                                <img src="https://www.bigbasket.com/media/uploads/p/xxl/40215859_1-basic-ayurveda-mouth-gel-for-la-treatment-for-mouth-ulcers.jpg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="text-center fs-3 fw-bold">
                                <p>Gel</p>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="div1">
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/medicines%2C-nirbhaya-1_647_080916110045.jpg?VersionId=fm_xnarJLgfRcSGjlItWvidNoAH1aXHn"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="text-center fs-3 fw-bold">
                                <p>Tablet</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="div1">
                                <img src="https://media.istockphoto.com/id/186607295/photo/bottle-pouring-medicine-syrup-in-spoon.jpg?s=612x612&w=0&k=20&c=MreDAPImIXXCCuYZCK04hYII_O9ayXYjXUiJt8vli4g="
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="text-center fs-3 fw-bold">
                                <p>Syrup</p>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="div1">
                                <img src="https://img3.exportersindia.com/product_images/bc-full/2019/2/6183988/germanium-powder-1551250646-4752790.jpeg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="text-center fs-3 fw-bold">
                                <p>Powder</p>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="div1">
                                <img src="https://osiamart.com/image/cache/catalog/cold-drinks/category%20banner/Baby%20Product-600x315.jpg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="text-center fs-3 fw-bold">
                                <p>Baby Care Product</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="div1">
                                <img src="https://static.vecteezy.com/system/resources/previews/002/005/568/original/injection-and-vaccine-glass-illustration-free-vector.jpg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div className="text-center fs-3 fw-bold">
                                <p>Injection</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/customerhome/showcategory" className="btn btn-info px-4 py-2 mb-3">View All Category</Link>
                </div>

            </section>

            {/* ------------------------------Product---------------------------------- */}
            <section id="product">
                <div class="title-section text-center col-12 mt-5">
                    <h2 class="text-uppercase">All Available Medicine</h2>
                </div>
                <div class="container-fluid">
                    <div class="d-flex justify-content-evenly mt-3">
                        <div class="border border-3">
                            <div class="div2">
                                <img src="https://newassets.apollo247.com/pub/media/catalog/product/b/e/ben0255_1.jpg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div class="text-center lh-1">
                                <p class="fs-6 fw-bold">Dry Cough Syrup</p>
                                <p>$150</p>
                            </div>

                        </div>
                        <div class="border border-3">
                            <div class="div2">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/CW/BB/DS/129887935/paracetamol-tablets-500-mg-1000x1000.jpeg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div class="text-center">
                                <p class="fs-6 fw-bold">Paracetamol</p>
                                <p>$20</p>
                            </div>
                        </div>
                        <div class="border border-3">
                            <div class="div2">
                                <img src="https://www.shophealthy.in/image/cache/sellers/40523/adven-hemotone-tablet-25g-useful-in-anemia-iron-deficiency-407-1000x1000.jpeg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div class="text-center">
                                <p class="fs-6 fw-bold">HemoTone</p>
                                <p>$100</p>
                            </div>
                        </div>
                        <div class="border border-3">
                            <div class="div2">
                                <img src="https://res.sastasundar.com/incom/images/product/Walyte-ORS-Orange-Flavour-Powder-1671610312-10018901-1.jpg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div class="text-center">
                                <p class="fs-6 fw-bold">ORS Powder</p>
                                <p>$30</p>
                            </div>
                        </div>
                        <div class="border border-3">
                            <div class="div2">
                                <img src="https://wellonapharma.com/admincms/product_img/product_resize_img/albendazole-chewable-tablets-manufacturers_1618822552.jpg"
                                    style={{ width: "100%", height: "100%" }} />
                            </div>
                            <div class="text-center">
                                <p class="fs-6 fw-bold">Wellbend</p>
                                <p>$80</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <Link to="/customerhome/showproduct" className="btn btn-info px-4 py-2 mb-3">Show All Product</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomerHome;