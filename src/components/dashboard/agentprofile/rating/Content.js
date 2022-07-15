import { Link } from 'react-router-dom';
import { Tab, Nav, Accordion, Card, NavLink } from 'react-bootstrap';
import React, { Component, Fragment, useState} from 'react';

const Content = () => {
const[data, setData] = React.useState('sell')
  return (
      <>
     <section className="agentprofilesection" style={{paddingTop:60}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                     {/* <div className="userprofile" > <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/agent1.jpg"} alt="agent" /></div> */}
                     <div className="media">
                        <div className="userprofile" > <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/agentrating.png"} alt="agent" /></div>
                        <div className=""> 
                        <h2 className="mb-1">Pakistan Real Estate</h2>
                        <div>
                            <p >Contact Person :<b> Tahsein Jawed</b></p>
                            <p>Location :<b> Karachi, Pakistan</b></p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row rentsell" style={{paddingTop:60,paddingBottom:20}}>
                <div className="col-lg-12">
                    <h4> Agency services taken for</h4>
                </div>
            </div>

            <div className="row rentsell">
                         <div className="col rating">
                             <Tab.Container defaultActiveKey="Sell/Rent">
                                 <Nav variant="tabs" className="nav nav-tabs">
                                     <Nav.Item>
                                    <div className="navafter" onClick={()=>{setData('sell')}} style={{color:data == 'sell' ? '#20B69E' : '#000',borderBottomWidth:2,borderColor:data == 'sell' ? '#20B69E' : '#fff'}}>
                                        <Nav.Link eventKey="Sell/Rent">
                                            <Link className={data == 'sell' ? 'btn-custom secondary btn-sm' : 'btn-border'}>Buying Property</Link>
                                        </Nav.Link>
                                        
                                   </div>
                                     </Nav.Item>
                                     <Nav.Item>
                                         <div className="navafter" onClick={()=>{setData('buy')}} style={{color:data == 'buy' ? '#20B69E' : '#000' ,borderBottomWidth:2,borderColor:data == 'buy' ? '#20B69E' : '#fff' }}>
                                            <Nav.Link eventKey="Genuine">
                                            <Link className={data == 'buy' ? 'btn-custom secondary btn-sm' : 'btn-border'}>Selling Property</Link>
                                            {/* <img className={data == 'buy' ? 'filter-green' : ''} src={process.env.PUBLIC_URL + "/assets/img/rentselllanding/Genuine.svg"} alt="img"/>
                                            Attract Genuine Buyers */}
                                            </Nav.Link>
                                         </div>
                                     </Nav.Item>
                                     <Nav.Item>
                                    <div className="navafter" onClick={()=>{setData('close')}} style={{color:data == 'close' ? '#20B69E' : '#000' ,borderBottomWidth:2,borderColor:data == 'close' ? '#20B69E' : '#fff' }}>
                                        <Nav.Link eventKey="Sales">
                                        <Link className={data == 'close' ? 'btn-custom secondary btn-sm' : 'btn-border'}>Renting Property</Link>
                                        {/* <img className={data == 'close' ? 'filter-green' : ''} src={process.env.PUBLIC_URL + "/assets/img/rentselllanding/startup.svg"} alt="img" />
                                        Close Sales Faster */}
                                        </Nav.Link>
                                    </div>
                                     </Nav.Item>
                                 </Nav>
        <Tab.Content>
            <Tab.Pane eventKey="Sell/Rent">
            <div className="section"> 
                 <div className="container">
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className="form-group form-grp-filter">
                                    <label>Property listed on Nai Jagah</label>
                                        <div class="radio-group">
                                            <input data-type='pill-selector' type="radio" checked id="yes" name="Dedicated_parking" />
                                            <div>
                                                <label for="yes">Yes</label>
                                            </div>
                                            <input  data-type='pill-selector' type="radio" id="no" name="Dedicated_parking" />
                                            <div style={{marginLeft:20}}>
                                                <label for="no">No</label>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="form-group">
                                    <label className='required'>Property ID</label>
                                    <input type="text" className="form-control" placeholder="Enter Property ID given by Nai Jagah Platform" name="video" />
                                </div>
                            </div>
                        </div> 

                 <div className='row'>
                <div className='col-sm-12 col-lg-3 col-md-3'>
                    <div className="form-group form-grp-filter">
                        <label>Property type</label>
                        <select className="form-control" name="cycle">
                            <option>Select Type</option>
                            <option value="Daily">Daily</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-3 col-md-3'>
                    <div className="form-group">
                        <label>Property Society</label>
                        <input type="text" className="form-control" placeholder="Property Society" name="video" />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-3 col-md-3'>
                    <div className="form-group">
                        <label>Property Number</label>
                        <input type="text" className="form-control" placeholder="Add Property Number" name="video" />
                    </div>
                </div>
               
                
                 </div> 

                 <div className='row'>
                <div className='col-sm-12 col-lg-3 col-md-3'>
                    <div className="form-group">
                        <label>Property size</label>
                        <input type="text" className="form-control" placeholder="Number" name="video" />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-3 col-md-3'>
                    <div className="form-group form-grp-filter">
                        <label>Units</label>
                        <select className="form-control" name="cycle">
                            <option>Sq. Ft</option>
                            <option value="Daily">Daily</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-3 col-md-3'>
                    <div className="form-group">
                        <label>Service period</label>
                        <input type="text" className="form-control" placeholder="Month / Year" name="video" />
                    </div>
                </div>
               
                
                 </div> 
                 </div>
             </div>
                                     </Tab.Pane>
                                     <Tab.Pane eventKey="Genuine">
                                         Hello2
                                     </Tab.Pane>
                                     <Tab.Pane eventKey="Sales">
                                         Hello3
                                     </Tab.Pane>
                                     <Tab.Pane eventKey="Earn">
                                         Hello4
                                     </Tab.Pane>
                                 </Tab.Content>
                             </Tab.Container>
                         </div>
                       
            </div>

<div className="rating-form">
    <span><b> Rate the Agent</b></span>
    <div className="section pt-0 acr-listing-nearby">
<div className="listing-nearby-item">
    <ul>
        <li>
            <span>Transparency in dealings </span>
            <b>:</b>
            <ul style={{marginLeft:'unset'}}>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star-half fa-xs" /></li>
                
            </ul>
        </li>
        <li>
            <span>Knowledge of service offered </span>
            <b>:</b>
            <ul style={{marginLeft:'unset'}}>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
            </ul>
        </li>
        <li>
            <span>Attitude and professionalism</span>
            <b>:</b>
            <ul style={{marginLeft:'unset'}}>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star-half fa-xs" /></li>
            </ul>
        </li>
        <li>
            <span>Overall Rating </span>
            <b>:</b>
            <ul style={{marginLeft:'unset'}}>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star fa-xs" /></li>
                <li className="custom-warning"><i className="fas fa-star-half fa-xs" /></li>
            </ul>
        </li>
    </ul>
</div>

</div>
</div>


<div className="comment-form">
    <span><b> Feedback</b></span>
    <form>
        <div className="row">
            <div className="col-lg-9 form-group">
                <textarea className="form-control" placeholder="Unique Real Estate lives up to their standards. I found them very helpful and professional in their dealings." name="comment" rows={7} />
            </div>
        </div>
        <button type="submit" className="btn-custom secondary" name="button">Submit Feedback</button>
    </form>
</div>
        </div>
    </section>
    
    </>
  )
}

export default Content