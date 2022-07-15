 
import React,{useState} from 'react' 
import {Modal,Button} from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../assets/js/formvalidation'
import LoginInput from '../layouts/LoginInputForm'
import RegisterInput from '../layouts/RegisterInputForm'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 
import { Wizard, useWizard } from 'react-use-wizard';
import LoginInputForm from '../layouts/LoginInputForm';
import RegisterInputForm from '../layouts/RegisterInputForm';
import EnterOtp from './EnterOtp';
import BuyerSellerModal from './BuyerSellerModal';

export default function LoginModal({show,handleClose,handleShow}) {
   
    const responseGoogle = (response) => {
      console.log(response);
    }
    const responseFacebook = (response) => {
      console.log(response);
    }
    const Step1 = () => {
      const { handleStep, previousStep, nextStep,goToStep } = useWizard();
      // Attach an optional handler
      handleStep(() => { 
        alert('Going to step 2');
      });
    
      return (
        <>
          <p className='mb-4 text-light-grey'>Connect with</p>
                    <div className='mb-4'>
                    <FacebookLogin 
                      appId="1088597931155576"
                      autoLoad={false}
                      render={(renderProps)=>(<img style={{margin:10}} onClick={renderProps.onClick} src={process.env.PUBLIC_URL +"/assets/img/naijagah/google.svg"}></img>)}
                      fields="name,email,picture"
                     
                      callback={()=>{responseFacebook()}} />
                    
                    <GoogleLogin
                      clientId="898486057509-78kbhhluhi7v7m3c10faai1h0pmrepet.apps.googleusercontent.com"
                      render={renderProps => (
                        <img onClick={renderProps.onClick} disabled={renderProps.disabled} style={{margin:10}} src={process.env.PUBLIC_URL +"/assets/img/naijagah/fb.svg"}></img>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                    
                   
                   
                    </div>
                    <div className='mt-4 mb-5' style={{position:'relative',width: '68%'}}>
                    <p className="or-text text-center text-light-grey">OR</p>
                    </div>
                    <div onClick={()=>{
                        goToStep(1)
                    }} className='btn-sell-rent-act width-11'>Login</div>
                    <div onClick={()=>{
                        goToStep(2)
                    }} className='btn-sell-rent width-11' style={{marginTop:20}}>Create new account</div>
        </>
      );
    };
    const Step2 = () => {
      const { handleStep, previousStep, nextStep,goToStep } = useWizard();
      return <LoginInputForm handleCloseFiled={handleClose} ongoBack={()=>{goToStep(0)}}></LoginInputForm>
    }
    const Step3 = () => {
      const { handleStep, previousStep, nextStep,goToStep } = useWizard();
      return <RegisterInputForm  onNext={()=>{goToStep(3)}} ongoBack={()=>{goToStep(0)}}></RegisterInputForm>
    }
    const Step4 = () => {
      const { handleStep, previousStep, nextStep,goToStep } = useWizard();
      return <EnterOtp   onNext={()=>{goToStep(4)}} ongoBack={()=>{goToStep(2)}}></EnterOtp>
    }
    const Step5 = () => {
      
      const { handleStep, previousStep, nextStep,goToStep } = useWizard();
      return <BuyerSellerModal handleCloseFiled={handleClose} ongoBack={()=>{goToStep(3)}}></BuyerSellerModal>
    }
  return (
    <>
   

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header > 
       
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
            <div className='col-lg-6 align-items-center d-flex' style={{flexDirection:'column'}}>
                <img src={process.env.PUBLIC_URL +"/assets/img/logo.svg"}></img>
                <img className='mt-5 mb-5' src={process.env.PUBLIC_URL +"/assets/img/naijagah/loginpopup.svg"}></img>
                <p className='text-center'>Connecting genuine<br></br>buyers & sellers</p>
                </div>
            
                
                <div className='col-lg-6 align-items-center d-flex' style={{flexDirection:'column'}}>
                
                <Wizard>
                    <Step1 />
                    
                    <Step2 ></Step2>
                    <Step3></Step3>
                    <Step4></Step4>
                    <Step5></Step5>
                  </Wizard>
                   
                </div>
            </div>
        </Modal.Body>
       
      </Modal>
      {/* <LoginInput showFiled={showFiled} handleCloseFiled={handleCloseFiled}></LoginInput>
      <RegisterInput showFiled={showRegister} handleCloseFiled={handleCloseRegister}></RegisterInput> */}
      {/* <Modal size="lg" show={showFiled} onHide={handleCloseFiled}>
        <Modal.Header closeButton> 
         
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-lg-6 align-items-center d-flex' style={{flexDirection:'column'}}>
                <img src={process.env.PUBLIC_URL +"/assets/img/logo.svg"}></img>
                <img className='mt-5 mb-5' src={process.env.PUBLIC_URL +"/assets/img/naijagah/loginpopup.svg"}></img>
                <p className='text-center'>Connecting genuine<br></br>buyers & sellers</p>
                </div>
                <div className='col-lg-6 align-items-center d-flex' style={{flexDirection:'column'}}>
                <form className="needs-validation" novalidate>
  
    <div className="col-md-12 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    <div className="col-md-12 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Last name"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  

 
  <button classname="btn btn-primary" type="submit">Submit form</button>
</form>

            </div>
            </div>
        </Modal.Body>
       
      </Modal> */}
    </>
  )
}
