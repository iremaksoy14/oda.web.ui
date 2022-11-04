// import { Alert } from "react-native"; 
import { _setToken,_getToken } from "../../../Helper/Helper";
import * as requestFromServer from "./authCrud";
import {Slice, callTypes} from "./authSlice";
const {actions} = Slice;

//
export const addQuestions = (data,setAlertField) =>  dispatch=>  {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return   requestFromServer
  .questionAdd(data)    
    .then(response => {
     
    if(response.data.success){ 
      setAlertField({
          title: "Success",
          text: "Sualınız bizə göndərildi",
          show: true,
          color: "green"
        })       
    return  response.data.message
      }
      else{
         setAlertField({
          title: "Error",
          text: response.data.message,
          show: true,
          color: "red"
        })
        return response.data.message
      }
      
      
  })
    .catch(error => {      
     //error
     console.log(error)
     
      // dispatch(actions.catchError({ error, callType: callTypes.list }));
      // return false
    });
  


};

export const userStoreIdentitiyAction = (data) =>  dispatch=>  {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return   requestFromServer
    .userIdentityAction(data)    
      .then(response => {
      if(response.data.success){         
          _setToken(response.data.data.token)
          //dispatch(actions.loginIdentity(response.data.data.token));
          return  response.data
        }
        else{
          return response.data
        }
        
        
    })
      .catch(error => {      
       //error
       console.log(error)
       
        // dispatch(actions.catchError({ error, callType: callTypes.list }));
        // return false
      });
    
  
 
};


export const userLogin = (token,data) =>  dispatch=> {

    dispatch(actions.startCall({ callType: callTypes.list }));
  // return   requestFromServer

    // .userLog(token,data)    
  //   .then(response => {
  //  //update state 
  // dispatch(actions.loginUser(response.data.data));
  // return response.data.data
  //    })
  //   .catch(error => {      
  //    //Hata gönderme
   
  //     // dispatch(actions.catchError({ error, callType: callTypes.list }));
  //     return false
  //   });

  dispatch(actions.loginUser(data))
  return data


};


// //Countries and Cities List
// export const getCountriesAndCitiesCrud = (id) => dispatch => {
//   dispatch(actions.startCall({ callType: callTypes.list }));
//   return requestFromServer

//      //Api işlemleri için
//     .GetCountriesAndCities(id)    
//     .then(response => {
//      //State güncelleme 
    
//      if(response.data.success)
//      {        
//       dispatch(actions.GetCountriesAndCitiesList({data:response.data.data,id:id}));
//       return true
//      }
//      else
//      {
//        Alert.alert("getCountriesAndCitiesCrud api error")
//      }      
//     })
//     .catch(error => {      
//      //Hata gönderme
 
//       dispatch(actions.catchError({ error, callType: callTypes.list }));
//       return false
//     });
  
// };

// //Campaign Prices
// export const getCampaingPrices = (id) => dispatch => {
//   dispatch(actions.startCall({ callType: callTypes.list }));
//   return requestFromServer

//      //Api işlemleri için
//     .GetCampaignPrice(id)    
//     .then(response => {
//      //State güncelleme     
//      if(response.data.success)
//      {        
//       dispatch(actions.CampaignPrices(response.data.data));
//       return true
//      }
//      else
//      {
//        Alert.alert("getCampaingPrices api error")
//      }      
//     })
//     .catch(error => {      
//      //Hata gönderme
   
//       dispatch(actions.catchError({ error, callType: callTypes.list }));
//       return false
//     });
  
// };


//  //Token
// export const getDeviceTokenCrud = () => dispatch => {  
  
//   dispatch(actions.startCall({ callType: callTypes.list }));
//   return requestFromServer    
//      //Api işlemleri için
//     .GetDeviceToken()  
//     .then(response => { 
         
   
//      //State güncelleme     
      
//       return true      
//     })
//     .catch(error => {      
//      //Hata gönderme    
      
//       dispatch(actions.catchError({ error, callType: callTypes.list }));
//       return   false
      
//     });
  
// };

 
 

// //User
// export const addUserCrud = (data) => dispatch => {  
  
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .AddUser(data)  
//     .then(response => {  
     
//       if(response.data.success)
//       {
//         dispatch(actions.SetSignUp(response.data.data));
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };

// //Contract
// export const addContractCrud = (data) => dispatch => {  
  
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .AddContract(data)  
//     .then(response => {       
//       if(response.data.success)
//       {
//         dispatch(actions.SetContract(response.data.data));
//         return true
//       }
      
//       return false      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   false
      
//     });
  
// };

// export const updateContractCrud = (data) => dispatch => {  
  
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .UpdateContract(data)  
//     .then(response => {       
      
//       if(response.data.success)
//       {
//         dispatch(actions.SetContract(response.data.data));
//         return true
//       }
      
//       return false      
//     })
//     .catch(error => {      
//      //Hata gönderme    
     
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   false
      
//     });
  
// };

  

// //Car
// export const addCarCrud = (data) => dispatch => {  
 
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .AddCar(data)  
//     .then(response => {  
           
//       if(response.data.success){        
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };

// export const updateCarCrud = (data) => dispatch => {  
  
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .UpdateCar(data)  
//     .then(response => {  
           
//       if(response.data.success){        
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };


// export const deleteCarCrud = (data,userId) => dispatch => {  
 
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .DeleteCar(data,userId)  
//     .then(response => {  
           
//       if(response.data.success){        
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };






//  //Driver
// export const addDriverCrud = (data) => dispatch => {  
   
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .AddDriver(data)  
//     .then(response => {  
           
//       if(response.data.success){    
//         dispatch(actions.DriverAdd(response.data.data))    
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };

// export const updateDriverCrud = (data) => dispatch => {  
 
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .UpdateDriver(data)  
//     .then(response => {  
           
//       if(response.data.success){   
//         dispatch(actions.DriverAdd(response.data.data))     
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };

// export const deleteDriverCrud = (data,userId) => dispatch => {  
 
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .DeleteDriver(data,userId)  
//     .then(response => {  
           
//       if(response.data.success){                       
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };




//   //Passenger
// export const addPassengerCrud = (data) => dispatch => {  
 
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .AddPassenger(data)  
//     .then(response => {  
           
//       if(response.data.success){   
//         dispatch(actions.passengerAdd(response.data.data))     
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };

// export const updatePassengerCrud = (data) => dispatch => {  
 
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .UpdatePassenger(data)  
//     .then(response => {  
           
//       if(response.data.success){        
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };

// export const deletePassengerCrud = (data,userId) => dispatch => {  
 
//   dispatch(actions.startCall({ callType: callTypes.action }));

//   return requestFromServer    
//      //Api işlemleri için
//     .DeletePassenger(data,userId)  
//     .then(response => {  
           
//       if(response.data.success){          
//         return response.data.data
//       }
      
//       return null      
//     })
//     .catch(error => {      
//      //Hata gönderme    
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//       return   null
      
//     });
  
// };

 
// //contractUser

  
//   export const addContractUserCrud = (data) => dispatch => {  
 
//     dispatch(actions.startCall({ callType: callTypes.action }));
  
//     return requestFromServer    
//        //Api işlemleri için
//       .AddContractUser(data)  
//       .then(response => {  
             
//         if(response.data.success){   
            
//           return response.data.data
//         }
        
//         return null      
//       })
//       .catch(error => {      
//        //Hata gönderme    
//         dispatch(actions.catchError({ error, callType: callTypes.action }));
//         return   null
        
//       });
    
//   };
  
//   export const updateContractuserCrud = (data) => dispatch => {  
   
//     dispatch(actions.startCall({ callType: callTypes.action }));
  
//     return requestFromServer    
//        //Api işlemleri için
//       .UpdateContractUser(data)  
//       .then(response => {  
             
//         if(response.data.success){        
//           return response.data.data
//         }
        
//         return null      
//       })
//       .catch(error => {      
//        //Hata gönderme    
//         dispatch(actions.catchError({ error, callType: callTypes.action }));
//         return   null
        
//       });
    
//   };
  
//   export const deleteContractUserCrud = (data,userId) => dispatch => {  
   
//     dispatch(actions.startCall({ callType: callTypes.action }));
  
//     return requestFromServer    
//        //Api işlemleri için
//       .DeleteContractUser(data,userId)  
//       .then(response => {  
             
//         if(response.data.success){          
//           return response.data.data
//         }
        
//         return null      
//       })
//       .catch(error => {      
//        //Hata gönderme    
//         dispatch(actions.catchError({ error, callType: callTypes.action }));
//         return   null
        
//       });
    
//   };



   
//   export const paymentCrud = (data,userId) => dispatch => {  
   
//     dispatch(actions.startCall({ callType: callTypes.action }));
  
//     return requestFromServer    
//        //Api işlemleri için
//       .PaymentSendRequest(data)  
//       .then(response => {  
         
//         if(response.data.success){          
//           return response.data.data
//         }
        
//         return null      
//       })
//       .catch(error => {      
//        //Hata gönderme    
//         dispatch(actions.catchError({ error, callType: callTypes.action }));
//         return   null
        
//       });
    
//   };


//   export const paymentVerifyCrud = (data) => dispatch => {  
   
//     dispatch(actions.startCall({ callType: callTypes.action }));
 
//     return requestFromServer    
//        //Api işlemleri için
//       .PaymentVerify(data)  
//       .then(response => {  
          
//         return response.data.data      
//       })
//       .catch(error => {      
//        //Hata gönderme    
       
//         dispatch(actions.catchError({ error, callType: callTypes.action }));
//         return   null
        
//       });
    
//   };
  
  
  
   