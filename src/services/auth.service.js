import axios from "axios";
import qs from "qs";
const API_URL = "https://art-cause.com:3001/api/";

const register = (u_email, u_password, u_phone,u_name,u_country,u_otp,u_reg_type) => {
  return axios.post(API_URL + "sign-up",  qs.stringify({u_email:u_email,
    u_password:u_password,
    u_phone:u_phone, 
    u_name:u_name,
    u_country:u_country,
    u_otp:u_otp,
    u_reg_type:u_reg_type
  })) .then((response) => {
    
      localStorage.setItem("user", JSON.stringify(response.data.data));
    
    return response.data;
  });
};
const login = (username, password) => {
  return axios
    .post(API_URL + "login", qs.stringify({u_email:username,u_password:password}))
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};