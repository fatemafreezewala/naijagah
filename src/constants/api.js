import axios  from "axios";
const api = axios.create({
    baseURL: 'https://art-cause.com:3001',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
  export default api