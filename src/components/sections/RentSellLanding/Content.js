import React, { Component, Fragment, useState} from 'react';
import { Tab, Nav, Accordion, Card, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Content() {
    const[data, setData] = React.useState('sell')
  return (
    <>
             <div className="section"> 
                <div className="container">
                    <div className="row mt-5">
                         <div className="col-lg-6 mb-lg-30 acr-single-img-wrapper">
                         <div className="section-title-wrap mr-lg-30">
                                <h3>Sell or Rent your property</h3>
                                <p className="subtitle">
                                As Nai jgha grows day by day as a property listing website and marketplace, we are here to help our partner sellers to make the most of this opportunity. Have you been thinking about how to sell a house or the best website for house rentals? Your confusion ends here. All you need to do is to join Nai jgha and list on this free property listing site. It wouldn’t take much of your time either. All you need to do is list property. If you are keen on selling a home, upload all the details of the properties online on the perfect home listing website to get maximum leads. Post free property ads online on Nai jgha if you are looking to post house for rent. You can post a complete property list that you may have because yes, it is unlimited.
                               </p>
                                <p className="subtitle">
                                If you have posted high-quality listings with full information of your property, you are sure to attract buyers and tenants because there are prospective customers browsing real estate listing websites and property
                                </p>
                            </div>
                         
                             <div className="acr-dots" />
                         </div>
                         <div className="col-lg-6">
                         <img src={process.env.PUBLIC_URL + "/assets/img/rentselllanding/rentsell.png"} alt="img" />
                         </div>
                     </div>
                 </div>
             </div>
             <div className="section">
                 <div className="container">
                 <div className="section-title-wrap section-header text-center">
                         <h2 className="title weOfferTitle">How it <span style={{color:'#297CE0'}}>Works?</span></h2>
                     </div>
                     <div className="row rentsell">
                    
                         <div className="col">
                             <Tab.Container defaultActiveKey="Sell/Rent">
                                 <Nav variant="tabs" className="nav nav-tabs">
                                     <Nav.Item>
                                    <div className="navafter" onClick={()=>{setData('sell')}} style={{color:data == 'sell' ? '#20B69E' : '#000',borderBottomWidth:2,borderColor:data == 'sell' ? '#20B69E' : '#fff'}}>
                                        <Nav.Link eventKey="Sell/Rent">
                                        <img className={data == 'sell' ? 'filter-green' : ''} src={process.env.PUBLIC_URL + "/assets/img/rentselllanding/sellorrent.svg"} alt="img"/>
                                        Sell/Rent Property With Ease</Nav.Link>
                                   </div>
                                     </Nav.Item>
                                     <Nav.Item>
                                         <div className="navafter" onClick={()=>{setData('buy')}} style={{color:data == 'buy' ? '#20B69E' : '#000' ,borderBottomWidth:2,borderColor:data == 'buy' ? '#20B69E' : '#fff' }}>
                                            <Nav.Link eventKey="Genuine">
                                            <img className={data == 'buy' ? 'filter-green' : ''} src={process.env.PUBLIC_URL + "/assets/img/rentselllanding/Genuine.svg"} alt="img"/>
                                            Attract Genuine Buyers</Nav.Link>
                                         </div>
                                     </Nav.Item>
                                     <Nav.Item>
                                    <div className="navafter" onClick={()=>{setData('close')}} style={{color:data == 'close' ? '#20B69E' : '#000' ,borderBottomWidth:2,borderColor:data == 'close' ? '#20B69E' : '#fff' }}>
                                        <Nav.Link eventKey="Sales">
                                        <img className={data == 'close' ? 'filter-green' : ''} src={process.env.PUBLIC_URL + "/assets/img/rentselllanding/startup.svg"} alt="img" />
                                        Close Sales Faster</Nav.Link>
                                    </div>
                                     </Nav.Item>
                                     <Nav.Item>
                                     <div className="navafter" onClick={()=>{setData('pay')}} style={{color:data == 'pay' ? '#20B69E' : '#000' ,borderBottomWidth:2,borderColor:data == 'pay' ? '#20B69E' : '#fff' }}>
                                        <Nav.Link eventKey="Earn">
                                        <img className={data == 'pay' ? 'filter-green' : ''} src={process.env.PUBLIC_URL + "/assets/img/rentselllanding/deal.svg"} alt="img" />
                                        Pay As You Earn</Nav.Link>
                                         </div>
                                     </Nav.Item>
                                 </Nav>
                                 <Tab.Content>
                                     <Tab.Pane eventKey="Sell/Rent">
                                     <div className="section"> 
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-4">
                         <img src={process.env.PUBLIC_URL + "/assets/img/rentselllanding/real-estate-agent.png"} alt="img" />
                         </div>
                         <div className="col-lg-8 mb-lg-30 acr-single-img-wrapper">
                         <div className="section-title-wrap mr-lg-30">
                             <h3>List your property with ease</h3>
                             <p className="subtitle">
                                 If you have posted high-quality listings with full information of your property, you are sure to attract buyers and tenants because there are prospective customers browsing real estate listing websites and property<Link to="/"> Know More..</Link>
                             </p>
                             <Link to="/" className="btn-custom secondary btn-sm">Start Listing</Link>
                         </div>
                         
                             <div className="acr-dots" />
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
                 </div>
             </div>
 </>
  )
}
