import axios from "axios";
import { useSelector } from "react-redux";
import {CompanyApiUrl} from "../../BaseUrl" 
// import { getUserByToken } from "../../../Auth/_redux/authCrud";
import { getUserByToken } from "../../../Store/_redux/AuthStore/authCrud";
 

//Api ile işlem yapmak için

export function addCompanies(data) {
  
 var config = {
   method: 'post',
   url:'http://20.234.16.80:61171/api/v1/User/Add',
   headers: { 
    'Content-Type': 'application/json'
   },
   data : data
 };    
  return  axios(config)   
}

export function updateCompanies(data) {
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

 export function deleteCompanies(data) {
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
  
export function getCompanies(companyid) {
    
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

 export function getCompaniesDetail(companyid) {
    
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
 