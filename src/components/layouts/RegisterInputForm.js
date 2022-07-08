import React, { useState } from "react";
import countries from '../../assets/data/country'
import "../../assets/css/search.css"
import Search from './searchCountries'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterInputForm = ({ongoBack,onNext}) => {
  const [errors, seterror] = useState({}) 
  const [options, setoptions] = useState(countries);
  const [code, setCode] = React.useState('+91')
const [country, setCountry] = React.useState('IN')
const [fields, setfields] = useState({})
   const handleChange = (e)=>{
        let field = fields; 
        field[e.target.name] = e.target.value; 
        console.log(field)
        setfields(field);
        localStorage.setItem('fields',JSON.stringify(field))
      }
      const validateForm = ()=> { 

        let error = {};
        let formIsValid = true;
  
        if (!fields["username"]) {
          formIsValid = false;
          error["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            error["username"] = "Please enter alphabet characters only.";
          }
        }
  
        if (!fields["emailid"]) {
          formIsValid = false;
          error["emailid"] = "Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            error["emailid"] = "Please enter valid email ID.";
          }
        }
  
        if (!fields["mobileno"]) {
          formIsValid = false;
          error["mobileno"] = "Please enter your mobile no.";
        }
  
        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            error["mobileno"] = "Please enter valid mobile no.";
          }
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          error["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            error["password"] = "At least 8 characters Mix of letters and numbers ( a-z AtoZ 0-9 and special character)";
          }
        }
        seterror(error)

        return formIsValid;
  
  
      }
      const submituserRegistrationForm =(e) =>{
        e.preventDefault();
        console.log(validateForm())
        if (validateForm()) {
          onNext()
          // handleCloseFiled()
          // showOtp(true)
        }
  
      }
      return (<>
        <img onClick={ongoBack} style={{position:'absolute',top:0,left:23}} src={process.env.PUBLIC_URL +"/assets/img/naijagah/icon.svg"}></img>
       <div id="register" style={{width:'90%',marginTop:20}}>
                    <form method="post"  name="userRegistrationForm"  onSubmit={(e)=>{submituserRegistrationForm(e)}} >
                    
                  
                     <label class="form-label no-margin-bottom">Full Name</label>
                      <input class="form-control input-login select-search__value" type="text" name="username"  onChange={handleChange} />
                      <div className="errorMsg ">{errors.username}</div>
                      <label class="form-label no-margin-bottom">Email</label>
                      <input class="form-control input-login select-search__value" type="text" name="emailid"  onChange={handleChange} />
                      <div className="errorMsg ">{errors.emailid}</div>
                      <label class="form-label no-margin-bottom mt-2">Password</label>
                      <input class="form-control input-login select-search__value" type="password" name="password"  onChange={handleChange} />
                      <div className="errorMsg ">{errors.password}</div>
                     <Search fields={fields} setfields={setfields}  country={country} setCountry={setCountry} code={code} setCode={setCode} errors={errors} handleChangef={handleChange}></Search>

                      <div class="text-center mt-5">
                      <input type="submit" className="button btn-sell-rent-act width-11"  value="Signup"/>
                    </div>
                    
                    </form>
                    </div>
      
         
      </>) 
}
export default RegisterInputForm