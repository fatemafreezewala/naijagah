import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useSelector } from "react-redux";
const Menu = () => { 
    const [show, setShow] = React.useState(false);
    const { user: currentUser } = useSelector((state) => state.auth);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return ( 
    <Fragment>
               <Link className="navbar-brand" to="/"> <img src={process.env.PUBLIC_URL + "/assets/img/logo.svg"} alt="logo" /> </Link>
                {/* Menu */}
               <div>
               <ul className="navbar-nav pull-right">
                    <li className="menu-item menu-item-has-children">
                        <Link to="/about">ABOUT US</Link>
                        {/* <ul className="submenu">
                            <li className="menu-item"> <Link to="/">Home v1</Link> </li>
                            <li className="menu-item"> <Link to="/home-v2">Home v2</Link> </li>
                            <li className="menu-item"> <Link to="/home-v3">Home v3</Link> </li>
                            <li className="menu-item"> <Link to="/home-v4">Home v4</Link> </li>
                            <li className="menu-item"> <Link to="/home-v5">Home v5</Link> </li>
                        </ul> */}
                    </li>
                    <li className="menu-item ">
                        <Link to="/listing-list">SELL / RENT YOUR PROPERTY</Link>
                        {/* <ul className="submenu">
                            <li className="menu-item menu-item-has-children"> 
                                <Link to="/blog-grid">Blog Archive</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/blog-grid">Grid View</Link> </li>
                                    <li className="menu-item"> <Link to="/blog-list">List View</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link to="/blog-single">Blog Single</Link>
                            </li>
                        </ul> */}
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu-wrapper">
                        <Link to="/agentlisting">FIND AN AGENT</Link>
                        {/* <ul className="submenu">
                            <li>
                                <img src={process.env.PUBLIC_URL + "/assets/img/megamenu.png"} alt="img" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="mega-menu-item">
                                                <h5>Featured Listings</h5>
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                                    making it over 2000 years old.
                </p>
                                                <Link to="/listing-map" className="btn-custom secondary">View All</Link>
                                            </div>
                                        </div>
                                        <div className="offset-lg-1 col-lg-3">
                                            <div className="mega-menu-item">
                                                <h5>Pages</h5>
                                                <Link to="/about">About Us</Link>
                                                <Link to="/services">Services</Link>
                                                <Link to="/faq">FAQ</Link>
                                                <Link to="/pricing">Pricing</Link>
                                                <Link to="/contact">Contact Us</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mega-menu-item">
                                                <h5>Other Pages</h5>
                                                <Link to="/coming-soon">Coming Soon</Link>
                                                <Link to="/error-404">404 Page</Link>
                                                <Link to="/login">Login</Link>
                                                <Link to="/register">Register</Link>
                                                <Link to="/legal">Legal</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul> */}
                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="/blog">BLOGS</Link>
                        {/* <ul className="submenu">
                            <li className="menu-item menu-item-has-children">
                                <Link to="/listing-map">Listings Archive</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/listing-grid">Grid View</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-list">List View</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-map">Map View</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link to="/listing-details-v1">Listing Details</Link>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="/listing-details-v1">Listing Details v1</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-details-v2">Listing Details v2</Link> </li>
                                    <li className="menu-item"> <Link to="/listing-details-v3">Listing Details v3</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item"> <Link to="/submit-listing">Submit Listing</Link> </li>
                            <li className="menu-item"> <Link to="/compare-listings">Compare Listings</Link> </li>
                        </ul> */}
                    </li>
                    <li className="menu-item menu-item-has-children">
                        <Link to="/contact">CONTACT US</Link>
                        
                    </li>
                    {!currentUser ? (<li className="menu-item menu-item-has-children">
                        <img className="profile-img" src={process.env.PUBLIC_URL +"/assets/img/naijagah/profile-user.svg"}></img>
                        <ul className="submenu">
                            <li className="menu-item"> <Link onClick={handleShow} to="/">Login</Link> </li>
                            <li className="menu-item"> <Link onClick={handleShow} to="/">Register</Link> </li>
                            
                        </ul>
                    </li>) : ( 
                    <li className="menu-item menu-item-has-children">
                    <Link to="/user-profile"><p class="font-weight-bold">Welcome {currentUser.u_name}</p></Link>
                    
                    </li>)}
                    
                    <LoginModal show={show} handleShow={handleShow} handleClose={handleClose}></LoginModal>
                     
                </ul>
                
               </div>
            </Fragment>
  )
}

export default Menu