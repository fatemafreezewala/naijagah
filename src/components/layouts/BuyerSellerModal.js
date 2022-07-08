import React, { Component,useState } from "react";
import {Modal,Button} from 'react-bootstrap'
import { Link,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { register } from "../../actions/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyerSellerModal = ({showFiled,handleCloseFiled,ongoBack}) => {
    const [type, setType] = React.useState('buyer') 
    const dispatch = useDispatch(); 
    const { message } = useSelector(state => state.message); 
    const history = useHistory()
    const [loading, setLoading] = useState(false);

    const notify = (msg) => toast.info(msg,{});
    const submituserRegistrationForm =(e) =>{
      let field = localStorage.getItem('fields')
      field = JSON.parse(field)
        e.preventDefault();
     
            dispatch(register(field["emailid"], field["password"],field["mobileno"],field["username"],'+91','1234',type))
            .then(() => {
              handleCloseFiled()
              notify('Welcome to Naijagah')
                history.push('/')
            })
            .catch((err) => {
              if(message){ 
                notify(message)
              }
              setLoading(false);
            });
  
      }
  return (
   <>
     <img onClick={ongoBack} style={{position:'absolute',top:0,left:23}} src={process.env.PUBLIC_URL +"/assets/img/naijagah/icon.svg"}></img>
    <p className="text-center">You are ?</p>
    <div className="d-flex mt-4">
    <div>
        <div onClick={()=>{setType('buyer')}} className="acr-listing-feature" style={{padding:15,margin:10,borderColor:type == 'buyer' ? '#20B69E' : '#E6F1EF',cursor:'pointer'}} >            
            <img className='g-img' src={process.env.PUBLIC_URL + '/assets/img/naijagah/buyer.svg'}  alt="" />
        </div>
        <p className="text-center">Seller / Buyer</p>
        
    </div>
   <div style={{marginLeft:10}}>
    <div onClick={()=>{setType('seller')}} className="acr-listing-feature" style={{padding:16,margin:10,borderColor:type == 'seller' ? '#20B69E' : '#E6F1EF',cursor:'pointer'}}>            
            <img className='g-img' src={process.env.PUBLIC_URL + '/assets/img/naijagah/seller.svg'}  alt="" />
        </div>
        <p className="text-center">Agent</p>
   </div>
    
    </div>
    <div class="text-center mt-5">
        <input onClick={(e)=>{submituserRegistrationForm(e)}} type="button" className="button btn-sell-rent-act width-11"  value="Verify"/>
    </div>
   </>
  )
}

export default BuyerSellerModal

