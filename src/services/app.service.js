import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://art-cause.com:3001/";
const postContactInquiry = (data) => {
  return axios.post(API_URL + "contact",data)
};
const postProperty = (data) => {
  return axios.post(API_URL + "property/addListing",data)
};
export default {
  postContactInquiry ,
  postProperty
};  