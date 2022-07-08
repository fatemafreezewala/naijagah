import React from 'react'
import { Link } from 'react-router-dom'
import './assets/dashboard.css' 
const aside = ({page,name,color}) => {
  return ( 

    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3 userDashboardList">
        <div className="userProfile mt-1 mb-2">
          <div className="userProfileletter text-uppercase" style={{background:color,border:'none',marginTop:20}}> {name.substring(0,1)} </div>
          <span className='text-uppercase'>{name}</span>
        </div>
   
      <ul class="nav flex-column">
        <li  class={page == 'profile' ? 'nav-item p-2 list-active' : 'nav-item p-2'} > 
          <Link class="nav-link" aria-current="page" to="/user-profile">
            <span data-feather="home"></span>
            <img src={process.env.PUBLIC_URL +"/assets/img/userdashboard/user.svg"} />
        <span>My Profile</span> 
          </Link>
        </li> 
        <li class={page == 'list' ? 'nav-item p-2 list-active' : 'nav-item p-2'}>
          <Link  class="nav-link" to="/user-listing">
            <span data-feather="file"></span>
            <img src={process.env.PUBLIC_URL +"/assets/img/userdashboard/homelist.svg"} />
        <span>Properties listed for Sale / Rent</span>
          </Link>
        </li>
        <li class={page == 'saved' ? 'nav-item p-2 list-active' : 'nav-item p-2'}>
          <Link class="nav-link" to="/user-saved-listing">
            <span data-feather="shopping-cart"></span>
            <img src={process.env.PUBLIC_URL +"/assets/img/userdashboard/Line.svg"} />
        <span>Properties saved</span>
          </Link>
        </li>
        <li class={page == 'enquiry' ? 'nav-item p-2 list-active' : 'nav-item p-2'}>
          <Link class="nav-link" to="/enquiries">
            <span data-feather="users"></span>
            <img src={process.env.PUBLIC_URL +"/assets/img/userdashboard/enquiry.svg"} />
        <span>Enquiries</span>
          </Link>
        </li>
        <li class={page == 'feedback' ? 'nav-item p-2 list-active' : 'nav-item p-2'}>
          <Link class="nav-link" to="/notification-feedback">
            <span data-feather="bar-chart-2"></span>
            <img src={process.env.PUBLIC_URL +"/assets/img/userdashboard/active.svg"} />
        <span>Notifications / Feedback</span>
          </Link>
        </li>
        <li class={page == 'ratings' ? 'nav-item p-2 list-active' : 'nav-item p-2'}>
          <Link class="nav-link" to="/ratings">
            <span data-feather="bar-chart-2"></span>
            <img src={process.env.PUBLIC_URL +"/assets/img/userdashboard/active.svg"} />
            <span>Ratings / Review</span>
          </Link>
        </li>
      </ul>

     
    </div>
  </nav>
  )
}

export default aside