import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import "../assets/dashboard.css"
import "../assets/dashboardscript.js"
import Aside from '../Aside'
import Header from '../Header'
import listing from '../../../../data/listings.json';
import '../../../../assets/js/custom.js'
import '../../../../assets/css/custom.css'
import '../../../../assets/js/pillButton.js'
import ButtonWithIcon from '../../../layouts/ButtonWithIcon';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import { useSelector } from "react-redux";
import api from '../../../../constants/api'
import qs from 'qs';

const Content = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [property,setPropertyList] = React.useState(null)
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
   // const renderitems =;
   React.useEffect(() => {
     getPropertyByOwnerId()
   
     return () => {
        getPropertyByOwnerId()
     }
   }, [])
   const getPropertyByOwnerId = async()=>{
    console.log(currentUser.u_id) 
    api.post('property/getListingsByOwnerId',qs.stringify({owner_id:currentUser.u_id})).then(function (response) {
        console.log(response.data.data)
        let dataFilter = response.data.data
        dataFilter.forEach(element => {
            element.img_array = element.meta_images.split(',')
        });
        console.log(dataFilter)
        setPropertyList(dataFilter)
        
      });
   }
  return (
   <Fragment>
       <Header></Header>

<div class="container-fluid">

  <div class="row">

    <Aside color={currentUser.u_random_color} name={currentUser.u_name}  page="list"></Aside>

    <main class="col-md-9 ms-sm-auto col-lg-8 px-md-4 main-section">
    <div className="acr-global-listing-controls mt-4">
                                
                               
        <p style={{fontWeight:'bold',color:'#232930',fontSize:18}}>Properties listed</p>
        <div style={{display:'flex',alignItems:'center'}}> 
           
            <div className="form-group form-grp-filter" style={{marginLeft:20}}>
                <select className="form-control" name="cycle">
                    <option>Purpose</option>
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>
            <div className="form-group form-grp-filter" style={{marginLeft:20}}>
                <select className="form-control" name="cycle">
                    <option>Property Status</option>
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>
        </div>
    </div>

 {property && property.map((item, i) => {
        return (<Link to ={"/listing-details/"+ item.list_id +'/'+item.meta_size+'-BHK-'+item.list_property_subtype+'-FOR-'+item.list_sell_or_rent }><div key={i} className="listing listing-list ">
        <div className='row'>
            <div className='col-lg-4'>
            <div className="listing-thumbnail">
            

            {/* <Carousel  dynamicHeight={true}>
            {item.img_array && item.img_array.map(data=>(
                <div>
                <Link to="/listing-details"><img src={'https://art-cause.com/test_app' + "/" + data} alt="listing" /></Link>
                
            </div>
            ))}
            
           
        </Carousel> */}
                {item.img_array && <Link to="/listing-details"><img src={'https://art-cause.com/test_app' + "/" + item.img_array[0]} alt="listing" /></Link>}
               
            </div>
            
            </div>
            <div className='col-lg-8'>
            <div className="listing-body">
            
                <div className="listing-gallery-wrapper" style={{justifyContent:'space-between'}}>
                    <h6 className="listing-title font-weight-700" style={{textTransform:'uppercase'}}> 
                        {item.meta_size} BHK {item.list_property_subtype} FOR {item.list_sell_or_rent}
                    </h6>
                    <div className="listing-controls">
                        <Link to="#" className="favorite"><i className="far fa-heart" /></Link>
                        <Link to="#" className="compare"><i className="fas fa-share-alt" /></Link>
                    </div>
                </div>
                <div className="listing-gallery-wrapper" style={{justifyContent:'flex-start'}}>
                        <p style={{marginTop:5}}>
                        <i style={{color:'#297CE0',fontSize:20,marginRight:10}} className="fas fa-map-marker" />
                        </p>
                    
                    <p className="listing-text">{item.list_area}<br></br>{item.list_society},{item.list_city}</p>
               
               
                
                </div>
                <div className='divide'></div>
                <div className="listing-gallery-wrapper" style={{justifyContent:'space-between',marginTop:15}}>
                <p className="listing-price"><span style={{color:'#000',fontSize:18,fontWeight:'bold'}}>PKR</span> {item.meta_price}</p>
                <div className="acr-listing-icons">
                    <OverlayTrigger overlay={bedstip}>
                        <div className="acr-listing-icon border-right">
                            <span className="acr-listing-icon-value">{item.meta_no_bedrooms}</span>
                            <i style={{color:'#20B69E',fontSize:30}} className="flaticon-bedroom" />
                        
                        </div>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={bathstip}>
                        <div className="acr-listing-icon">
                        <span className="acr-listing-icon-value">{item.meta_no_bathrooms}</span>
                            <i style={{color:'#20B69E',fontSize:30}} className="flaticon-bathroom" />
                        
                        </div>
                    </OverlayTrigger>
                    
                </div>
                </div>
                <div className='divide'></div>
                <p className="listing-text" style={{marginBottom:0}}>Location : {item.meta_overlooking}</p>
                
            </div> 
            </div>
        </div>
       
        <div className='row'>
            <div className='col-lg-12'>
            <div className="listing-gallery-wrapper" style={{justifyContent:'space-between',alignItems:'center',marginTop:0}}>
                  
                   <div className="listing-author">
                        {/* <img src={process.env.PUBLIC_URL + "/" + item.authorimg} alt="author" /> */}
                        {item.u_profile == '' ? (<div className='defaultProfile' style={{background:item.u_random_color}}>
                            {item.u_name.substring(0,1)}
                            </div>) : (<img src={process.env.PUBLIC_URL + "/" + item.authorimg} alt="author" />)}
                        
                        <div className="listing-author-body" style={{marginLeft:10}}>
                            <p> <Link to="#">{item.u_name}</Link> </p>
                            <span className="listing-date">{item.list_listed_by_type}</span>
                        </div>
                        
                    </div>
                    <div className=''>
                    <Link to="/listing-details" className="btn btn-primary btn-sm btn-call-chat">Call</Link>
                    <Link to="/listing-details" className="btn btn-primary btn-sm btn-call-chat">Chat</Link>
                   </div>
                    {/* <OverlayTrigger overlay={gallerytip}>
                        <Link to="#" className="listing-gallery"> <i className="fas fa-camera" /> </Link>
                    </OverlayTrigger> */}
                </div>
            
            </div>
        </div>
       
    </div></Link>)
    })}

     
                   

                        

                 
                
    </main>
    
  </div>
</div>
        


   </Fragment>
  )
}

export default Content