import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import "../assets/agent.css"
import Table from 'react-bootstrap/Table';

export default function Content() {
  return (
    <>
    
    <section className="agentprofilesection py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="media">
                        <div className="userprofile" > <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/agent-main.jpg"} alt="agent" /></div>
                        <div className=""> 
                        <h2 className="mb-1">Pakistan Real Estate</h2>
                        <div>
                            <p >Contact Person :<b> Tahsein Jawed</b></p>
                            <p>Location :<b> Karachi, Pakistan</b></p>
                        </div>
                        <div className='d-flex align-items-center mt-2 mb-3'>
                                <ul className='star-rating ml-2'>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs pr-1"></i></li>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs pr-1"></i></li>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs pr-1"></i></li>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs pr-1"></i></li>
                                    <li class="custom-warning"><i class="fas fa-star fa-xs pr-1 mr-1"></i></li>
                                </ul>
                                <span className='rating'>(20)</span>
                            </div>
                            <div className='pb-3'>
                                <Link to="/agentrating" className="btn btn-primary btn-sm btn-call-chat btn-custom btn-sm secondary">Rate the agent</Link>
                            </div>
                            <div className=''>
                                <Link to="/agentprofile" className="btn btn-primary btn-sm btn-call-chat btn-custom btn-sm secondary">Call</Link>
                                <Link to="/agentprofile" className="btn btn-primary btn-sm btn-call-chat btn-custom btn-sm secondary">Chat</Link>
                            </div>
                    
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2 className="mb-1">About</h2>
                    <div>
                        <p>Pakistan Real Estate is among the finest real estate agencies in Pakistan. Our mission is to make the property related transactions easier for the people. We believe in transparency , honesty and professionalism. We have been trusted by hundreds of our valuable customers since 2005. We perform with the highest levels of ethics and are confident that you will be happy to work with us. Kindly check our customers comments aboutus. xxxxxxxxxxxxx</p>
                    </div>
                </div>



            </div>
        </div>
    </section>
    
    <section className="py-4">
        <div className="container">
            <div className='row'>
                <div className="col-lg-6">
                    
                    <div className="listing-content mt-5" id="overview-section">
                        
                    <div className='row'>
                        <div className='col-lg-6'><div className='mb-4'><p className="perasemi">Properties listed : </p> <p>20</p></div></div>
                        <div className='col-lg-6'><div className='mb-4'><p className="perasemi">Deals in : </p> <p>Home, Plots</p>  </div></div>
                    </div>
                        <div className='mb-4'><p className="perasemi">Major service societies : </p> <p>Bahria Town Karachi, DHA Karachi</p> </div>
                        <div className='mb-4'><p className="perasemi">Services offered :</p>
                        <div className='row'>
                            <div className="col-lg-6">
                                <ul>
                                    <li><p>Buyer/Seller validation</p></li>
                                    <li><p>Property verification</p></li>
                                    <li><p>Complete real estate services</p></li>
                                </ul>
                        </div>
                            <div className="col-lg-6">
                            <ul>
                                    <li><p>Documentation</p></li>
                                    <li><p>Deal closure assistance,</p></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
               
                </div>




                
                <div className="col-lg-6 agent-profile">
                    <div className=' mt-5'>


                    <div class="post-thumbnail" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/naijagah/vidback.jpg )" }}>              
                        <div className="embed-responsive embed-responsive-21by9">
                            <div class="mobile-shadow">
                                    <ReactPlayer url={`${process.env.PUBLIC_URL + "/assets/videos/VID-20220629-WA0078.mp4" }`} 
                                    playing={true} 
                                    controls={true} 
                                    playIcon={<img src={`${process.env.PUBLIC_URL + "/assets/img/naijagah/playicon.png"}`}/>}
                                    light={process.env.PUBLIC_URL + "/assets/img/naijagah/Home-video.svg" }
                                />
                            </div>                                   
                                                                
                        {/* <iframe title="video" className="embed-responsive-item" width={640} height={700} src="https://www.youtube.com/embed/Sz_1tkcU0Co" /> */}
                    </div>
                    </div>
    

                        {/* <div class="post-thumbnail" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/naijagah/vidback.jpg )" }}>
                            <div className="embed-responsive embed-responsive-21by9">
                            <iframe title="video" className="embed-responsive-item" width={640} height={350} src="https://www.youtube.com/embed/Sz_1tkcU0Co" />
                        </div>
                        </div> */}
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
                            <p className='headmed' style={{color:'#20B69E'}}>Ratings</p>
                        </Link>
                        <Link className="acr-listing-control jumpto" data-section="pa-section">
                            <p className='headmed'>Properties Listed</p>
                        </Link>
                    </div>
                </div>    
            </div>
        </div>
    </div>

    <div className="container mt-4 mb-5">
        <div className="row">
            <div className='col-lg-5'>

<div>
  <Table responsive="sm" size="sm">
    <tbody>
      <tr>
        <td width="65%"><p>Transparency in dealings</p></td>
        {/* <td>:</td> */}
        <td width="50%"><span className='mr-2'>:</span> <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i> 
            <i class="custom-warning fas fa-star-half-alt fa-s"></i>
        </td>
      </tr>
      <tr>
        <td><p>Knowledge of service offered</p></td>
        {/* <td>:</td> */}
        <td><span className='mr-2'>:</span> <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i> 
            <i class="custom-warning fas fa-star-half-alt fa-s"></i>
        </td>
      </tr>
      <tr>
        <td><p>Attitude and professionalism</p></td>
        {/* <td>:</td> */}
        <td><span className='mr-2'>:</span> <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i> 
            <i class="custom-warning fas fa-star-half-alt fa-s"></i>
        </td>
      </tr>
      <tr>
        <td><p>Overall Rating</p></td>
        {/* <td>:</td> */}
        <td><span className='mr-2'>:</span> <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i>
            <i class="custom-warning fas fa-star fa-s"></i> 
            <i class="custom-warning fas fa-star-half-alt fa-s"></i>
        </td>
      </tr>
    </tbody>
  </Table>
</div>

                {/* <p>Transparency in dealings : <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                    <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star-half-alt fa-xs"></i>
                </p>
                <p>Knowledge of service offered : <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                    <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i>
                </p>
                <p>Attitude and professionalism : <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                    <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star-half-alt fa-xs"></i>
                </p>
                <p>Overall Rating : <i class="custom-warning fas fa-star fa-xs"></i><i class="custom-warning fas fa-star fa-xs"></i>
                    <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star fa-xs"></i> <i class="custom-warning fas fa-star-half-alt fa-xs"></i>
                </p> */}
            </div>

            <div className='container mt-5'>
                <div className='row profiledetailrow'>
                    <div className='left pr-4'>
                        <div className='container'>
                            <div className='profile d-flex mb-1'>
                                <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/Yusuf.png"} alt="agent" /></div>
                                <div className='profiledetail ml-2'><h4>Yusuf</h4><p className='formhead'>Canada <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/canada.png"} alt="canada" /></p>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-primary btn-sm btn-call-chat" style={{ fontFamily:'regular'}}>2,700 sq fts Apartment for Sale</Link>
                            <div className='formhead mt-2 d-flex align-items-center'><img style={{marginRight:'10px'}} src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/location-pin.svg"} alt="location-pin" /> Bahria Town Karachi</div>
                        </div>
                    </div>
                    <div className='col-lg-8 pt-3 pr-4'>
                        <p>Unique Real Estate lives up to their standards. I found them very helpful and professional in their dealings.</p>
                        <div className='postdetail'>
                        <i class="custom-warning fas fa-star fa-s pr-1"></i><i class="custom-warning fas fa-star fa-s pr-1"></i>
                        <i class="custom-warning fas fa-star fa-s pr-1"></i><i class="custom-warning fas fa-star fa-s pr-1"></i>
                        <i class="custom-warning fas fa-star-half-alt fa-s pr-1"></i> <b className='smallsemi'>April 26, 2022</b>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row profiledetailrow'>
                    <div className='left pr-4'>
                        <div className='container'>
                            <div className='profile d-flex mb-1'>
                                <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/MohammedArif.png"} alt="agent" /></div>
                                <div className='profiledetail ml-2'><h4>Mohammed Arif </h4><p className='formhead'>Pakistan  <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/pakistan.svg"} alt="canada" /></p>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-primary btn-sm btn-call-chat" style={{ fontFamily:'regular'}}>2,700 sq fts Apartment for Sale</Link>
                            <div className='formhead mt-2 d-flex align-items-center'><img style={{marginRight:'10px'}} src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/location-pin.svg"} alt="location-pin" /> Bahria Town Karachi</div>
                        </div>
                    </div>
                    <div className='col-lg-8 pt-3 pr-4'>
                        <p>Unique Real Estate lives up to their standards. I found them very helpful and professional in their dealings.</p>
                        <div className='postdetail'>
                        <i class="custom-warning fas fa-star fa-s pr-1"></i><i class="custom-warning fas fa-star fa-s pr-1"></i>
                        <i class="custom-warning fas fa-star fa-s pr-1"></i><i class="custom-warning fas fa-star fa-s pr-1"></i>
                        <i class="custom-warning fas fa-star-half-alt fa-s pr-1"></i> <b className='smallsemi'>April 29, 2022</b>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row profiledetailrow'>
                    <div className='left pr-4'>
                        <div className='container'>
                            <div className='profile d-flex mb-1'>
                                <div><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/Salman.png"} alt="agent" /></div>
                                <div className='profiledetail ml-2'><h4>Salman</h4><p className='formhead'>UAE  <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/uaf.svg"} alt="canada" /></p>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-primary btn-sm btn-call-chat" style={{ fontFamily:'regular'}}>2,700 sq fts Apartment for Sale</Link>
                            <div className='formhead mt-2 d-flex align-items-center'><img style={{marginRight:'10px'}} src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/location-pin.svg"} alt="location-pin" /> Bahria Town Karachi</div>
                        </div>
                    </div>
                    <div className='col-lg-8 pt-3 pr-4'>
                        <p>Unique Real Estate lives up to their standards. I found them very helpful and professional in their dealings.</p>
                        <div className='postdetail'>
                        <i class="custom-warning fas fa-star fa-s pr-1"></i><i class="custom-warning fas fa-star fa-s pr-1"></i>
                        <i class="custom-warning fas fa-star fa-s pr-1"></i><i class="custom-warning fas fa-star fa-s pr-1"></i>
                        <i class="custom-warning fas fa-star-half-alt fa-s pr-1"></i> <b className='smallsemi'>February 26, 2022</b>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container my-5' style={{textAlign:'center'}}>
                <Link className='blue'>See all 200 review</Link>
                
            </div>

        </div>
    </div>

    </>
  )
}
