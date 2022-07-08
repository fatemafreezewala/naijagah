 import React from 'react'
 import { OverlayTrigger, Tooltip, Dropdown, NavLink, Accordion, Card } from 'react-bootstrap';
import './enquiries.css'
import { Link } from 'react-router-dom';
import Header from '../Header'
import Aside from '../Aside'
import "../assets/dashboard.css"
import "../assets/dashboardscript.js"
 const Content = () => {
   return ( 
       
    <>
    <Header></Header>
    <div class="container-fluid">
  <div class="row">
    <Aside page="enquiry"></Aside>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-section">
     

     

    <div className='welcomecontainer'>
    <Accordion defaultActiveKey="0" className="with-gap enq-accordian">
        <Card>
            <Accordion.Collapse eventKey="0" className="collapseparent">
                <Card.Body className='container-fluid' style={{padding:30}}>
                    <div className="row chat-box">
                   
                        <div className="col-lg-10 col-sm-12">
                            <div className='acr-chat-box d-flex'>
                                <div className='name-circle d-flex align-items-center justify-content-center fs-14'>j</div>
                                <div className='chat-desp-box ml-3'>
                                    <div className='d-flex name-date-box'>
                                        <p className='chat-user-name font-weight-bold'>Junaid .</p>
                                        <p className='fs-14 ml-4'>21 March, 2022</p>
                                    </div>
                                    <p className='chat-message'>
                                        Hi Muhammad Salman, I hope you are doing well. I have seen your property and want to buy it.Please let me know incase if it’s still available
                                    </p>
                                </div>
                            </div>
                            <div className='acr-chat-box d-flex ml-5 mt-4'>
                                <div className='name-circle rply-circle d-flex align-items-center justify-content-center fs-14'>M</div>
                                <div className='chat-desp-box ml-3'>
                                    <div className='d-flex name-date-box'>
                                        <p className='chat-user-name font-weight-bold'>Mohammed .</p>
                                        <p className='fs-14 ml-4'>21 March, 2022</p>
                                    </div>
                                    <p className='chat-message'>
                                        Hi Muhammad Salman, I hope you are doing well. I have seen your property and want to buy it.Please let me know incase if it’s still available
                                    </p>
                                </div>
                            </div>
                            <div className='acr-chat-box d-flex mt-4'>
                                <div className='name-circle d-flex align-items-center justify-content-center fs-14'>j</div>
                                <div className='chat-desp-box ml-3'>
                                    <div className='d-flex name-date-box'>
                                        <p className='chat-user-name font-weight-bold'>Junaid .</p>
                                        <p className='fs-14 ml-4'>21 March, 2022</p>
                                    </div>
                                    <p className='chat-message'>
                                        Hi Muhammad Salman, I hope you are doing well. I have seen your property and want to buy it.Please let me know incase if it’s still available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
            <Card.Header>
                <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                    <div className='container-fluid'>
                        <div className='row' style={{borderBottomWidth:1}}>
                            <div className='col-lg-9 d-flex col-sm-6 col-md-6'>
                                <div className='acr-prof-enquiry d-flex justify-content-center align-items-center'>
                                    j
                                </div>
                                <div className='acr-prof-name ml-3'>
                                    <p className='acr-cust-name font-weight-bold'>Junaid</p>
                                    <div className='acr-cust-country d-flex font-weight-600 fs-16'>
                                        <p>Pakistan</p>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/naijagah/pakistan.svg"} alt="property history" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-md-6'>
                                <p className='text-right font-weight-normal fs18'>26 April 2022</p>
                                <div className='d-flex text-right align-items-center justify-content-end'>
                                    <p className='font-weight-600 fs-16'>Enquiry Status </p>
                                    <img style={{width:20}} src={process.env.PUBLIC_URL + "/assets/img/naijagah/down-arrow.svg"} alt="property history" />
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3' style={{borderBottomWidth:1}}>
                        <div className='col-lg-7 d-flex'>
                            <p className='acr-cust-name font-weight-bold'>Buyer</p>
                        </div>
                        <div className='col-lg-5 d-flex justify-content-end'>
                        <Link className="acr-enq-links  mr-3" to="#" >
                                    <p>View property</p>  
                                </Link>
                                <Link className="acr-enq-links mr-3" to="#" >
                                    <p>See enquiry</p>  
                                </Link>
                                <Link className="acr-enq-links" to="#" >
                                    <p>View phone</p>  
                                </Link>
                        </div>
                             
                        </div>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
        </Card>
        <Card>
            <Accordion.Collapse eventKey="1" className="collapseparent">
                <Card.Body>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/history-2.jpg"} alt="property history" />
                        </div>
                        <div className="col-sm-8">
                            <h5>The Rebuilding Phase</h5>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
            <Card.Header>
                <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                    2000 - 2012
                </Accordion.Toggle>
            </Card.Header>
        </Card>
        <Card>
            <Accordion.Collapse eventKey="2" className="collapseparent">
                <Card.Body>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/history-3.jpg"} alt="property history" />
                        </div>
                        <div className="col-sm-8">
                            <h5>Modernization</h5>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
            <Card.Header>
                <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                    2013 - Till date
                </Accordion.Toggle>
            </Card.Header>
        </Card>
    </Accordion>    
    </div>      
    </main>
   
  </div>
</div>
    
    </>
   )
 }
 
 export default Content