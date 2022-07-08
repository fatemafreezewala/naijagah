import React, { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import Locationtab from './Locationtab';
import Progressbar from '../../layouts/Progressbar';
import { OverlayTrigger, Tooltip,Accordion, Card, NavLink } from 'react-bootstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import mapdata from '../../../data/mapdata.json';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import '../../../assets/js/custom'
import '../../../assets/js/fileupload'
import PropertyType from './PropertyType';
import BuyorSell from './BuyorSell';

// Features
const features = [ 
    { id: 1, icon: '/assets/img/amenities/a1.svg', title: `24 x 7 Water Availability` },
    { id: 2, icon: '/assets/img/amenities/a2.svg', title: 'Power backup' },
    { id: 3, icon: '/assets/img/amenities/a3.svg', title: '24 x 7 Security' },
    { id: 4, icon: '/assets/img/amenities/a4.svg', title: 'Swimming Pool' },
    { id: 5, icon: '/assets/img/amenities/a5.svg', title: 'Landscaped gardens' },
    { id: 6, icon: '/assets/img/amenities/a8.svg', title: 'GYM' },
    { id: 7, icon: '/assets/img/amenities/a7.svg', title: "Children's play area" },
    { id: 8, icon: '/assets/img/amenities/a8.svg', title: 'Club House' },
];
const features1 = [ 
    { id: 1, icon: '/assets/img/amenities/a9.svg', title: `Cafeteria` },
    { id: 2, icon: '/assets/img/amenities/a10.svg', title: 'Golf Course' },
    { id: 3, icon: '/assets/img/amenities/a11.svg', title: 'Multipurpose room' },
    { id: 4, icon: '/assets/img/amenities/a12.svg', title: 'Sports Facility' },
    { id: 5, icon: '/assets/img/amenities/a13.svg', title: 'Intercom' },
    { id: 6, icon: '/assets/img/amenities/a14.svg', title: 'Jogging track' },
    { id: 7, icon: '/assets/img/amenities/a15.svg', title: "Indoor games" },
    { id: 8, icon: '/assets/img/amenities/a16.svg', title: 'Maintenance staff' },
];
const features2 = [ 
    { id: 1, icon: '/assets/img/amenities/a17.svg', title: `Staff Quarter` },
    { id: 2, icon: '/assets/img/amenities/a18.svg', title: 'Masjid' },
    { id: 3, icon: '/assets/img/amenities/a19.svg', title: 'Shopping mall' },
    { id: 4, icon: '/assets/img/amenities/a20.svg', title: 'School' },
    { id: 5, icon: '/assets/img/amenities/a21.svg', title: 'Hospital' },
    { id: 6, icon: '/assets/img/amenities/a22.svg', title: 'ATM' },
    { id: 7, icon: '', title: '' },
    { id: 8, icon: '', title: '' },
];
const overlooking = [ 
    { id: 4, icon: '/assets/img/overlooking/o4.svg', title: 'Garden / Park' },
    { id: 2, icon: '/assets/img/overlooking/o3.svg', title: 'Corner Property' },
    { id: 1, icon: '/assets/img/overlooking/o2.svg', title: `Wide Road` },
  
    { id: 3, icon: '/assets/img/overlooking/o1.svg', title: 'General' },
    
   
];
const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 5],
});
function Content(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div className="thumb" key={file.name}>
            <div className="thumbInner">
                <img
                    src={file.preview}
                    alt="img"
                />
            </div>
        </div>
    ));
    const bedstip = (
        <Tooltip>
            The Legal ownership will remain these irrespective of the person who has placed add.
        </Tooltip>
    );
    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    return (
        <div className="section" style={{paddingTop:120}}>
            <div className="container">
            <Progressbar bgcolor="#20B69E" progress='30'  height={15} />
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                <Accordion  defaultActiveKey="0" className="with-gap">
                                <Card>
                                    <Accordion.Collapse eventKey="0" className="collapseparent">
                                        <Card.Body>
                                        <h5 className='font-weight-600 required mt-5 mb-3' style={{margin:0}}>You want to</h5>
                                         <BuyorSell></BuyorSell>
                                        <h5 className='font-weight-600 required mt-5 mb-3' style={{margin:0}}>Your property type</h5>
                                            <div className='row'>
                                            <PropertyType></PropertyType>
                                            </div> 
                                            <h5 className='font-weight-600 required mt-5 mb-3' style={{margin:0}}>Your property location</h5>
                                           <div className='row '>
                                          
                                                <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Property Number</label>
                                                        <input type="text" className="form-control" placeholder="Flat - 412" name="video" />
                                                    </div>
                                               </div>
                                               <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Building</label>
                                                        <input type="text" className="form-control" placeholder="Flat or House Number" name="video" />
                                                    </div>
                                               </div>
                                               <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Street</label>
                                                        <input type="text" className="form-control" placeholder="Street name" name="video" />
                                                    </div>
                                               </div>
                                           </div>
                                           <div className='row'>
                                                <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Area</label>
                                                        <input type="text" className="form-control" placeholder="Sector/Precinct/Phase" name="video" />
                                                    </div>
                                               </div>
                                               <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Society</label>
                                                        <input type="text" className="form-control" placeholder="Society ( e.g DHA Karachi )" name="video" />
                                                    </div>
                                               </div>
                                               <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>City</label>
                                                        <input type="text" className="form-control" placeholder="City name ( e.g Karachi )" name="video" />
                                                    </div>
                                               </div>
                                           </div>
                                           <div class="form-check mb-4 mt-4">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label font-weight-600" for="flexCheckChecked">
  To protect your privacy, Your property (building) and street Number is not visible. Do you want to display this on property listing ?
  </label>
</div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                                            Propety Type and Location
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="1" className="collapseparent">
                                        <Card.Body>
                                        <div className="banner-map">
                                <MapContainer
                                    className="markercluster-map map"
                                    center={[38.907, -77.04]}
                                    zoom={12}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                   {mapdata.map((item, i) => (
                                        <Marker key={i} position={item.geometry.coordinates} icon={customMarker}>
                                            <Popup>
                                                <div className="mapboxgl-popup mapboxgl-popup-anchor-top">
                                                    <div className="mapboxgl-popup-tip" />
                                                    <img src={item.properties.thumbnail} alt={item.properties.title} />
                                                    <div className="acr-listing-popup-body">
                                                        <h5>
                                                            <Link to="#" title={item.properties.title}>
                                                                {item.properties.title}
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
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                                        Location on map
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="2" className="collapseparent">
                                        <Card.Body>
                                           <div className='row'>
                                               <div className='col-lg-8'>
                                                <div className="form-group">
                                                    <label className='font-weight-600 required'>Property Title</label>
                                                    <input type="text" className="form-control" placeholder="Property Video URL" name="video" />
                                                </div>
                                               </div>
                                               <div className='col-lg-2'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Size</label>
                                                        <input type="text" className="form-control" placeholder="Numbers only" name="video" />
                                                    </div>
                                               </div>
                                               <div className='col-lg-2'>
                                                    <div className="form-group form-grp-filter">
                                                    <label className='font-weight-600'>.</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>Square yard</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div>
                                               </div>
                                           </div>
                                           <div className='row'>
                                               <div className='col-lg-8'>
                                                <div className="form-group">
                                                    <label className='font-weight-600 required'>Price (PKR)</label>
                                                    <input type="text" className="form-control" placeholder="Property Video URL" name="video" />
                                                </div>
                                               </div>
                                               <div className='col-lg-2'>
                                               <div className="form-group form-grp-filter">
                                                    <label className='font-weight-600 required'>Bedrooms</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>Square yard</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div>
                                               </div>
                                               <div className='col-lg-2'>
                                                    <div className="form-group form-grp-filter">
                                                    <label className='font-weight-600 required'>Bathrooms</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>Square yard</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div>
                                               </div>
                                           </div>
                                           <div className='row'>
                                               <div className='col-lg-6'>
                                               <label className='font-weight-600 required'>Overlooking</label>
                                               <div className="row acr-listing-feature-row">
                                               
                                                    {overlooking.map((item, i) => (
                                                        <div key={i} className="col">
                                                            <label className="acr-listing-feature image-checkbox">
                                                                <input type="checkbox" name={"feature" + item.id + ""} />
                                                                <i className="acr-feature-check fas fa-check" />
                                                                
                                                                <img className='g-img' src={process.env.PUBLIC_URL + item.icon}  alt="" />
                                                                {/* <i className={"acr-listing-feature-icon flaticon-" + item.icon + ""} /> */}
                                                                <p>{item.title} </p>
                                                            </label>
                                                        </div>
                                                    ))}
                                                    
                                                </div>
                                               
                                               </div> 
                                            </div>
                                            <div className='row mt-4'>
                                                <div className='col-lg-12'>
                                                <div className='mb-3' style={{display:'flex',alignItems:'center'}}>
                                                    <label className='font-weight-600 required' style={{marginRight:20,marginBottom:0}}>Legal Ownership Type</label>
                                                    <OverlayTrigger placement="right" overlay={bedstip}>
                                                        <i className='fa fa fa-question-circle'></i>
                                                    </OverlayTrigger>
                                                </div>
                                                
                                                <div className="form-group form-grp-filter">
                                                   
                                                    <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Owner"/>
                                                    <label class="form-check-label" for="inlineRadio1">Owner</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Power of Attorney"/>
                                                    <label class="form-check-label" for="inlineRadio2">Power of Attorney</label>
                                                    </div>
                                                </div>
                                                
                                                </div>
                                            </div>
                                            <div className='row mt-4'>
                                                <div className='col-lg-12'>
                                                <div className="form-group form-grp-filter">
                                                    <label for="exampleFormControlTextarea1" className="form-label font-weight-600 required">General Property Description</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                            <div className="col-lg-3">
                                            <label className='font-weight-600 required' style={{margin:20,marginBottom:30,marginLeft:0}}>Images</label>
                                            <span class="btn  fileinput-button">
                                            <p style={{textAlign:'center',color:'#BDC4C3'}}> + <br></br>Add Images</p>
                                        <input type="file" name="files[]" id="files" multiple accept="image/jpeg, image/png, image/gif,"/><br />
                                    </span>
                                            <output id="Filelist"></output>
                                            </div> 
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                                        Property Details
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card> 
                                <Card>
                                    <Accordion.Collapse eventKey="3" className="collapseparent">
                                        <Card.Body>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Kitchens</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>More</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Living Room</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>More</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Balcony</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>More</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Number of floors</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>More</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Dedicated parking</label>
                                                            <div class="radio-group">
                                                                <input data-type='pill-selector' type="radio" checked id="yes" name="Dedicated_parking" />
                                                                <div>
                                                                    <label for="yes">Yes</label>
                                                                </div>
                                                                <input  data-type='pill-selector' type="radio" id="no" name="Dedicated_parking" />
                                                                <div style={{marginLeft:20}}>
                                                                    <label for="no">No</label>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Elevator</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>More</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div> 
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                            <label>Possession taken</label>
                                                            <div class="radio-group">
                                                                <input data-type='pill-selector' checked type="radio" id="Possession_taken_yes" name="Possession_taken" />
                                                                <div>
                                                                    <label for="Possession_taken_yes">Yes</label>
                                                                </div>
                                                                <input  data-type='pill-selector' type="radio" id="Possession_taken_no" name="Possession_taken" />
                                                                <div style={{marginLeft:20}}>
                                                                    <label for="Possession_taken_no">No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                   
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Property Age</label>
                                                        <select className="form-control" name="cycle">
                                                            <option>More</option>
                                                            <option value="Daily">Daily</option>
                                                            <option value="Monthly">Monthly</option>
                                                            <option value="Yearly">Yearly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div> 
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="3">
                                        Other Features
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card> 
                                <Card>
                                    <Accordion.Collapse eventKey="4" className="collapseparent">
                                        <Card.Body>
                                        <div className="row acr-listing-feature-row">
      
                                            {features.map((item, i) => (
                                                <div key={i} className="col">
                                                    <label className="acr-listing-feature image-checkbox">
                                                        <input type="checkbox" name={"feature" + item.id + ""} />
                                                        <i className="acr-feature-check fas fa-check" />
                                                        
                                                        <img className='g-img' src={process.env.PUBLIC_URL + item.icon}  alt="" />
                                                        {/* <i className={"acr-listing-feature-icon flaticon-" + item.icon + ""} /> */}
                                                        <p>{item.title} </p>
                                                    </label>
                                                </div>
                                            ))}
                                             
                                        </div>
                                        <div className="row acr-listing-feature-row">
      
                                            {features1.map((item, i) => (
                                                <div key={i} className="col">
                                                    <label className="acr-listing-feature image-checkbox">
                                                        <input type="checkbox" name={"feature" + item.id + ""} />
                                                        <i className="acr-feature-check fas fa-check" />
                                                        
                                                        <img className='g-img' src={process.env.PUBLIC_URL + item.icon}  alt="" />
                                                        {/* <i className={"acr-listing-feature-icon flaticon-" + item.icon + ""} /> */}
                                                        <p>{item.title} </p>
                                                    </label>
                                                </div>
                                            ))}
                                             
                                        </div>
                                        <div className="row acr-listing-feature-row">
      
                                            {features2.map((item, i) => (
                                                <div key={i} className="col">
                                                    {item.icon != '' && (<label className="acr-listing-feature image-checkbox">
                                                        <input type="checkbox" name={"feature" + item.id + ""} />
                                                        <i className="acr-feature-check fas fa-check" />
                                                        
                                                        <img className='g-img' src={process.env.PUBLIC_URL + item.icon}  alt="" />
                                                        {/* <i className={"acr-listing-feature-icon flaticon-" + item.icon + ""} /> */}
                                                        <p>{item.title} </p>
                                                    </label>)}
                                                </div>
                                            ))}
                                            
                                        </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="4">
                                        Amenities & Nearby Facilities
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                            </Accordion>
                            <div  className='btn-sell-rent-act mt-5' style={{margin:'auto',width:'10rem'}}>Submit</div>
                </div>
            </div>
                {/* <div className="row">
                
                    <Tab.Container defaultActiveKey="tab1">
                       
                        <div className="col-md-4">
                            <Nav variant="tabs" className="nav nav-tabs tab-cards">
                                <Nav.Item>
                                    <Nav.Link eventKey="tab1"><span>01</span> Basic Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab2"><span>02</span> Gallery</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab3"><span>03</span> Location</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab4"><span>04</span> Features</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab5"><span>05</span> Details</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    
                        <div className="col-md-8">
                            <form>
                                <Tab.Content className="m-0">
                                    <Tab.Pane eventKey="tab1">
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label>Property Description</label>
                                                <textarea name="content" rows={4} className="form-control" placeholder="Property Description" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Property Name</label>
                                                <input type="text" className="form-control" placeholder="Property Name" name="name" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Property Status</label>
                                                <select className="form-control" name="status">
                                                    <option value="For Rent">For Rent</option>
                                                    <option value="Featured">Featured</option>
                                                    <option value="For Sale">For Sale</option>
                                                    <option value="Leased">Leased</option>
                                                    <option value="New Addition">New Addition</option>
                                                    <option value="Sold">Sold</option>
                                                    <option value="Rental">Rental</option>
                                                    <option value="Reduced">Reduced</option>
                                                    <option value="Special Offer">Special Offer</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label>Property Type</label>
                                                <select className="form-control" name="type">
                                                    <option value="House">House</option>
                                                    <option value="Apartment">Apartment</option>
                                                    <option value="Condo">Condo</option>
                                                    <option value="Townhome">Townhome</option>
                                                    <option value="Villa">Villa</option>
                                                    <option value="Duplex">Duplex</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Property Price</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">$</span>
                                                    </div>
                                                    <input type="text" className="form-control" name="price" placeholder="Property Price" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label>Rental Period</label>
                                                <select className="form-control" name="period">
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Yearly">Yearly</option>
                                                </select> 
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Property Space (Sqft)</label>
                                                <input type="text" className="form-control" placeholder="Property Space (Sqft)" name="space" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <label>Property Video</label>
                                                <input type="text" className="form-control" placeholder="Property Video URL" name="video" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2">
                                        <div className="form-group">
                                            <label>Property Thumbnail</label>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="propertyThumbnail" />
                                                <label className="custom-file-label" htmlFor="propertyThumbnail">Choose file</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Property Gallery</label>
                                            <div {...getRootProps({ className: 'dropzone' })}>
                                                <input {...getInputProps()} />
                                                <div className="dropzone-msg dz-message needsclick">
                                                    <i className="fas fa-cloud-upload-alt" />
                                                    <h5 className="dropzone-msg-title">Drop files here or click to upload.</h5>
                                                    <span className="dropzone-msg-desc">This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.</span>
                                                </div>
                                            </div>
                                            <aside className="thumbsContainer">
                                                {thumbs}
                                            </aside>
                                            <span className="acr-form-notice">*You can upload up to 5 images for your listing</span>
                                            <span className="acr-form-notice">*Listing images should be atleast 620x480 in dimensions</span>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab3">
                                        <Locationtab/> 
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab4">
                                        <div className="row">
                                            {features.map((item, i) => (
                                                <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                                                    <label className="acr-listing-feature">
                                                        <input type="checkbox" name={"feature" + item.id + ""} />
                                                        <i style={{fontSize:8}} className="acr-feature-check fas fa-check" />
                                                        <i className={"acr-listing-feature-icon flaticon-" + item.icon + ""} />
                                                        {item.title} 
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab5">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <label>Property ID</label>
                                                <input type="text" className="form-control" placeholder="Property ID" name="id" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Beds</label>
                                                <input type="text" className="form-control" placeholder="Number of Beds" name="beds" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Bathrooms</label>
                                                <input type="text" className="form-control" placeholder="Number of Bathrooms" name="baths" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Condition</label>
                                                <input type="text" className="form-control" placeholder="Property Condition" name="condition" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Year Built</label>
                                                <input type="text" className="form-control" placeholder="Property Year Built" name="built" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label>Neighborhood</label>
                                                <input type="text" className="form-control" placeholder="Property Neighborhood" name="neighborhood" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="termsAndConditions" />
                                                <label className="custom-control-label" htmlFor="termsAndConditions">I Agree to the terms &amp; Conditions of Property Submission</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn-custom" name="submit">Submit Listing</button>
                                    </Tab.Pane>
                                </Tab.Content>
                            </form>
                        </div>
                    </Tab.Container>
                    
                </div> */}
            </div>
        </div>
    );
}

export default Content;