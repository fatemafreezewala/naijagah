import React, { Component, Fragment } from 'react'
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

export default function Notification() {
  return (
    <Fragment>
                <MetaTags>
                    <title>Naijagah | Terms & Policy</title>
                    <meta
                        name="description"
                        content="#"
                    /> 
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Notification'}} />
                <div className="container mt-5 mb-5">
                <div className=''>
                    <div className='align-items-center d-flex' style={{flexDirection:'column'}}>
                        <div className="container notificationMonth">
                            <div className="row">
                            <div className="col-md-12">
                                <h5>New</h5>
                                <div className="d-flex p-3 mb-4" style={{backgroundColor:'#E6F1EF'}}>
                                <span><img src={process.env.PUBLIC_URL + "/assets/img/contact/home.svg"} alt="img" /></span>
                                <div><h5 className="mb-0">Message from admin</h5>
                                <p className="listing-text" style={{marginBottom:0}}>Admin : Today, 3:55 PM</p></div>
                                
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h5 class="mb-1">This Month</h5>
                                <div className="d-flex p-3 border-bottom">
                                <span style={{backgroundColor:'#E6F1EF'}}><img src={process.env.PUBLIC_URL + "/assets/img/contact/email.svg"} alt="img" /></span>
                                <div><h5 className="mb-0">Message from admin</h5>
                                <p className="listing-text" style={{marginBottom:0}}>Account : Saturday, 9:30 AM</p></div>
                                
                                </div>
                                <div className="d-flex p-3 border-bottom">
                                <span><img src={process.env.PUBLIC_URL + "/assets/img/contact/home.svg"} alt="img"/></span>
                                <div><h5 className="mb-0">Message from admin</h5>
                                <p className="listing-text" style={{marginBottom:0}}>Announcement : Monday, 1:20 PM</p></div>
                                </div>
                                <div className="d-flex p-3 border-bottom">
                                <span><img src={process.env.PUBLIC_URL + "/assets/img/contact/home.svg"} alt="img" /></span> 
                                <div><h5 className="mb-0">Message from admin</h5>
                                <p className="listing-text" style={{marginBottom:0}}>Message : Tuesday, 1:35 PM</p></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            
            
            </div>
            </div>
                <Footer/>
            </Fragment>
  )
}
