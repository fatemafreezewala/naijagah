import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from '../../../data/services.json';


 
export default function BuyRent() {
    const [option, setOption] = React.useState('buy')
    return (
        <div className="section light-bg infographics-2 bg-norepeat bg-bottom" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/pattern.png )" }}>
            <div className="container">
                {/* <div className="section-title-wrap section-header">
                    <h5 className="custom-primary">Services</h5>
                    <h2 className="title">You Need It, We Got It</h2>
                </div> */}
                <div className="row">
                    <ul className='buysellUl'>
                        <li onClick={()=>{setOption('buy')}} style={{color:option == 'buy' ? '#20B69E' : '#000',borderBottomWidth:2,borderColor:option == 'buy' ? '#20B69E' : '#f7f9fc'}}>BUY</li>
                        <li onClick={()=>{setOption('sell')}} style={{color:option == 'sell' ? '#20B69E' : '#000',borderBottomWidth:2,borderColor:option == 'sell' ? '#20B69E' : '#f7f9fc'}}>SELL</li>
                        <li onClick={()=>{setOption('rent')}} style={{color:option == 'rent' ? '#20B69E' : '#000',borderBottomWidth:2,borderColor:option == 'rent' ? '#20B69E' : '#f7f9fc'}}>RENT</li>
                    </ul>
                <form style={{width: '100%'}} method="post">
                  
                  <div className="search-wrapper ">
                      <input style={{borderWidth:0}} type="text" className="form-control " placeholder="Please enter a location to search for properties" name="sidebar-search" />
                      <div >
                        <button type="submit" >SEARCH</button>
                      </div>
                  </div>
              </form>
                    {/* {serviceblock.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="acr-infographic-item">
                                <i className={"flaticon-" + item.icon + ""} />
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                                <Link to="#"> <span>Get Started</span> <i className="fas fa-chevron-right" /> </Link>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
}
