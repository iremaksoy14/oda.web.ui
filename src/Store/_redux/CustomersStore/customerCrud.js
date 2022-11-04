import axios from "axios";
import { useSelector } from "react-redux";
import {CustomerApiUrl} from "../../BaseUrl" 
 import { getUserByToken } from "../../../Store/_redux/AuthStore/authCrud";

//Api ile işlem yapmak için

export function addCustomers(data) {
  
  var config = {
    method: 'post',
    url: 'http://20.234.16.80:61171/api/v1/User/Add',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  return  axios(config)   
}

export function updateCustomers(data) {
  var config = {
    method: 'put',
    url: "",
    headers: { 
      'Authorization': 'Bearer '+getUserByToken(), 
      'Content-Type': 'application/json'
    },
    data : data
  }; 
   
  return axios(config)   
 }

 export function deleteCustomers(data,) {
  var config = {
    method: 'delete',
    url:"",
    headers: { 
      'Authorization': 'Bearer '+getUserByToken(), 
      'Content-Type': 'application/json'
    },
     
  }; 
  return axios(config)   
 }
  
export function getCustomers(customerid) {
    
  var config = {
    method: 'get',
    url:"",
    headers: { 
      'Authorization': 'Bearer '+getUserByToken(), 
      'Content-Type': 'application/json'
    },
     
  };   
  return axios(config)  
 }

 export function getCustomersDetail(customerid) {
    
  var config = {
    method: 'get',
    url:"",
    headers: { 
      'Authorization': 'Bearer '+getUserByToken(), 
      'Content-Type': 'application/json'
    },
     
  };   
  
  return axios(config)  
 }
 