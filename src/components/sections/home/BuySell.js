import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import agents from '../../../data/agents.json';

class BuySell extends Component {
   
    render() {
        
        return (
            <div className="section pt-0 agents" style={{background:'#F2F6F7'}}>
                <div className="container">
                    <div className="section-title-wrap section-header flex-header">
                        
                        
                    </div>
                   
                        {/* Agent Start */}
                       
                           <div className='row'>
                           <div className="col-lg-4 col-sm-12">
                                <div className="acr-agent buysellbox">
                                    {/* {item.star === true ? <div className="listing-badge featured"><i className="fas fa-star" /></div> : ''} */}
                                    <img src={process.env.PUBLIC_URL + "/" + 'assets/img/naijagah/buyproperty.svg'} alt="agent" />
                                    <div className="acr-agent-body">
                                       
                                        <h5>Buy Property</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="acr-agent buysellbox">
                                    {/* {item.star === true ? <div className="listing-badge featured"><i className="fas fa-star" /></div> : ''} */}
                                    <img src={process.env.PUBLIC_URL + "/" + 'assets/img/naijagah/sellproperty.svg'} alt="agent" />
                                    <div className="acr-agent-body">
                                        <h6> <Link to="/agent-details"></Link> </h6>
                                        <span></span>
                                        <p></p>
                                        <h5>Sell / Rent Your Property</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12"> 
                                <div className="acr-agent buysellbox" >
                                    {/* {item.star === true ? <div className="listing-badge featured"><i className="fas fa-star" /></div> : ''} */}
                                    <img src={process.env.PUBLIC_URL + "/" + 'assets/img/naijagah/findagent.svg'} alt="agent" />
                                    <div className="acr-agent-body">
                                        <h6> <Link to="/agent-details"></Link> </h6>
                                        <span></span>
                                        <p></p>
                                        <h5>Find An Agent</h5>
                                    </div>
                                </div>
                            </div>
                           </div>
                       
                        {/* Agent End */}
                    
                </div>
            </div>
        );
    }
}

export default BuySell;