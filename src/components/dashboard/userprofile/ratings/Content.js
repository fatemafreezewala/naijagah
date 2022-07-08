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

    <Aside page="ratings"></Aside>  

    <main class="col-md-11 ms-sm-auto col-lg-10 px-md-4 main-section">
    
      <div className='welcomecontainer' style={{padding:0}}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Ratings">
  <table class="table table-hover">
  <thead style={{background:'#F2F6F7'}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Description</th>
      <th scope="col" style={{width:127}}>Rating</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Sharukh Khan</td>
      <td>Borem ipsum dolor sit amet conse ctetur adipisicing eiusmod Eorem ipsum dolor sit amet conse ctetur.</td>
      <td>
      <div class="acr-rating-wrapper"><div class="acr-rating dashbrating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div></div>
      </td>
      <td>05/05/2022</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fahem Qureshi</td>
      <td>Borem ipsum dolor sit amet conse ctetur adipisicing eiusmod Eorem ipsum dolor sit amet conse ctetur.</td>
      <td>
      <div class="acr-rating-wrapper"><div class="acr-rating dashbrating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div></div>
      </td>
      <td>05/05/2022</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Salman Mirza</td>
      <td>Borem ipsum dolor sit amet conse ctetur adipisicing eiusmod Eorem ipsum dolor sit amet conse ctetur.</td>
      <td>
      <div class="acr-rating-wrapper"><div class="acr-rating dashbrating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div></div>
      </td>
      <td>05/05/2022</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Ahmed khan</td>
      <td>Borem ipsum dolor sit amet conse ctetur adipisicing eiusmod Eorem ipsum dolor sit amet conse ctetur.</td>
      <td>
      <div class="acr-rating-wrapper"><div class="acr-rating dashbrating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div></div>
      </td>
      <td>05/05/2022</td>
    </tr>
  </tbody>
</table>
  </Tab>
  <Tab eventKey="profile" title="Waiting for approval">
  <table class="table table-hover">
  <thead style={{background:'#F2F6F7'}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Description</th>
      <th scope="col" style={{width:127}}>Rating</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Sharukh Khan</td>
      <td>Borem ipsum dolor sit amet conse ctetur adipisicing eiusmod Eorem ipsum dolor sit amet conse ctetur.</td>
      <td>
      <div class="acr-rating-wrapper"><div class="acr-rating dashbrating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div></div>
      </td>
      <td>05/05/2022</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fahem Qureshi</td>
      <td>Borem ipsum dolor sit amet conse ctetur adipisicing eiusmod Eorem ipsum dolor sit amet conse ctetur.</td>
      <td>
      <div class="acr-rating-wrapper"><div class="acr-rating dashbrating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div></div>
      </td>
      <td>05/05/2022</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Salman Mirza</td>
      <td>Borem ipsum dolor sit amet conse ctetur adipisicing eiusmod Eorem ipsum dolor sit amet conse ctetur.</td>
      <td>
      <div class="acr-rating-wrapper"><div class="acr-rating dashbrating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div></div>
      </td>
      <td>05/05/2022</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Ahmed khan</td>
      <td>Borem ipsum dolor sit amet conse ctetur adipisicing eiusmod Eorem ipsum dolor sit amet conse ctetur.</td>
      <td>
      <div class="acr-rating-wrapper"><div class="acr-rating dashbrating"><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i><i class="fas fa-star active"></i></div></div>
      </td>
      <td>05/05/2022</td>
    </tr>
  </tbody>
</table>
  </Tab>
  
</Tabs>
    
          {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Rating</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Waiting for approval</a>
  </li>
  
</ul> */}

     
      </div>
    </main>
    
  </div>
</div>
        


   </Fragment>
  )
}

export default Content