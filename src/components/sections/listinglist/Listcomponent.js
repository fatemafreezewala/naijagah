import React from 'react'
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
// import {collection,setDoc,doc,addDoc, Timestamp,onSnapshot,getDoc,query,getDocs,where} from 'firebase/firestore'
// import {db} from '../../../firebase'
import { getDatabase, ref, set } from "firebase/database";

const Listcomponent = ({item}) => {
    const [isliked, setisLiked] = React.useState('no')
    React.useEffect(() => {
        getDocumentsByid(item.list_owner+'-'+item.list_id)
    }, [item.list_id])
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
    // const checkif = async(id)=> {
    //     const docRef = doc(db, "savedProperty", id);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         console.log('exist')
    //     // console.log("Document data:", docSnap.data());
    //     setisLiked('exist')
    //     } else {
    //     // doc.data() will be undefined in this case 
    //     setisLiked('no')
    //     }
    // }
    const getDocumentsByid =  (id)=>{
        const db = getDatabase();
        set(ref(db, 'users/' + '12'), {
          username: "",
          email: "",
          profile_picture : ""
        });
        // console.log()
        // if(checkif(id) == true){
        //     setisLiked('exist')
        // }else{
        //     setisLiked('no')
        // }
        
        // console.log(typeof id)
        // const docRef = doc(db, "savedProperty", id);
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     console.log('exist')
        // // console.log("Document data:", docSnap.data());
        //       return (<i style={{color:'red'}} className="fas fa-heart" />)
        // } else {
        // // doc.data() will be undefined in this case
        //     return (<i style={{color:'red'}} className="fas fa-heart" />)
        // }
        // const citiesRef = collection(db, "savedProperty");
        //     await setDoc(doc(citiesRef, "1-10"), {
        //         name: "San Francisco", state: "CA", country: "USA",
        //         capital: false, population: 860000,
        //         regions: ["west_coast", "norcal"] });
        }
        const saveOrUnsave = async(id) =>{
            // const citiesRef = collection(db, "savedProperty");
            // await setDoc(doc(citiesRef, id), {
            //     name: "San Francisco" });
        }
  return (
    <Link to ={"/listing-details/"+ item.list_id +'/'+item.meta_size+'-BHK-'+item.list_property_subtype+'-FOR-'+item.list_sell_or_rent }><div key={item.list_id} className="listing listing-list ">
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
                        <Link to="#" className="favorite">
                          
                            { isliked == 'exist' ? (<i style={{color:'red'}} className="fas fa-heart"></i>) : (<i onClick={()=>{saveOrUnsave(item.list_owner+'-'+item.list_id)}} className="fas fa-heart"></i>)}
                        </Link>
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
       
    </div></Link>
  )
}

export default Listcomponent

