import React, { Component, Fragment,useState } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import listing from '../../../../data/listings.json';
import ButtonWithIcon from '../../../layouts/ButtonWithIcon';
import api from '../../../../constants/api';
import imgUrl from '../../../../constants/imgUrl'
import Loader from '../../../../components/sections/Loader';

const bedstip = (
    <Tooltip>
        Rooms
    </Tooltip>
);
const bathstip = (
    <Tooltip>
        Bathrooms
    </Tooltip>
);

const Content = () => {
    const [items, setitems] = useState(listing)
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        getAgents()
    
      return () => {
        getAgents()
      }
    }, [])
    
    const getAgents = () =>{  
        setLoading(true)
        api.get('/agents')
        .then((response) => { 
            setitems(response.data.data)
        setLoading(false)
        }, (error) => {
            setLoading(false)
        }); 
    }

  return (
    <div className="section  pagination-content " style={{paddingTop:40,background:'#F2F6F7'}}>
    <div className="container" style={{padding:0,position:'relative'}}>
    
          <div className='listing' style={{marginBottom:0,paddingTop:15,paddingBottom:15,paddingRight:30,paddingLeft:30}}>
          <div className="row">
            <div className='col-lg-2 col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>Deals in</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>City</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col-lg-3 col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>Society</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            <div className='col-lg-3 col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>Agent Name</option>
                       <option value="Daily">Tahsein Jawed</option>
                       <option value="Monthly">Qutubuddin</option>
                       <option value="Yearly">Tahsein Jawed</option>
                   </select>
               </div>
            </div>
            <div className='col-lg-2 col-pl-8'>
               <div className="form-group form-grp-filter">
                   <select className="form-control" name="cycle">
                       <option>Rating</option>
                       <option value="Daily">Daily</option>
                       <option value="Monthly">Monthly</option>
                       <option value="Yearly">Yearly</option>
                   </select>
               </div>
            </div>
            
        </div>
        <ButtonWithIcon text="Find"></ButtonWithIcon>
          </div>
         
    </div>
    {loading == true ? (<Loader></Loader>) : (<div>
        {items.map((data,index)=>{
            return <div className="container mt-4">
            
            <div className="row">
             
                {/* Posts Start */}
                <div className="col-lg-9 mt-5 pl-0">


            <div className="listing listing-list agent-listing">
                <div className='row'>
                    <div className='agent-profile col-lg-2'>
                    <div className="listing-thumbnail">    
                    <img src={imgUrl +data.u_profile} alt="author" />
                    </div>
                    
                    </div>
                    <div className='col-lg-10'>
                    <div className="listing-body">
                    
                        <div className="listing-gallery-wrapper listing-gallery-wrapper-mobile " style={{justifyContent:'space-between'}}>
                        <Link to="/agentprofile">
                        <h4 className="listing-title"> 
                                {data.u_name}
                            </h4>
                        </Link>
                            
                            
                            <div className="listing-controls">
                                <div className='postdetail'>
                                <i class="custom-warning fas fa-star fa-s pr-1"></i> <i class="custom-warning fas fa-star fa-s pr-1"></i> <i class="custom-warning fas fa-star fa-s pr-1"></i> <i class="custom-warning fas fa-star fa-s pr-1"></i> <i class="custom-warning fas fa-star fa-s pr-1"></i> 
                                <span className='p1'>(9)</span>
                                </div>
                            </div> 
                        </div>

                        <div className="listing-gallery-wrapper listing-gallery-wrapper-mobile" style={{justifyContent:'space-between'}}>
                            <div>
                                <p className="p1 listing-text">Contact Person : {data.ag_contact_person}</p>
                                <p className="p1 listing-text my-2"><img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/location-pin.svg"} alt="author" /> {data.ag_city}</p>
                            </div>
                            <div className="space-mobile">
                                <div className='postdetail'>
                                    <Link to="/agentrating" className="btn btn-primary btn-sm btn-call-chat btn-custom btn-sm secondary mt-2 mr-0"> Rate the agent </Link>
                                </div>
                            </div>
                        </div>

                        <div className="listing-gallery-wrapper" style={{justifyContent:'flex-start'}}>
                        
                                {/* <p className="p1">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/agentdashbord/location-pin.svg"} alt="author" /> Karachi, Pakistan
                                <i style={{color:'#297CE0',fontSize:20,marginRight:10}} className="fas fa-map-marker" /> Karachi, Pakistan
                                </p>
                        */}

                        </div>

                        <div className='call-chat-btn' style={{marginBottom:8}}>
                            <Link to="/listing-details" className="btn btn-primary btn-sm btn-call-chat btn-custom btn-sm secondary">Call</Link>
                            <Link to="/listing-details" className="btn btn-primary btn-sm btn-call-chat btn-custom btn-sm secondary">Chat</Link>
                            </div>

                        <div className='divide'></div>
 
                    </div> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                    <div className="listing-gallery-wrapper" style={{justifyContent:'space-between',alignItems:'center',marginTop:0}}>
                        
                            <div className="listing-author">
                                <div className="listing-author-body" style={{marginLeft:10}}>
                                    <span className="listing-date blue">{data.ag_work}</span>
                                    <p> <Link  className="p1" to="#">{data.ag_major_s1} / {data.ag_major_s2} / {data.ag_major_s3}</Link> </p>
                                </div>
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
                </div>



                </div>
            </div>

        </div>
        })}
    </div>)}
  


  


</div>
  )
}

export default Content
