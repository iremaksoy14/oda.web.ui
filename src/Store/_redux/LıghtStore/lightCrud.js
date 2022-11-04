import axios from "axios";  

import poolLightSetUrl from '../../BaseUrl'

const url="http://20.238.113.126:61171/mqtt";
const urlDev="http://192.168.1.38:5000/mqtt";
 
export function   setPoolLight(data) {

  var config = {
    method: 'post',
    url: url+"?ControlinoId="+data.Controllinold+"&Data="+data.Data+"&Topic="+data.Topic,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };   
  return axios(config)

  
//     var data = JSON.stringify(data);
//     console.log(data)
      
//       var config = {
//         method: 'post',
//         url: poolLightSetUrl,
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data : data
//       };
      
   
//  return  axios(config)
}

 
export function   setTemperatureCrud(data) {

  var config = {
    method: 'post',
    url: url+"?ControlinoId="+data.Controllinold+"&Data="+data.Data+"&Topic="+data.Topic,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };   
  return axios(config)

  
//     var data = JSON.stringify(data);
//     console.log(data)
      
//       var config = {
//         method: 'post',
//         url: poolLightSetUrl,
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data : data
//       };
      
   
//  return  axios(config)
}





