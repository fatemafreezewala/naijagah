import React, { useEffect, useState,useRef,useMemo } from 'react';

import { useDropzone } from 'react-dropzone';
import Locationtab from './Locationtab';
import Progressbar from '../../layouts/Progressbar';
import { OverlayTrigger, Tooltip,Accordion, Card, NavLink } from 'react-bootstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import mapdata from '../../../data/mapdata.json';
import { Link,useHistory } from 'react-router-dom';
import L from 'leaflet';
import '../../../assets/js/custom'
// import '../../../assets/js/fileupload'
import PropertyType from './PropertyType';
import BuyorSell from './BuyorSell';
import 'leaflet/dist/leaflet.css';
import {Modal,Button} from 'react-bootstrap'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop from 'react-image-crop'
import AppService from '../../../services/app.service';
import { toast ,ToastContainer} from 'react-toastify';
import { useSelector } from "react-redux";
import * as $ from "jquery"
import Overlooking from './Overlooking';
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
    { id: 5, icon: '', title: '' },
    { id: 6, icon: '', title: '' },
];


const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 5],
});
const PropertUnit = ['Square yard','Square Feet','Square Meters','Marla','Kanal'];
function Content(props) {
    const { user: currentUser } = useSelector((state) => state.auth);

    const [files, setFiles] = useState([]);
    const bedstip = (
        <Tooltip>
            The Legal ownership will remain these irrespective of the person who has placed add.
        </Tooltip>
    );
    const [crop, setCrop] = useState({
        unit: '%',
        x: 25,
        y: 25,
        width: 50, 
        height: 50
      })
      const [srcofImageCrop, setSrcofImageCrop] = useState("")
      const history = useHistory()
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]); 
    const [fields, setfields] = useState({})
    const [images, setImages] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([])
    const [position, setPosition] = useState({lat:30.3753,lng: 69.3451})
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
          dragend() {
            const marker = markerRef.current
            if (marker != null) {
                console.log(marker.getLatLng())
              setPosition(marker.getLatLng())
            }
          },
        }),
        [],
      )
   //Addlitsing Logic API
   const onSubmitContact = (e) =>{
    e.preventDefault()
    let yourArray = []
    $("input:checkbox[class=amenities]:checked").each(function(){
        yourArray.push($(this).val());
    });
    console.log(fields)
    const formData = new FormData()
    for (let i = 0; i < selectedFiles.length; i++) {
        formData.append(`photos`, selectedFiles[i])
     }
    
        formData.append('list_owner', currentUser.u_id)
        formData.append('list_property_type', 'Home')
        formData.append('list_property_subtype', 'General')
        formData.append('list_sell_or_rent', 'Sell')
        formData.append('list_property_number', fields["list_property_number"])
        formData.append('list_building', fields["list_building"])
        formData.append('list_street', fields["list_street"])
        formData.append('list_area', fields["list_area"])
        formData.append('list_society', fields["list_society"])
        formData.append('list_city', fields["list_city"])
       
        formData.append('list_if_display_street', fields["list_if_display_street"])
        formData.append('list_isactive', 1)
        formData.append('list_listed_by_type',currentUser.u_role)
        formData.append('meta_title', fields["meta_title"])
        formData.append('meta_size', fields["meta_size"])
        formData.append('meta_price', fields["meta_price"])
        formData.append('meta_no_bedrooms', fields["meta_no_bedrooms"])
        formData.append('meta_no_bathrooms', fields["meta_no_bathrooms"])
        formData.append('meta_overlooking', fields["meta_overlooking"])

        formData.append('meta_ownership_type', fields["meta_ownership_type"])
        formData.append('meta_description', fields["meta_description"])
        formData.append('meta_kitchens', fields["meta_kitchens"])
        formData.append('meta_living', fields["meta_living"])
        formData.append('meta_balcony', fields["meta_balcony"])
        formData.append('meta_no_of_floors', fields["meta_no_of_floors"])
        formData.append('meta_if_parking', fields["meta_if_parking"])
        formData.append('meta_elevator', fields["meta_elevator"])
        formData.append('meta_possesion', fields["meta_possesion"])
        formData.append('meta_property_age', fields["meta_property_age"])
        formData.append('meta_lat', position.lat)
        formData.append('meta_lon',position.lng)
        formData.append('list_amenities_values', yourArray.toString())
        let response = AppService.postProperty(formData).then((response) => {
            toast.success('Your property is listed with naijagah.')
            setTimeout(function () {
                history.push("/")
            }, 2500);
            
          });
        
    // }else{
       
    //     toast.error("All fields are required")
    // }
    
}



   //AddListing End
   
   
   const handleChange = (e)=>{
    let field = fields;
    field[e.target.name] = e.target.value;
    setfields(field);

  }
  const handleChangeCheck = (e)=> {
    let isChecked = e.target.checked;
    console.log(isChecked)
    // do whatever you want with isChecked value
  }
   const handleMapOnclick = (e)=>{
    console.log(e)
   }
   const handleRadio = (tiitl,type)=>{
    let field = fields;
    field[type] = tiitl;
    setfields(field);
   
   }
   const selectFiles = (event)=> {
  

    setSelectedFiles(event.target.files)
  }
    const [locationmodal, setLocationModal] = useState(false)
    const [croppingmodal, setCroppingModal] = useState(false)
  const [croppedImgUrl, setCroppedImgUrl] = useState('')
  const cropperRef = useRef<HTMLImageElement>(null);
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    console.log(cropper.getCroppedCanvas().toDataURL());
  };
    return (
        <div className="section" style={{paddingTop:120}}>
             <ToastContainer></ToastContainer>
        <div className="container">
        <Progressbar bgcolor="#20B69E" progress='30'  height={15} />
        <Modal size="lg" show={locationmodal} onHide={()=>{setLocationModal(false)}}>
        <Modal.Header closeButton> 
        
        </Modal.Header>
        <Modal.Body>
        <div className="banner-map">
        <MapContainer
                                    className="markercluster-map map"
                                    center={[30.3753, 69.3451]} 
                                    zoom={7}
                                  
                                    onclick={handleMapOnclick}
                                    id='map-container'
                                  
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                  
                                        <Marker ref={markerRef} eventHandlers={eventHandlers}  draggable position={position} icon={customMarker}>
                                            
                                        </Marker>
                                    
                                </MapContainer>
        </div>
        
        </Modal.Body>
        </Modal>
        <Modal size="lg" show={croppingmodal} onHide={()=>{setCroppingModal(false)}}>
        <Modal.Header closeButton> 
        
        </Modal.Header>
        <Modal.Body>
        <Cropper
      src={croppedImgUrl}
      style={{ height: 400, width: "100%" }}
      // Cropper.js options
      initialAspectRatio={16 / 9}
      guides={false}
      crop={onCrop}
      ref={cropperRef}
    />
       
        </Modal.Body>
        </Modal>
        <Modal size="lg" show={false}>
        <Modal.Header closeButton> 
        
        </Modal.Header>
        <Modal.Body>
        <ReactCrop crop={crop} onChange={c => setCrop(c)}>
            <img src={srcofImageCrop}></img>
        </ReactCrop> 
        </Modal.Body>
        </Modal>
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
                                            <PropertyType fields={fields} setfields={setfields}></PropertyType>
                                            </div> 
                                            <h5 className='font-weight-600 required mt-5 mb-3' style={{margin:0}}>Your property location</h5>
                                           <div className='row '>
                                          
                                                <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Property Number</label>
                                                        <input type="text" name="list_property_number" onChange={handleChange} className="form-control" placeholder="Flat - 412"  />
                                                    </div>
                                               </div>
                                               <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Building</label>
                                                        <input type="text" className="form-control" onChange={handleChange} name="list_building" placeholder="Flat or House Number"  />
                                                    </div>
                                               </div>
                                               <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Street</label>
                                                        <input type="text" name="list_street" className="form-control" onChange={handleChange} placeholder="Street name"  />
                                                    </div>
                                               </div>
                                           </div>
                                           <div className='row'>
                                                <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Area</label>
                                                        <input type="text" name="list_area" className="form-control" onChange={handleChange} placeholder="Sector/Precinct/Phase"  />
                                                    </div>
                                               </div>
                                               <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Society</label>
                                                        <input type="text" name="list_society" className="form-control" onChange={handleChange} placeholder="Society ( e.g DHA Karachi )"  />
                                                    </div>
                                               </div>
                                               <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>City</label>
                                                        <input type="text" name="list_city" className="form-control" onChange={handleChange} placeholder="City name ( e.g Karachi )"  />
                                                    </div>
                                               </div>
                                           </div>
                                           <div class="form-check mb-4 mt-4">
                                                <input name="list_if_display_street" class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
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
                                        <div className='col-lg-4'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Location of Property</label>
                                                        <input  onClick={()=>{setLocationModal(true)}} type="text" className="form-control"  name="video" />
                                                    </div>
                                               </div>
                                           
                                        {/* <div className="banner-map">
                                <MapContainer
                                    className="markercluster-map map"
                                    center={[38.907, -77.04]} 
                                    zoom={12}
                                  
                                    ref={mapRef}
                                    id='map-container'
                                  
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
                            </div> */}
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
                                                    <input onChange={handleChange} type="text" className="form-control" placeholder="" name="meta_title" />
                                                </div>
                                               </div>
                                               <div className='col-lg-2'>
                                                    <div className="form-group">
                                                        <label className='font-weight-600 required'>Size</label>
                                                        <input onChange={handleChange} type="text" className="form-control" placeholder="Numbers only" name="meta_size" />
                                                    </div>
                                               </div>
                                               <div className='col-lg-2'>
                                                    <div className="form-group form-grp-filter">
                                                    <label className='font-weight-600'>Unit</label>
                                                        <select name="meta_unit" onChange={handleChange}  className="form-control" >
                                                        <option value=""></option>
                                                            {PropertUnit.map(data=>(<option value={data}>{data}</option>))}
                                                            
                                                            
                                                        </select>
                                                    </div>
                                               </div>
                                           </div>
                                           <div className='row'>
                                               <div className='col-lg-8'>
                                                <div className="form-group">
                                                    <label className='font-weight-600 required'>Price (PKR)</label>
                                                    <input onChange={handleChange} type="number" className="form-control" placeholder="" name="meta_price" />
                                                </div>
                                               </div>
                                               <div className='col-lg-2'>
                                               <div className="form-group form-grp-filter">
                                                    <label className='font-weight-600 required'>Bedrooms</label>
                                                        <select name="meta_no_bedrooms" onChange={handleChange} className="form-control">
                                                        <option value=""></option>
                                                        {[...Array(50)].map((e, i) => <option value={i + 1}>{i + 1}</option>)}
                                                        </select>
                                                    </div>
                                               </div>
                                               <div className='col-lg-2'>
                                                    <div className="form-group form-grp-filter">
                                                    <label className='font-weight-600 required'>Bathrooms</label>
                                                        <select name="meta_no_bathrooms" onChange={handleChange} className="form-control" >
                                                        <option value=""></option>
                                                        {[...Array(50)].map((e, i) => <option value={i + 1}>{i + 1}</option>)}
                                                            
                                                            
                                                        </select>
                                                    </div>
                                               </div>
                                           </div>
                                           <div className='row'>
                                               <div className='col-lg-6'>
                                               <label className='font-weight-600 required'>Overlooking</label>
                                               
                                                
                                                    <Overlooking handleRadio={handleRadio}></Overlooking>
                                                    
                                               
                                               
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
                                                    <input onChange={handleChange} class="form-check-input" type="radio" name="meta_ownership_type" id="inlineRadio1" value="Owner"/>
                                                    <label class="form-check-label" for="inlineRadio1">Owner</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                    <input onChange={handleChange} class="form-check-input" type="radio" name="meta_ownership_type" id="inlineRadio2" value="Power of Attorney"/>
                                                    <label class="form-check-label" for="inlineRadio2">Power of Attorney</label>
                                                    </div>
                                                </div>
                                                
                                                </div>
                                            </div>
                                            <div className='row mt-4'>
                                                <div className='col-lg-12'> 
                                                <div className="form-group form-grp-filter">
                                                    <label for="exampleFormControlTextarea1" className="form-label font-weight-600 required">General Property Description</label>
                                                    <textarea onChange={handleChange} name="meta_description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                            <div className="col-lg-3">
                                            <label className='font-weight-600 required' style={{margin:20,marginBottom:30,marginLeft:0}}>Images</label>
                                            <input  type="file" onChange={selectFiles} multiple  id="files"  accept="image/jpeg, image/png,"/><br />
                                            {/* <span class="btn  fileinput-button">
                                            <p style={{textAlign:'center',color:'#BDC4C3'}}> + <br></br>Add Images</p>
                                                <input  type="file" multiple  id="files"  accept="image/jpeg, image/png,"/><br />
                                            </span>
                                            <output id="Filelist"></output> */}
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
                                                <div className='col-lg-3 col-sm-12 col-md-3 mb-3'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Kitchens</label>
                                                        <select name="meta_kitchens" onChange={handleChange} className="form-control" >
                                                        <option value=""></option>
                                                        {[...Array(3)].map((e, i) => <option value={i + 1}>{i + 1}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Living Room</label>
                                                        <select name="meta_living" onChange={handleChange} className="form-control" >
                                                        <option value=""></option>
                                                        {[...Array(4)].map((e, i) => <option value={i + 1}>{i + 1}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Balcony</label>
                                                        <select  name="meta_balcony" onChange={handleChange} className="form-control" >
                                                        <option value=""></option>
                                                        {[...Array(10)].map((e, i) => <option value={i + 1}>{i + 1}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Number of floors</label>
                                                        <select name="meta_no_of_floors" onChange={handleChange} className="form-control">
                                                        <option value=""></option>
                                                        {[...Array(50)].map((e, i) => <option value={i + 1}>{i + 1}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Dedicated parking</label>
                                                            <div class="radio-group">
                                                                <input data-type='pill-selector' value="Yes" type="radio" checked id="yes" name="meta_if_parking" />
                                                                <div>
                                                                    <label for="yes">Yes</label>
                                                                </div>
                                                                <input  data-type='pill-selector' value="No" type="radio" id="no" name="meta_if_parking" />
                                                                <div style={{marginLeft:20}}>
                                                                    <label for="no">No</label>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Elevator</label>
                                                        <select name="meta_elevator" onChange={handleChange} className="form-control" >
                                                        <option value=""></option>
                                                        {[...Array(6)].map((e, i) => <option value={i + 1}>{i + 1} years</option>)}
                                                        </select>
                                                    </div> 
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                            <label className='required'>Possession taken</label>
                                                            <div class="radio-group">
                                                                <input onChange={handleChange} 
                                                                data-type='pill-selector' checked type="radio" id="Possession_taken_yes" value="Yes" name="meta_possesion" />
                                                                <div>
                                                                    <label for="Possession_taken_yes">Yes</label>
                                                                </div>
                                                                <input  onChange={handleChange} data-type='pill-selector' type="radio" id="Possession_taken_no" value="no" name="meta_possesion" />
                                                                <div style={{marginLeft:20}}>
                                                                    <label for="Possession_taken_no">No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                   
                                                </div>
                                                <div className='col'>
                                                    <div className="form-group form-grp-filter">
                                                        <label>Property Age</label>
                                                        <select name="meta_property_age" onChange={handleChange} className="form-control" >
                                                        <option value=""></option>
                                                        {[...Array(50)].map((e, i) => <option value={i + 1}>{i + 1} years</option>)}
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
                                                <div key={i} className="col-6 col-lg-2 col-md-2 mb-3">
                                                    {item.title != '' ? (<label className="acr-listing-feature image-checkbox">
                                                        <input value={item.id} type="checkbox" class="amenities" name={"feature" + item.id + ""} />
                                                        <i className="acr-feature-check fas fa-check" />
                                                        
                                                        <img className='g-img' src={process.env.PUBLIC_URL + item.icon}  alt="" />
                                                       
                                                        <p>{item.title} </p>
                                                    </label>) : (<div></div>)}
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
                            <button onClick={onSubmitContact}  className='btn-sell-rent-act mt-5' style={{margin:'auto',width:'10rem'}}>Submit</button>
                </div>
            </div>
               
            </div>
        </div>
    );
}

export default Content;