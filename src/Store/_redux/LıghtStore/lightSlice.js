import {createSlice} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const initialState = {
    poolLight:0,
    temperature:0,
    dynamicTemperatureValue:0,
    poolHeatState:false,
    tempTemperature:0

};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "light",
  initialState: initialState ,
  reducers: {
    catchError: (state, action) => {
         
      state.error = `${action.type}: ${action.payload.error}`;    
     
      if (action.payload.callType === callTypes.list) {       
        state.listLoading = false;
        state.actionsLoading = false;
      } else {
        state.actionsLoading = false;
        state.listLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
        state.actionsLoading2 = true;
      }
    },   
    setPoolState: (state, action) => {
      
      const  pool  = action.payload;
      state.poolLight = pool;
    },  
    setTemperatureState: (state, action) => {
      
      const  temperature  = action.payload;
      state.temperature = temperature;
    },  
    setDynamicTemperatureValue:(state,action)=>{
          
      state.dynamicTemperatureValue= action.payload 
      
    },
    setPoolHeatState: (state,action) =>{
        state.poolHeatState = action.payload; 
      
    },
    settempTemperature: (state,action) =>{
      state.tempTemperature = action.payload; 
    
  },
    
    
             
  }
});



