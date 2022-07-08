 import React from 'react'
 import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
 import { Link } from 'react-router-dom';

 const ListingCard = ({i,item}) => {
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
    
   return (
    <div key={i} className="listing listing-list ">
    <div className='row'>
        <div className='col-lg-4'>
        <div className="listing-thumbnail">
            <Link to="/listing-details-v1"><img src={process.env.PUBLIC_URL + "/" + item.listimg} alt="listing" /></Link>
          
        </div>
        
        </div>
        <div className='col-lg-8'>
        <div className="listing-body">
        
            <div className="listing-gallery-wrapper" style={{justifyContent:'space-between'}}>
                <h6 className="listing-title font-weight-700"> 
                    {item.title}
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
                
                <p className="listing-text">Precinct 11-B<br></br>Bahria Town Karachi, Karachi</p>
           
           
            
            </div>
            <div className='divide'></div>
            <div className="listing-gallery-wrapper" style={{justifyContent:'space-between',marginTop:15}}>
            <p className="listing-price"><span style={{color:'#000',fontSize:18,fontWeight:'bold'}}>PKR</span> 3 Crore 50 Lacs</p>
            <div className="acr-listing-icons">
                <OverlayTrigger overlay={bedstip}>
                    <div className="acr-listing-icon border-right">
                        <span className="acr-listing-icon-value">{item.beds}</span>
                        <i style={{color:'#20B69E',fontSize:30}} className="flaticon-bedroom" />
                    
                    </div>
                </OverlayTrigger>
                <OverlayTrigger overlay={bathstip}>
                    <div className="acr-listing-icon">
                    <span className="acr-listing-icon-value">{item.bathrooms}</span>
                        <i style={{color:'#20B69E',fontSize:30}} className="flaticon-bathroom" />
                    
                    </div>
                </OverlayTrigger>
                
            </div>
            </div>
            <div className='divide'></div>
            <p className="listing-text" style={{marginBottom:0}}>Location : Park facing</p>
            
        </div> 
        </div>
    </div>
   
    <div className='row'>
        <div className='col-lg-12'>
        <div className="listing-gallery-wrapper" style={{justifyContent:'space-between',alignItems:'center',marginTop:0}}>
              
               <div className="listing-author">
                    <img src={process.env.PUBLIC_URL + "/" + item.authorimg} alt="author" />
                    <div className="listing-author-body">
                        <p> <Link to="#">{item.authorname}</Link> </p>
                        <span className="listing-date">{item.postdate}</span>
                    </div>
                    
                </div>
                <div className=''>
                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Call</Link>
                <Link to="/listing-details-v1" className="btn btn-primary btn-sm btn-call-chat">Chat</Link>
               </div>
                {/* <OverlayTrigger overlay={gallerytip}>
                    <Link to="#" className="listing-gallery"> <i className="fas fa-camera" /> </Link>
                </OverlayTrigger> */}
            </div>
        
        </div>
    </div>
   
</div>
   )
 }
 
 export default ListingCard