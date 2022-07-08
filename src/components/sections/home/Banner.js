

import React, { Component } from 'react';
import { locationlist, statuslist, pricerangelist } from '../../../data/select.json';
import Select2 from 'react-select2-wrapper';

class Banner extends Component {
    render() {
        return (
            <div className="banner banner-1 bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/naijagah/banner.jpg )" }}>
                <div className="container-fluid">
                    <div className="banner-item">
                        <div className="banner-inner">
                            <div className='row'>
                            <div className='col-lg-6 col-xl-6 col-md-6 col-sm-12'>
                                <div className='container'>
                                <div class="post" >
                                <div class="post-thumbnail" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/naijagah/vidback.jpg )" }}>
                                    
                                    
                                    <div className="embed-responsive embed-responsive-21by9">
                                    <iframe title="video" className="embed-responsive-item" width={640} height={350} src="https://www.youtube.com/embed/Sz_1tkcU0Co" />
                                </div>
                                </div>
                                <div class="post-body">
                                  
                                  <div class="post-controls"> 
                                      <div class="post-comment-authors"> 
                                        
                                    </div></div></div>
                            </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-xl-6 col-md-6 col-sm-12'>
                                <div className="banner-text">
                                    <p className='bannertext'>THE FIRST OF ITS KIND PROPERTY PLATFORM OF <span className='bannerbold'>PAKISTAN</span> </p>
                                    
                                    
                                    <p className='bannertext' style={{fontWeight:600}}><br></br>GIVING SELLERS AND BUYERS CONTROL OVER PROPERTY TRANSACTIONS</p>
                                    <br></br>
                                    <p  className='urdutext'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;آپ کی <span className='urdublue'>جگہ</span></p>
                                          <br></br>  <p className='urdutext'>آپ کا <span className='urdublue'>اختیار</span> </p>
                                    {/* <div className='row'>
                                        <div className='col'>
                                            
                                        </div>
                                        <div className='col'>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/naijagah/home.png"}></img>

                                        </div>
                                    </div> */}
                                    
                                </div>
                                
                            </div>
                               
                            </div>
                            
                            
                        </div>
                    </div>
                    <img className='homebannerimg' src={process.env.PUBLIC_URL + "/assets/img/naijagah/home.png"}></img>
                </div>
            </div>
        );
    }
}

export default Banner;