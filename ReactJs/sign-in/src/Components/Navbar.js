import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div>
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
                        <Link to="/loginpage" className="btn">SignIn</Link>

                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>

            </nav >
            <section className="bodyImg" id="home">
                <h2 className="m-5 lh-5 fw-bold text-center">
                    Welcome to <br />Aarogya Pharmacy Management System!
                </h2>
                <div id="home" className="container d-flex">
                    <div className="homeImg">
                        <img src="./image/homeImg2.jpg" width="100%" height="100%" />
                    </div>
                    <div className="pt-4 mx-5">
                        <i className="fw-bold fs-5 px-5">Medicine delivered discreetly to your door</i>
                        <p className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nihil vitae commodi repellat ipsa
                            distinctio, sequi magni aperiam aspernatur aut ducimus soluta exercitationem ex nam odit. Dolor voluptatibus
                            architecto impedit!</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className="text-center my-5">New product Available</h2>
                    <div className="d-flex justify-content-evenly text-center">
                        <div className="card" style={{ boxShadow: "0 0 1px" }}>
                            <h5 style={{ backgroundColor: "rgba(222, 184, 135, 0.873)" }} className="p-3">
                                Syrup
                            </h5>
                            <li>Antitussives</li>
                            <li>Expectorants</li>
                            <li>Antihistamines</li>
                            <img src="./image/syrupImg.jpg" className="card-body" width="300px" height="200px" />
                        </div>
                        <div className="card" style={{ boxShadow: "0 0 1px" }}>
                            <h5 style={{ backgroundColor: " rgba(222, 184, 135, 0.873)" }} className="p-3">
                                Tablet
                            </h5>
                            <li>Coated Tablet</li>
                            <li>Uncoated Tablet</li>
                            <li>Chewing Tablet</li>
                            <img src="./image/capsuleImg.jpg" className="card-body" width="300px" height="200px" />
                        </div>
                        <div className="card" style={{ boxShadow: "0 0 1px" }}>
                            <h5 style={{ backgroundColor: "rgba(222, 184, 135, 0.873)" }} className="p-3">
                                Powder
                            </h5>
                            <li>For internal use</li>
                            <li>For external use</li>
                            <li>Divided powders</li>
                            <img src="./image/powderImg.jpg" className="card-body" width="300px" height="200px" />
                        </div>
                    </div>
                </div>
            </section >
            <section id="aboutus">
                <div className="container mt-5 mb-3 about-BackImg">
                    <div className="about-head">
                        <div className="text-center text-white">
                            <h1>ABOUT US</h1>
                            <p className="about-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                pariatur nisi dolorem dolor iure ipsam quisquam. Amet magnam
                                blanditiis architecto molestias vero eveniet maxime inventore
                                delectus nisi cupiditate! Natus, possimus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 border rounded">
                    <h3>WHO WE ARE</h3>
                    <div className="d-flex">
                        <div className="col-md-7">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                                ullam officia ex. Nam sequi, aliquid iusto veniam repellendus
                                tempora adipisci. Rem qui consectetur ipsam eaque quae magni
                                veritatis numquam eligendi!
                            </p>
                            <h3 className="text-center">Why Choose Us?</h3>
                            <div className="d-flex">
                                <div className="d-block p-3">
                                    <div className="border rounded p-2 mb-4 about-div">
                                        <h5>New Technologies</h5>
                                        <p>We use new and innovative technologies in our work.</p>
                                    </div>
                                    <div className="border rounded p-2 about-div">
                                        <h5>High Customer Satisfaction</h5>
                                        <p>
                                            Nosea takimata sanctus est lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-block p-3">
                                    <div className="border rounded p-2 mb-4 about-div">
                                        <h5>Quality Products</h5>
                                        <p>Our approach combines dedication and professionalism</p>
                                    </div>
                                    <div className="border rounded p-2 about-div">
                                        <h5 className="mt-1">Fair Prices</h5>
                                        <p>
                                            At vero eos et accusam ejusto duo dolores et ea rebum
                                            clita gubergren
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h4 className="title">GMP</h4>
                            <p>Good Manufacturer Company</p>
                            <img src="./image/manufacture.webp" alt="GmpImage" />
                            <img />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="mt-5 mb-3">Meet Our Specialists!</h2>
                    <hr />
                    <div className="d-flex justify-content-evenly m-2">
                        <div className="card">
                            <img src="./image/team1Img.jpg" style={{ width: "300px", height: "200px" }} />
                            <div className="card-body text-center">
                                <p className="fw-bold">Dr.Dorian</p>
                                <p className="text-sm">Lead Physian</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./image/team2Img.webp" style={{ width: "300px", height: "200px" }} />
                            <div className="card-body text-center">
                                <p className="fw-bold">John Smith</p>
                                <p className="text-sm">Chief of Medicine</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./image/team3Img.jpg" style={{ width: "300px", height: "200px" }} />
                            <div className="card-body text-center">
                                <p className="fw-bold">Riya Rai</p>
                                <p className="text-sm">Accountant</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./image/team4Img.png" style={{ width: "300px", height: "200px" }} />
                            <div className="card-body text-center">
                                <p className="fw-bold">Alex Suxsena</p>
                                <p className="text-sm">Accountant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section id="contact" className="contact-backImg">
                <div className="container-fluid mt-5 mb-3">
                    <h1>CONTACT US</h1>
                    <div className="container">
                        <form className="formInput border border-3 rounded-2">
                            <h3 className="m-4">Get In Touch</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">last Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email Id</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" />
                                </div>
                                <label className="form-label">Message</label>
                                <textarea name="" className="form-control mb-3 col-md-1" id="" cols="10" rows="5"></textarea>

                                <input type="submit" value="Send Message" className="btn btn-dark btn-sm col-md-2 mx-5 mb-3 p-2" />
                                <input type="reset" value="Cancel" className="btn btn-dark btn-sm col-md-2 mx-5 mb-3 p-2" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container mb-5" style={{ backgroundColor: "rgba(205, 92, 92, 0.893)" }}>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-white mb-4">Offices</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 bg-white mb-3 rounded">
                                <span className="d-block text-black h6">New York</span>
                                <p className="mb-0">
                                    203 Fake St. Mountain View, San Francisco, California, USA
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 bg-white mb-3 rounded">
                                <span className="d-block text-black h6">LONDON</span>
                                <p className="mb-0">
                                    203 Fake St. Mountain View, San Francisco, California, USA
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 bg-white mb-3 rounded">
                                <span className="d-block text-black h6">CANADA</span>
                                <p className="mb-0">
                                    203 Fake St. Mountain View, San Francisco, California, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div style={{backgroundColor: "rgb(7, 7, 78)" }}class="text-white">
                    <div class="container">
                        <div class="d-flex">
                            <div class="col-lg-4 mt-3">
                                <h3>Our Address</h3>
                                <p>
                                    <i class="fa-solid fa-location-dot"></i> 1418 Riverwood
                                    Drive,<br />
                                    Suite 3845 Cottonwood,<br />
                                    CA 96022<br />
                                    United States
                                </p>
                            </div>
                            <div class="col-lg-4 mt-3" style={{listStyleType:"none"}}>
                                <h3>Contact Info</h3>
                                <li><i class="fa-solid fa-phone"></i> +9976564534</li>
                                <li><i class="fa-solid fa-envelope"></i> arogya@gmail.com</li>
                                <li><i class="fa-solid fa-house-medical"></i> Chennai,India</li>
                            </div>
                            <div class="col-lg-4 mt-3">
                                <h3>Follow Us</h3>
                                <div class="mt-4">
                                    <i class="fa-brands fa-instagram fa-2x m-2"></i>
                                    <i class="fa-brands fa-facebook fa-2x m-2"></i>
                                    <i class="fa-brands fa-twitter fa-2x m-2"></i>
                                    <i class="fa-regular fa-envelope fa-2x m-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div >

    )
}
export default Navbar;