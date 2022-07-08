import React, { Fragment } from 'react';
import { Link,useHistory } from 'react-router-dom';
import HeaderComponent from '../../../helper/Navigationhelper';
import { useDispatch, useSelector } from "react-redux"

import "./assets/dashboardscript.js"
import { logout } from "../../../actions/auth";

const Header = ()=> {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <header class="navbar bg-white sticky-top flex-md-nowrap p-0 ">
            <div className='container-fluid'>
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center" href="#"><img  src={process.env.PUBLIC_URL + "/assets/img/logo.png"} /></a>
   <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   
   <div class="navbar-nav">
     <div class="nav-item p-3 text-nowrap">
       <a class="nav-link px-3" href="#"><img className="profile-img" src={process.env.PUBLIC_URL +"/assets/img/naijagah/profile-user.svg"}></img></a>
       <Link onClick={()=>{
           dispatch(logout());
           
               history.push('/')
           
       }}><p className='font-weight-bold'>LOGOUT</p></Link>
     </div>
   </div>
            </div>
   
 </header>
  )
}

export default Header