import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import "../assets/agent.css"

export default function Content() {
  return (
    <>
    
    <section className="agentprofilesection">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="media">
                        <div className="userprofile" > <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/agent.png"} alt="agent" /></div>
                        <div className="media-body pt-2"> 
                        <h4 className="font-weight-bold mb-1">Pakistan Real Estate</h4>
                        <div>
                            <span>Contact Person :<b> Tahsein Jawed</b></span><br/>
                            <span>Location :<b> Karachi, Pakistan</b></span>
                        </div>
                        <div className='d-flex align-items-center mt-3'>
                                <ul className='star-rating ml-2'>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs"></i></li>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs"></i></li>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs"></i></li>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs"></i></li>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs"></i></li>
                                </ul>
                                <span className='rating'>(20)</span>
                            </div>
                            <div className='pb-2'>
                                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Rate the agent</Link>
                            </div>
                            <div className=''>
                                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Call</Link>
                                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Chat</Link>
                            </div>
                    
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pt-2">
                    <h4 className="font-weight-bold mb-1">About</h4>
                    <p>Pakistan Real Estate is among the finest real estate agencies in Pakistan. Our mission is to make the property related transactions easier for the people. We believe in transparency , honesty and professionalism. We have been trusted by hundreds of our valuable customers since 2005. We perform with the highest levels of ethics and are confident that you will be happy to work with us. Kindly check our customers comments aboutus. xxxxxxxxxxxxx</p>
                </div>



            </div>
        </div>
    </section>
    
    <section>
        <div className="container">
            <div className='row'>
                <div className="col-lg-6">
                    <div className="listing-content mt-5" id="overview-section">
                        <div className='mb-4'><p className="font-weight-bold">Properties listed : </p> 20</div>
                        <div className='mb-4'><p className="font-weight-bold">Deals in : </p> Home, Plots </div>
                        <div className='mb-4'><p className="font-weight-bold">Major service societies : </p> Bahria Town Karachi, DHA Karachi </div>
                        <div className='mb-4'><p className="font-weight-bold">Services offered :</p>
                        <div className='row'>
                            <div className="col-lg-6">
                                <ul>
                                    <li>Buyer/Seller validation</li>
                                    <li>Property verification</li>
                                    <li>Complete real estate services</li>
                                </ul>
                        </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>Documentation</li>
                                    <li>Deal closure assistance,</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
               
                </div>
                <div className="col-lg-6">
                    <div className='container mt-5'>
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
        </div>
    </section>

    <div className="container">
        <div className="row">              
            <div className="col-lg-12"> 
                <div className="acr-listing-section sidebar sticky-sidebar">
                    <div className="acr-listing-controls">
                        <Link className="acr-listing-control jumpto"  data-section="overview-section">
                            <span>Verified Ratings</span>
                        </Link>
                        <Link className="acr-listing-control jumpto" data-section="pa-section">
                            <span>Properties Listed</span>
                        </Link>
                    </div>
                </div>    
            </div>
        </div>
    </div>

    <div className="container mt-4">
        <div className="row">
            <div className='col-lg-12'>
                <p>Transparency in dealings : <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                    <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star-half fa-xs"></i>
                </p>
                <p>Knowledge of service offered : <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                    <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i>
                </p>
                <p>Attitude and professionalism : <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                    <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star-half fa-xs"></i>
                </p>
                <p>Overall Rating : <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                    <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star-half fa-xs"></i>
                </p>
            </div>

            <div className='container mt-5'>
                <div className='row profiledetailrow'>
                    <div className='col-lg-4'>
                        <div className='container'>
                            <div className='profile d-flex'>
                                <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/Yusuf.png"} alt="agent" /></div>
                                <div className='profiledetail ml-2'><b>Yusuf</b><p>Canada <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/canada.png"} alt="canada" /></p>
                                </div>
                            </div>
                            <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">2,700 sq fts Apartment for Sale</Link>
                            <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/location-pin.svg"} alt="location-pin" /> Bahria Town Karachi</div>
                        </div>
                    </div>
                    <div className='col-lg-8 pt-2'>
                        Unique Real Estate lives up to their standards. I found them very helpful and professional in their dealings.
                        <div className='postdetail'>
                        <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                        <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                        <i class="custom-warning fas fa-star-half fa-xs"></i> <b>April 26, 2022</b> &nbsp;<img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/verify.svg"} alt="canada" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row profiledetailrow'>
                    <div className='col-lg-4'>
                        <div className='container'>
                            <div className='profile d-flex'>
                                <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/MohammedArif.png"} alt="agent" /></div>
                                <div className='profiledetail ml-2'><b>Mohammed Arif</b><p>Pakistan <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/pakistan.svg"} alt="canada" /></p>
                                </div>
                            </div>
                            <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">2,700 sq fts Apartment for Sale</Link>
                            <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/location-pin.svg"} alt="location-pin" /> Bahria Town Karachi</div>
                        </div>
                    </div>
                    <div className='col-lg-8 pt-2'>
                        Unique Real Estate lives up to their standards. I found them very helpful and professional in their dealings.
                        <div className='postdetail'>
                        <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                        <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                        <i class="custom-warning fas fa-star-half fa-xs"></i> <b>April 26, 2022</b> &nbsp;<img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/verify.svg"} alt="canada" />
                        </div>
                    </div>
                 </div>
            </div>
            <div className='container mt-5'>
                <div className='row profiledetailrow'>
                    <div className='col-lg-4'>
                        <div className='container'>
                            <div className='profile d-flex'>
                                <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/Salman.png"} alt="agent" /></div>
                                <div className='profiledetail ml-2'><b>Salman</b><p>UAE <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/uaf.svg"} alt="canada" /></p>
                                </div>
                            </div>
                            <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">2,700 sq fts Apartment for Sale</Link>
                            <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/location-pin.svg"} alt="location-pin" /> Bahria Town Karachi</div>
                        </div>
                    </div>
                    <div className='col-lg-8 pt-2'>
                        Unique Real Estate lives up to their standards. I found them very helpful and professional in their dealings.
                        <div className='postdetail'>
                        <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                        <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                        <i class="custom-warning fas fa-star-half fa-xs"></i> <b>April 26, 2022</b> &nbsp;<img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/verify.svg"} alt="canada" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
