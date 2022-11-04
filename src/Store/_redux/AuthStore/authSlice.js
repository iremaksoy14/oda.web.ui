import {createSlice} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const initialState = {
  listLoading: false,
  firstName:"",
  lastName:"",
  actionsLoading: false,
  token: undefined,
  loginUser: null,
  loginUserName:{

  },
 

};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "auth",
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
    loginIdentity: (state, action) => {
      const  token  = action.payload;
      return { token, user:undefined };
    },  
    loginUser: (state, action) => {
      const loginUser  = action.payload;
     return {...state,loginUser, user: undefined };
    },
    loginUserName: (state, action) => {
      const firstName  = action.payload.firstName;
      const lastName  = action.payload.lastName;

     return {...state,firstName,lastName, user: undefined };
    },
  
    logOut: (state, action) => {
    
     return initialState ;
    }, 
    
   
    
    
             
  }
});




