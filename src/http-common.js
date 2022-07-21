// Initialize Axios for Vue HTTP Client for uploading images

import axios from "axios";
export default axios.create({
  baseURL: process.env.BASE_URL, // Base URL depends on the REST API's URL that your server configures 
  headers: {
    "Content-type": "application/json"
  }
});