import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

// axios.defaults.baseURL="http://localhost:3000/";
axios.defaults.baseURL="https://egy-pro-soft-backend.herokuapp.com/";




// axios.interceptors.request.use(function(config){

//         const token = localStorage.getItem('token') || null
//         if(token){
//             config.headers.Authorization = token
//         }
//         return config;
//         },function(error){

//         return Promise.reject(error)
// })


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
