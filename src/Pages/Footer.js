import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FaEnvelope, FaHome, FaPhoneAlt, FaFax } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    
    return (
        <footer
            className="text-center text-lg-start text-dark"
            style={{ backgroundColor: "#ECEFF1" }}
        >
            <section
                className="d-flex justify-content-between p-4 text-white"
                style={{ backgroundColor: "#0f6f9b" }}
            >
                <div className="me-5">
                    <p style={{ fontSize: '30px' }}>Get Special Offers & More !</p>
                </div>

                <div>
                    <Link to='' className="text-white me-4" style={{ fontSize: '30px' }}>

                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>

                    <Link to='' className="text-white me-4" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>

                    <Link to='' className="text-white me-4" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </Link>

                    <Link to='' className="text-white me-4" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>

                    <Link to='' className="text-white me-4" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>

                    <Link to='' className="text-white me-4" style={{ fontSize: '30px', color: '#3b5998' }}>
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Sama Shop</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                Subscribe Oue NewSletter For Get Notification about Events
                                ,Discounts,etc

                            </p>

                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">About US</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: " 60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                <Link to="#!" className="text-dark" style={{ textDecoration: 'none' }}>License</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-dark" style={{ textDecoration: 'none' }}>Police Privacy</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-dark" style={{ textDecoration: 'none' }}>Terms Of Use</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-dark" style={{ textDecoration: 'none' }}>Help Center</Link>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful Links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style=
                                {{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                <Link to="#!" className="text-dark" style={{ textDecoration: 'none' }}>Site Map</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-dark" style={{ textDecoration: 'none' }}>Store Location</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-dark" style={{ textDecoration: 'none' }}>My Account</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-dark" style={{ textDecoration: 'none' }}>Orders Tracking</Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: '#7c4dff', height: "2px" }}
                            />
                            <p><FaHome /> New York, NY 10012, US</p>
                            <p><FaEnvelope /> info@example.com</p>
                            <p><FaPhoneAlt /> + 01 234 567 88</p>
                            <p><FaFax /> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2020 Copyright

            </div>
        </footer>
    );
}

export default Footer