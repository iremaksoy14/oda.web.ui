import axios from "axios";  
 
import { _getToken } from "../../../Helper/Helper";
//

export function questionAdd(data) {
  
  var config = {
    method: 'post',
    url: 'http://20.234.16.80:61171/api/v1/ContactForm/Add',
    headers: { 
      'Authorization': 'Bearer ' +getUserByToken() , 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  
   
 return  axios(config)
}
export function userIdentityAction(data) {
  
  var config = {
    method: 'post',
    url: 'http://20.234.16.80:61171/api/v1/User/Login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
   
 return  axios(config)
}

export function userLog(token,data) {
  

  var config = {
  method: 'post',
  url: 'http://localhost:3000/login',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer '+token
  },
  data : data
};

return  axios(config) 
}
export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return localStorage.getItem("@authToken");
}











