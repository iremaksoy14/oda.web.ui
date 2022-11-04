import { Alert } from "react-native"; 
import * as requestFromServer from "./lightCrud";
import {Slice, callTypes} from "./lightSlice";
const {actions} = Slice;


export const setLight = (data) =>  dispatch =>  {

    dispatch(actions.startCall({ callType: callTypes.list }));
    return   requestFromServer
    .setPoolLight(data)    

    .then(function (response) {
    //  console.log(JSON.stringify(response.data));
      if(response.data){

        dispatch(actions.setPoolState(data.Data));
        return response.data;
      }
      else{
        console.log("bir hata var")
      }
   
    })
    .catch(function (error) {
      console.log(error);
    });

};

export const setTemperatureAction = (data) =>  dispatch =>  {

  dispatch(actions.startCall({ callType: callTypes.list }));
 // console.log("setTemperatureAction",data)
  return   requestFromServer
  .setTemperatureCrud(data)    
   .then(function (response) {
     if(response.data.success){
      //console.log("set temperature Data",data.Data)
      dispatch(actions.setTemperatureState(data.Data));
      return response.data;
    }
    else{
      console.log("bir hata var")
    }
   })
  .catch(function (error) {
    console.log(error);
  });
};

export const setCloseTemperatureAction = (data) =>  dispatch =>  {
  
  dispatch(actions.startCall({ callType: callTypes.list }));
  //console.log("setCloseTemperatureAction",data)
  return   requestFromServer
  .setTemperatureCrud(data)    
   .then(function (response) {
     if(response.data.success){
     // console.log("set 0 gelecek Data",data.Data)
      dispatch(actions.setTemperatureState(data.Data));
      dispatch(actions.setDynamicTemperatureValue(data.Data));

      // dispatch(actions.setPoolHeatState(false));

      return response.data;
    }
    else{
      console.log("bir hata var")
    }
   })
  .catch(function (error) {
    console.log(error);
  });
};




 


   