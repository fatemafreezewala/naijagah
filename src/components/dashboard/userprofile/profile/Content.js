import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import "../assets/dashboard.css"
import "../assets/dashboardscript.js"
import Aside from '../Aside'
import Header from '../Header'
import { useSelector } from "react-redux";

const Content = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
   <Fragment>
       <Header></Header> 

<div class="container-fluid">

  <div class="row"> 

    <Aside color={currentUser.u_random_color} name={currentUser.u_name} page="profile"></Aside>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-section">
     

                    <div className=''> 
                        <div className='welcomecontainer'>
                          <div className='welcomebox'>
                            
                            <img className="welcomeimg" src={process.env.PUBLIC_URL +"/assets/img/userdashboard/11.png"} />
                            <span className='text-white welcome'>Welcome</span>
                          </div>
                            <div className="media">
                                <div className="userprofile" > 
                                <div style={{width:100,height:100,
                                  background:currentUser.u_random_color,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <p style={{color:'#fff',fontSize:25,fontWeight:'bold',textTransform:'capitalize'}}>{currentUser.u_name.substring(0,1)}</p>
                                </div>
                                {/* <img src={process.env.PUBLIC_URL + "/assets/img/people/user.png"} alt="agent" /> */}
                                
                                </div>
                               
                        <div className="media-body"> 
                            <h5 className="">{currentUser.u_name}</h5>
                            <span className="user-phone"><img src={process.env.PUBLIC_URL + "/assets/img/userdashboard/phone-call.svg"} />{currentUser.u_country} {currentUser.u_phone}</span>
                            <span className="user-email"><img src={process.env.PUBLIC_URL + "/assets/img/userdashboard/mail.svg"} />{currentUser.u_email}</span>
                        </div>
                        <span className="user-edit"> <img src={process.env.PUBLIC_URL + "/assets/img/userdashboard/edit.svg"} /></span>
                    </div>
                        </div>
                    </div>



      <div className='welcomecontainer col-lg-6'>
                        <h5 class="mt-4">Modify Profile</h5>
                        <table>
                            <tr>
                                <th>{currentUser.u_country} {currentUser.u_phone}</th>
                                <td><Link>change</Link></td>
                            </tr>
                            <tr>
                                <th>{currentUser.u_email}</th>
                                <td><Link>change</Link></td>
                            </tr>
                            <tr>
                                <th>Make your phone number visible</th>
                                <td>

                                <div className='custom-control custom-switch'>
                                  <input
                                    type='checkbox'
                                    className='custom-control-input'
                                    id='customSwitchesChecked'
                                    defaultChecked
                                  />
                                  <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                                  </label>
                                </div></td>
                                                      </tr>
                                                      <tr>
                                                          <th>Do you want notifications on your email</th>
                                                          <td>      <div className='custom-control custom-switch'>
                                  <input
                                    type='checkbox'
                                    className='custom-control-input'
                                    id='customSwitches'
                                    readOnly
                                  />
                                  <label className='custom-control-label' htmlFor='customSwitches'>
                                  </label>
                                </div></td>
                            </tr>
                            </table>
                            </div>
                   

                        

                 
                
    </main>
    <Link to={'/add-listing'}><span className="user-plus"><img src={process.env.PUBLIC_URL + "/assets/img/userdashboard/plus.svg"} /></span> </Link>
  </div>
</div>
        


   </Fragment>
  )
}

export default Content