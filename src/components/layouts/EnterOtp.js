import React, { Component } from "react";
import {Modal,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import BuyerSellerModal from "./BuyerSellerModal";

const EnterOtp = ({onNext,ongoBack}) => {
    const [buyerModal, setBuyerModal] = React.useState(false)
    const [otp, setOtp] = React.useState('')
    const handleChange = (e)=>{
     setOtp(e.target.value)

    }
  return (
    <>
    <img onClick={ongoBack} style={{position:'absolute',top:0,left:23}} src={process.env.PUBLIC_URL +"/assets/img/naijagah/icon.svg"}></img>
     <p className="text-center">Please enter OTP sent to your<br></br>registered mobile number</p>
                
             
                  
        <input onChange={handleChange} class="form-control input-login" style={{borderRadius:5,height:40}} type="text" name="emailid"  />
        <div className="forgetpassrow"> 
        <div class="form-group form-check">
          
        </div>
        <Link to={"/"} >Resend</Link>
        </div>
  
        <div class="text-center mt-5">
        <input type="button" onClick={()=>{
          if(otp != ""){
            onNext()
          }else{
            alert('please add otp')
          }
            
        }} className="button btn-sell-rent-act width-11"  value="Verify"/>
      </div>
              
    {/* <Modal size="lg" show={showFiled} onHide={handleCloseFiled}>
    <Modal.Header closeButton> 
     
    </Modal.Header> 
    <Modal.Body>
    <div className='row'>
            <div className='col-lg-6 align-items-center d-flex' style={{flexDirection:'column'}}>
            <img src={process.env.PUBLIC_URL +"/assets/img/logo.svg"}></img>
            <img className='mt-5 mb-5' src={process.env.PUBLIC_URL +"/assets/img/naijagah/loginpopup.svg"}></img>
            <p className='text-center' style={{color:'#444444',fontSize:'18px',fontWeight:'600'}}>Connecting genuine<br></br>buyers & sellers</p>
            </div>
            <div className='col-lg-6 align-items-center d-flex justify-content-center' style={{flexDirection:'column'}}>
               
               
                </div>
            
            </div>
    </Modal.Body>
    </Modal>
    <BuyerSellerModal field={field} showFiled={buyerModal} handleCloseFiled={()=>{setBuyerModal(false)}}></BuyerSellerModal> */}
    </>
  )
}

export default EnterOtp