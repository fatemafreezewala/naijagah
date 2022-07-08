import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../actions/auth";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginInputForm = ({handleCloseFiled,ongoBack}) => {
  const [fields, setfields] = useState({})
  const [errors, seterror] = useState({})
  const [loading, setLoading] = useState(false);
  const history = useHistory()
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message); 
  const notify = (msg) => toast.info(msg,{});
  const dispatch = useDispatch(); 
   const handleChange = (e)=>{
        let field = fields; 
        field[e.target.name] = e.target.value;
        setfields(field);
  
      }
        const submituserRegistrationForm =(e) =>{
        e.preventDefault();
        if (validateForm()) {
            dispatch(login(fields["emailid"], fields["password"]))
            .then(() => {
              notify('Login Success') 
              handleCloseFiled()
            
                history.push('/')
            })
            .catch((err) => {
              if(message){
                notify(message)
              }
              setLoading(false);
            });
        }
  
      }
  
      const validateForm = ()=> {
  
        let field = fields;
        let error = {};
        let formIsValid = true;
        if (!fields["emailid"]) {
          formIsValid = false;
          error["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            error["emailid"] = "*Please enter valid email ID.";
          }
        }
        if (!fields["password"]) {
          formIsValid = false;
          error["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            error["password"] = "*Password must contain A-Z a-z 1 to 10 and atleast one special character.";
          }
        }
  
        seterror(error)
        return formIsValid;
  
  
      }
  return (
   <>
        <img onClick={ongoBack} style={{position:'absolute',top:0,left:23}} src={process.env.PUBLIC_URL +"/assets/img/naijagah/icon.svg"}></img>
    <div id="register" style={{width:'90%',marginTop:20}}>
    
    <form method="post"  name="userRegistrationForm"  onSubmit={submituserRegistrationForm} >
    
  
      <label class="form-label no-margin-bottom">Email</label>
      <input class="form-control input-login" type="text" name="emailid"  onChange={handleChange} />
      <div className="errorMsg ">{errors.emailid}</div>
      <label class="form-label no-margin-bottom mt-2">Password</label>
      <input class="form-control input-login" type="password" name="password"  onChange={handleChange} />
      <div className="errorMsg ">{errors.password}</div>
      <div className="forgetpassrow">
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <Link to={"/"} >Forgot Password?</Link>
      </div>
      <div class="text-center mt-2">
      <input type="submit" className="button btn-sell-rent-act width-11"  value="Login"/>
    </div>
    
    </form>
    </div>
   </>
    
       
  )
}

export default LoginInputForm
