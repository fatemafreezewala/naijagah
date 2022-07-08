import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://art-cause.com:3001/api/";
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getAgentBorad = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getAgentBorad
};