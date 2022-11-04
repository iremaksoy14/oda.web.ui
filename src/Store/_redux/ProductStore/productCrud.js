import axios from "axios";

import { _getToken } from "../../../Helper/Helper";
//

export function Add(data) {
  var config = {
    method: 'post',
    url: 'http://20.234.16.80:61171/api/v1/Product/Add',
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config)
}

export function Delete(data) {
  var config = {
    method: 'delete',
    url: 'http://20.234.16.80:61171/api/v1/Product/Delete',
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config);
}
export function Update(data) {
  var config = {
    method: 'put',
    url: 'http://20.234.16.80:61171/api/v1/Product/Update',
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config)
}
export function GetAll() {
  var config = {
    method: 'get',
    url: 'http://20.234.16.80:61171/api/v1/Product/Get',
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(true),
      'Content-Type': 'application/json'
    },
  };
  return axios(config)
}
export function Get(id) {
  var config = {
    method: 'get',
    url: 'http://20.234.16.80:61171/api/v1/Product/Get/' + id,
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
  };
  return axios(config)
}

export function AddChildProduct(data) {
  var config = {
    method: 'post',
    url: 'http://20.234.16.80:61171/api/v1/Product/ChildProduct',
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config)
}
export function DeleteChild(data) {
  var config = {
    method: 'delete',
    url: 'http://20.234.16.80:61171/api/v1/Product/ChildProduct',
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config);
}
export function UpdateChild(data) {
  var config = {
    method: 'put',
    url: 'http://20.234.16.80:61171/api/v1/Product/ChildProduct',
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config)
}
export function GetAllChilds() {
  var config = {
    method: 'get',
    url: 'http://20.234.16.80:61171/api/v1/Product/ChildProduct/GetAll',
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
  };
  return axios(config)
}
export function GetChild(id) {
  var config = {
    method: 'get',
    url: 'http://20.234.16.80:61171/api/v1/Product/ChildProduct/Get/' + id,
    headers: {
      'Authorization': 'Bearer ' + getUserByToken(),
      'Content-Type': 'application/json'
    },
  };
  return axios(config)
}
export function getGuestToken(data) {

  var config = {
    method: 'post',
    url: 'http://20.234.16.80:61171/api/v1/User/Login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config)
}
export function getUserByToken(isGuest = false) {
  // Authorization head should be fulfilled in interceptor.
  var token = localStorage.getItem("@authToken");
  var guestToken = localStorage.getItem("@guestToken");

  if (token !== null) {
    return token;    
  }
  else if (guestToken === null && token === null && isGuest) {
    getGuestToken({
      "email": "test@testt.com",
      "password": "test123"
    }).then(response => {
      if (response.data.success) {
        localStorage.setItem("@guestToken", response.data.data.token);
      }
    })
    token = localStorage.getItem("@guestToken");
  }
  else if (guestToken !== null) {
    return guestToken;
  }
}










