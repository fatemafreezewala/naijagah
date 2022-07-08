import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { type } from '../../../data/category.json'

class WhatweOffer extends Component {
    render() {
        return (
            <div className="section section-padding" style={{marginTop:50,marginBottom:50}}>
                <div className="container-fluid" style={{paddingLeft:30,paddingRight:30}}>
                    <div className="section-title-wrap section-header text-center">
                        
                        <h2 className="title weOfferTitle">What we <span style={{color:'#297CE0'}}>Offer</span></h2>
                        <p style={{marginTop:20,marginBottom:50}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="row">
                        
                            <div className="col-lg-4 col-md-6 col-sm-12"> 
                              
                                <ul className="acr-list chev-bullet mb-0">
                                                <li className='what-we-offer-right text-right mr-10'><span>Free listing verification</span></li>
                                                <li className='what-we-offer-right text-right'><span>Seller identity and property key location details are protected</span></li>
                                                <li className='what-we-offer-right text-right'><span>Attract genuine buyers</span></li>
                                            </ul>
                                
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                            <img src={process.env.PUBLIC_URL + "/" + 'assets/img/naijagah/whatweoffer.svg'} alt="agent" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                              
                                <ul className="acr-list chev-bullet-left mb-0">
                                                <li className='text-left mr-10'><span>Directly connect with genuine sellers</span></li>
                                                <li className='text-left'><span>Verified listings. Look for verified sign</span></li>
                                                <li className='text-left'><span>Only property with complete address details is listed on this platform</span></li>
                                            </ul>
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatweOffer;