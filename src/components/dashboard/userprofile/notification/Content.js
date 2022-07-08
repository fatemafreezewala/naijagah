import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import "../assets/dashboard.css"
import "../assets/dashboardscript.js"
import Aside from '../Aside'
import Header from '../Header'
import { Tab, Nav,Tabs } from 'react-bootstrap';

const Content = () => {
  return (
   <Fragment>
       <Header></Header>

<div class="container-fluid">

  <div class="row">

    <Aside page="feedback"></Aside>  
 
    <main class="col-md-11 ms-sm-auto col-lg-10 px-md-4 main-section">
    
      {/* <div className='welcomecontainer'> </div>*/}
      
      <div className='row'>
        <div className="col-lg-6 pr-0">
       <div className='welcomecontainer'>
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


        <div className="col-lg-6 pl-0">
        <div className='welcomecontainer pt-5'>
          <div className='align-items-center d-flex' style={{flexDirection:'column'}}>
                  <form>
                    <div className="row">
                        <div className="col-md-12 form-group">
                          <div className="row">
                            <div className="col-md-9"><h4>Notifications / Feedback</h4></div>
                            <div className="col-md-3"><img src={process.env.PUBLIC_URL +"/assets/img/userdashboard/notification.svg"}></img></div>
                          </div>
                          
                          
                            <label>Title<sup className="text-danger">*</sup></label>
                            <input type="text" className="form-control" placeholder="Write some title here" name="fname" />
                        </div>
                        <div className="col-md-12 form-group">
                            <label>Description<sup className="text-danger">*</sup></label>
                            <textarea className="form-control" placeholder="Description write here" name="comment" rows={7} />
                        </div>
                    </div>
                    {/* <button type="submit" className="btn-custom secondary btn-block" name="button">Send Message</button> */}
                </form>
          </div>
          </div>
          </div>
      </div>

     
      
    </main>
    
  </div>
</div>
        


   </Fragment>
  )
}

export default Content