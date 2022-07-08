import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink } from 'react-bootstrap';
import App from './App';

class Footer extends Component {
    render() {
        return (
            <footer className="acr-footer footer-2" style={{background:'#ffffff'}}>
                {/* Footer Top Start */}
               
                {/* Footer Top End */}
                {/* Footer Middle Start */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-12 footer-widget">
                                
                            {/* <h5 className="widget-title">Contact Us</h5> */}
                            <div className="footer-logo">
                                
                                <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="acres" />
                            </div>
                            <p><span class="font-weight-bold">Address</span> : 497 Evergreen Rd. Roseville, CA 95673</p>
                            <p><span class="font-weight-bold">Email</span> : Company112@mail.com</p>
                            <p><span class="font-weight-bold">Phone</span> : +44 345 678 903 | +44 345 678 90</p>
                            <p><span class="font-weight-bold">Fax</span> : +22 345 678 903 11</p>
                                
                            </div>
                            <div className="col-lg-3 offset-lg-1 col-sm-4 footer-widget">
                                <h5 className="widget-title">Useful Links</h5>
                                <ul>
                                    <li> <Link to="/listing-map">Home</Link> </li>
                                    <li> <Link to="/submit-listing">About us</Link> </li>
                                    <li> <Link to="/listing-map">Services</Link> </li>
                                    <li> <Link to="/blog-grid">Privacy Policy</Link> </li>
                                </ul>
                            </div>
                            {/* <div className="col-lg-2 col-sm-4 footer-widget">
                                <h5 className="widget-title">Information</h5>
                                <ul>
                                    <li> <Link to="/about">About Us</Link> </li>
                                    <li> <Link to="/contact">Contact Us</Link> </li>
                                    <li> <Link to="/services">Services</Link> </li>
                                    <li> <Link to="/faq">FAQ</Link> </li> 
                                </ul>
                            </div> */}
                            <div className="col-lg-3 col-sm-4 footer-widget">
                                <h5 className="widget-title">Social Media</h5>
                                <ul className="social-media">
                                <li> <Link to="#"> <img src={process.env.PUBLIC_URL + "/assets/img/naijagah/s4.svg"} alt="acres" /> </Link> </li>
                                <li> <Link to="#"> <img src={process.env.PUBLIC_URL + "/assets/img/naijagah/s1.svg"} alt="acres" /> </Link> </li>
                                <li> <Link to="#"> <img src={process.env.PUBLIC_URL + "/assets/img/naijagah/s3.svg"} alt="acres" /></Link> </li>
                                <li> <Link to="#"> <img src={process.env.PUBLIC_URL + "/assets/img/naijagah/s2.svg"} alt="acres" /> </Link> </li>
                            </ul>
                            {/* <div className="footer-logo"> <img src={process.env.PUBLIC_URL + "/assets/img/logo.svg"} alt="acres" /> </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Middle End */}
                {/* Footer Bottom Start */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 justify-content-center">
                                <p className="m-0 text-center">© Copyright 2020 - <Link to="#">Naijagah</Link> All Rights Reserved.</p>
                            </div>
                            {/* <div className="col-lg-5">
                                <ul>
                                    <li> <Link to="/listing-map">Find a Home</Link> </li>
                                    <li> <Link to="/submit-listing">Add Listing</Link> </li>
                                    <li> <Link to="/agency-archive">View Agencies</Link> </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* Footer Bottom End */}
            </footer>
        );
    }
}

export default Footer;