// FILE: /src/services/api.js

import axios from 'axios';

// src/services/api.js
const API = axios.create({
  baseURL: 'https://startuphatch.onrender.com/api', // ensure /api prefix if backend routes use it
  withCredentials: true, // ✅ important for cookies
});


API.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    
    // If a token exists, add it to the 'Authorization' header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Return the modified request configuration
    return config;
  },
  (error) => {
    // Handle any errors during the request setup
    return Promise.reject(error);
  }
);

export default API;
