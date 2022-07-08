import React, { Component, useRef,useEffect,useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import $ from 'jquery';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import mapdata from '../../../data/mapdata.json';
import '../../../assets/js/Scroll.js'
import 'magnific-popup'

import api from '../../../constants/api' 
import {db} from '../../../firebase'
import {collection, addDoc, Timestamp,onSnapshot,getDoc,query,getDocs,where} from 'firebase/firestore'
import Banner from './Banner';


const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 5],
});
const qs = require('qs');
const Listingwrapper = () => {
    useEffect(() => { 
        
        
        
        // function popup() {
        //     $('.gallery-thumb').magnificPopup({
        //         type: 'image',
        //         gallery: {
        //             enabled: true
        //         },
        //     }); 
        // }
        // popup()
    }, [])
    const [showmore, setshowmore] = useState(false)
    const [item, setitems] = useState({})
    const [amenities,setamenities]  = useState(null)
    const showmoretoggle = ()=> {
        setshowmore(!showmore)
    }
    const {id} = useParams()
    React.useEffect(() => {
        getListingData(id)
    
      return () => {
        getListingData(id)
      }
    }, [id])
    
         const getListingData =(id)=>{
        api.post('property/getListingsById',qs.stringify({ 'listing_id': id })).then(function (response) {
            setitems(response.data.data[0])
            setamenities(response.data.data[0].list_amenities_values.split(','))
            
            // let dataFilter = response.data.data
            // dataFilter.forEach(element => {
            //     element.img_array = element.meta_images.split(',')
            // });
            // console.log(dataFilter)
            // setitems(dataFilter)
            
          });
        
    }
    const features = [ 
        { id: 1, icon: '/assets/img/amenities/a1.svg', title: `24 x 7 Water Availability` },
        { id: 2, icon: '/assets/img/amenities/a2.svg', title: 'Power backup' },
        { id: 3, icon: '/assets/img/amenities/a3.svg', title: '24 x 7 Security' },
        { id: 4, icon: '/assets/img/amenities/a4.svg', title: 'Swimming Pool' },
        { id: 5, icon: '/assets/img/amenities/a5.svg', title: 'Landscaped gardens' },
        { id: 6, icon: '/assets/img/amenities/a8.svg', title: 'GYM' },
        { id: 7, icon: '/assets/img/amenities/a7.svg', title: "Children's play area" },
        { id: 8, icon: '/assets/img/amenities/a8.svg', title: 'Club House' },
        { id: 9, icon: '/assets/img/amenities/a9.svg', title: `Cafeteria` },
        { id: 10, icon: '/assets/img/amenities/a10.svg', title: 'Golf Course' },
        { id: 11, icon: '/assets/img/amenities/a11.svg', title: 'Multipurpose room' },
        { id: 13, icon: '/assets/img/amenities/a12.svg', title: 'Sports Facility' },
        { id: 14, icon: '/assets/img/amenities/a13.svg', title: 'Intercom' },
        { id: 15, icon: '/assets/img/amenities/a14.svg', title: 'Jogging track' },
        { id: 16, icon: '/assets/img/amenities/a15.svg', title: "Indoor games" },
        { id: 17, icon: '/assets/img/amenities/a16.svg', title: 'Maintenance staff' },
        { id: 18, icon: '/assets/img/amenities/a17.svg', title: `Staff Quarter` },
        { id: 19, icon: '/assets/img/amenities/a18.svg', title: 'Masjid' },
        { id: 20, icon: '/assets/img/amenities/a19.svg', title: 'Shopping mall' },
        { id: 21, icon: '/assets/img/amenities/a20.svg', title: 'School' },
        { id: 22, icon: '/assets/img/amenities/a21.svg', title: 'Hospital' },
        { id: 23, icon: '/assets/img/amenities/a22.svg', title: 'ATM' },
       
    ];
  return (
 <>
    <Banner images={item.img_array}/>
                <div className="section listing-wrapper">
                 
                <div className="container"> 
                    <div className="row">
                        
                            <div className="acr-listing-section col-md-8">
                            <div className="acr-listing-section-body">
                                <h3 style={{margin:0,textTransform:'uppercase'}}> {item.meta_size} BHK {item.list_property_subtype} FOR {item.list_sell_or_rent}</h3>
                                <p> Posted by <span className="green font-weight-bold text-uppercase">{item.list_listed_by_type} </span></p>
                            </div>
                            </div>
                            <div className="acr-listing-section col-md-4 flex">
                                <div className="acr-listing-section-body">
                                    <div className="listing-section-price">
                                    <h3>PKR <span className="gray">{item.meta_price}</span></h3>
                                    <div className="row">
                                        <div className="share-icons-controls">
                                            <div className="share-icons"><Link to="#" className="favorite"><i className="far fa-heart" /></Link></div>
                                            <div className="share-icons"><Link to="#" className="favorite"><i className="fa fa-share"/></Link></div>
                                            <div className="share-icons"><Link to="#" className="favorite"><i className="fas fa-ellipsis-h" /></Link></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <hr className='mt-2 mb-5'/>
                    <div className="row">
                        {/* Listings Start */}
                        <div className="col-lg-8 ">
                            {/* Content Start */}
                            <div className="acr-listing-section sidebar sticky-sidebar">
                            <div className="acr-listing-controls">
                                <Link className="acr-listing-control jumpto"  data-section="overview-section">
                                    <span>Overview</span>
                                </Link>
                                <Link className="acr-listing-control jumpto" data-section="pa-section">
                                    <span>Property Address</span>
                                </Link>
                                <Link className="acr-listing-control jumpto" data-section="pd-section">
                                    <span>Property Details</span>
                                </Link>
                                <Link className="acr-listing-control jumpto" data-section="anf-section">
                                    <span>Amenities & Nearby Facilities</span>
                                </Link>
                                <Link className="acr-listing-control jumpto" data-section="map-section" style={{border:'none'}}>
                                    <span>Map</span>
                                </Link>
                            </div>
                        </div>
                            <div className="listing-content mt-5" id="overview-section">
                                <h4>Overview -</h4>
                                <h5>{item.meta_title}</h5>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                    <table>
                                        <tr>
                                            <th width="30%">Property Type :</th>
                                            <td>{item.list_property_type}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Price :</th>
                                            <td>PKR {item.meta_price}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Legal Ownership Type :</th>
                                            <td>{item.meta_ownership_type}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Property Description :</th>
                                            <td>{item.meta_description}</td>
                                        </tr>
                                        </table>
                                    </div>
                                </div>
                        
                                
                            </div>
                            <div className="listing-content " id="pa-section">
                            <h4>Property Address -</h4>
                                <p>{item.list_property_number} {item.list_building} {item.list_street}</p>
                            </div>
                            {/* Content End */}
                            {/* Price Range In the area Start */}
                            
                            {/* Price Range In the area End */}
                            <hr/>
                            <div className="property-detail-section mt-4 acr-listing-features" id="pd-section">
                                <h4>Property Details -</h4>
                                <div className="row">
                                
                               
                                <div className="col-lg-8 col-md-6">
                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                        <div className="flaticon-svg">
                                                            <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/location.svg"} alt="agent" className="flaticom-img"/>
                                                        </div>
                                                    </div>
                                                        
                                                    <div className="listing-detail">
                                                        <h6 className="listing-feature-label">Location</h6>
                                                        <span className="listing-feature-value">{item.meta_overlooking}</span>
                                                    </div>
                                                </div>
                                            </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6">
                                 <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg">
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/location.svg"} alt="agent" className="flaticom-img"/>
                                                    </div>
                                                    </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Area</h6>
                                                            <span className="listing-feature-value">{item.meta_size}</span>
                                                        </div>
                                                </div>
                                            </div>

                                 </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 ">
                                        <div className="listing-feature-wrapper">
                                            
                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg">
                                                    <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/bedroom.svg"} alt="agent" className="flaticom-img"/>
                                                        </div>
                                                        </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Bedrooms</h6>
                                                            <span className="listing-feature-value">{item.meta_no_bedrooms}</span>
                                                        </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg">
                                                    <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/livingroom.svg"} alt="agent" className="flaticom-img"/>
                                                        </div>
                                                        </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Living room</h6>
                                                            <span className="listing-feature-value">{item.meta_living}</span>
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg">
                                                    <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/garage.svg"} alt="agent" className="flaticom-img"/>
                                                        </div>
                                                        </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Dedicated parking</h6>
                                                            <span className="listing-feature-value">{item.meta_if_parking}</span>
                                                        </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="listing-feature-wrapper">
                                       

                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg"><img src={process.env.PUBLIC_URL + "/assets/img/listing-single/shower.svg"} alt="agent" className="flaticom-img"/></div>
                                                    </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Bathrooms</h6>
                                                            <span className="listing-feature-value">{item.meta_no_bathrooms}</span>
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg"><img src={process.env.PUBLIC_URL + "/assets/img/listing-single/balcony.svg"} alt="agent" className="flaticom-img"/></div>
                                                    </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Balconies</h6>
                                                            <span className="listing-feature-value">{item.meta_balcony}</span>
                                                        </div>
                                                </div>
                                            </div>

                                            
                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg"><img src={process.env.PUBLIC_URL + "/assets/img/listing-single/elevator.svg"} alt="agent" className="flaticom-img"/></div>
                                                    </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Elevator</h6>
                                                            <span className="listing-feature-value">{item.meta_elevator}</span>
                                                        </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="listing-feature-wrapper">
                                      
                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg"> <img src={process.env.PUBLIC_URL + "/assets/img/listing-single/location.svg"} alt="agent" className="flaticom-img"/></div>
                                                   </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Kitchens</h6>
                                                            <span className="listing-feature-value">{item.meta_kitchens}</span>
                                                        </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg"><img src={process.env.PUBLIC_URL + "/assets/img/listing-single/location.svg"} alt="agent" className="flaticom-img"/></div>
                                                    </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Number of floors</h6>
                                                            <span className="listing-feature-value">{item.meta_no_of_floors}</span>
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="listing-feature">
                                                    <div className="col-md-4 flaticon">
                                                    <div className="flaticon-svg"><img src={process.env.PUBLIC_URL + "/assets/img/listing-single/real-estate.svg"} alt="agent" className="flaticom-img"/></div>
                                                    </div>
                                                        <div className="listing-detail">
                                                            <h6 className="listing-feature-label">Possession taken</h6>
                                                            <span className="listing-feature-value">{item.meta_possesion}</span>
                                                        </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <hr className="mt-2"/>

                            <div className="property-detail-section mt-4 acr-listing-features" id="anf-section">
                                <h4>Amenities & Nearby Facilities</h4>
                                <div className="row">
                                {amenities && features.map((item, i) => {
                                    if(amenities.includes(item.id.toString())){
                                        return <div className="col-lg-2 col-md-2">
                                        <div className="listing-feature-wrapper">
                                            <div className="amenities-feature">
                                                <img className='filter-green' src={process.env.PUBLIC_URL + item.icon} alt="agent"/>
                                                <div className="listing-detail">
                                                    <p>{item.title} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                })}
                                    
                                   
                                </div>
                            </div>

                            <hr/>
                            <div id="map-section">
                            <h4>Map</h4>
                            <div className="banner-map">
                {item.meta_lat && (<MapContainer
                    className="markercluster-map map"
                    center={[parseFloat(item.meta_lat), parseFloat(item.meta_lon)]}
                    zoom={7}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker  position={{lat:parseFloat(item.meta_lat),lng:parseFloat(item.meta_lon)}} icon={customMarker}>
                            {/* <Popup>
                                <div className="mapboxgl-popup mapboxgl-popup-anchor-top">
                                    <div className="mapboxgl-popup-tip" />
                                    <img src={item.properties.thumbnail} alt={item.properties.title} />
                                    <div className="acr-listing-popup-body">
                                        <h5>
                                            <Link to="#" title={item.properties.title}>
                                                {item.meta\\}
                                            </Link>
                                        </h5>
                                        <span className="listing-price">{item.properties.price}</span>
                                        <p>
                                            <i className="fas fa-map-signs" />{item.properties.description}
                                        </p>
                                        <div className="location-popup-meta">
                                            <span><i className="fas fa-bed" />{item.properties.bed}</span>
                                            <span><i className="fas fa-bath" />{item.properties.bath}</span>
                                            <span><i className="fas fa-ruler-combined" />{item.properties.size}</span>
                                        </div>
                                    </div>
                                </div>
                            </Popup> */}
                        </Marker>
                </MapContainer>)}
            </div>
                            </div>
                            
                            
                        </div>
                       
                        <div className="col-lg-4">
                            <div className="sidebar sticky-sidebar">
                                {item.list_listed_by_type == 'owner' ? (   <div className="sidebar-widget owner-description">
                                    <h6>Posted on – 4 April 2022</h6>
                                    {/* Author Start */}
                                    <div className="media sidebar-author listing-agent">
                                        <Link to="#"><img src={process.env.PUBLIC_URL + "/assets/img/listing-single/Rectangle 1600.png"} alt="agent" /></Link>
                                        <div className="media-body">
                                            <h5>Freddy Burben</h5>
                                            <span>Saudi Arabia</span>

                                            <div className=''>
                                                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Call</Link>
                                                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Chat</Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>) : ( <div className="sidebar-widget owner-description">
                                    <h6>Posted on – 4 April 2022</h6>
                                    {/* Author Start */}
                                    <div className="media sidebar-author listing-agent">
                                        <Link to="#"><img src={process.env.PUBLIC_URL + "/assets/img/listing-single/lahoreproperty.png"} alt="agent" /></Link>
                                        <div className="media-body">
                                            <h5>Lahore Real Estate</h5>
                                            <div className="media-des">
                                                <span>Pakistan</span>
                                                <div className='d-flex align-items-center'>
                                                <ul className='star-rating'><li class="custom-warning"><i class="fas fa-star fa-xs"></i></li><li class="custom-warning"><i class="fas fa-star fa-xs"></i></li><li class="custom-warning"><i class="fas fa-star fa-xs"></i></li><li class="custom-warning"><i class="fas fa-star fa-xs"></i></li><li><i class="fas fa-star fa-xs"></i></li></ul>
                                                <span className='rating'>(20)</span>
                                                </div>
                                                </div> 
                                             

                                            <div className=''>
                                                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Call</Link>
                                                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Chat</Link>
                                            </div>
                                        </div>
                                        {/* <Dropdown className="options-dropdown">
                                            <Dropdown.Toggle as={NavLink}><i className="fas fa-ellipsis-v" /></Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                                <ul>
                                                    <li> <Link to="tel:+123456789"> <i className="fas fa-phone" /> Call Agent</Link> </li>
                                                    <li> <Link to="/listing-grid"> <i className="fas fa-th-list" /> View Listings</Link> </li>
                                                    <li> <Link to="#"> <i className="fas fa-star" /> Save Agent</Link> </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown> */}
                                    </div>
                                    <Link to="#" className="profile-more">View agent profile</Link>
                                   
                                </div>)}
                             
                               
                                <div className="sidebar-widget">
                          
                                </div>
                               
                            </div>
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>
 
 </>
  )
}

export default Listingwrapper