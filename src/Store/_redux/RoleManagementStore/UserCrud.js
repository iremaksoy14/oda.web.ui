import axios from "axios";
import { useSelector } from "react-redux";
import {CustomerApiUrl} from "../../BaseUrl" 
// import { getUserByToken } from "../../../Auth/_redux/authCrud";
 

//Api ile işlem yapmak için

export function addUsers(data,token) {
  
 var config = {
   method: 'post',
   url:"",
   headers: { 
     'Authorization': 'Bearer '+token, 
     'Content-Type': 'application/json'
   },
   data : data
 };    
  return  axios(config)   
}

export function updateUsers(data,token) {
  var config = {
    method: 'put',
    url: "",
    headers: { 
      'Authorization': 'Bearer '+token, 
      'Content-Type': 'application/json'
    },
    data : data
  }; 
   
  return axios(config)   
 }

 export function deleteUsers(data,token) {
  var config = {
    method: 'delete',
    url:"",
    headers: { 
      'Authorization': 'Bearer '+token, 
      'Content-Type': 'application/json'
    },
     
  }; 
  return axios(config)   
 }
  
export function getUsers(customerid,token) {
    
  var config = {
    method: 'get',
    url:"",
    headers: { 
      'Authorization': 'Bearer '+token, 
      'Content-Type': 'application/json'
    },
     
  };   
  return axios(config)  
 }

 export function getUsersDetail(customerid,token) {
    
  var config = {
    method: 'get',
    url:"",
    headers: { 
      'Authorization': 'Bearer '+token, 
      'Content-Type': 'application/json'
    },
     
  };   
  
  return axios(config)  
 }
 