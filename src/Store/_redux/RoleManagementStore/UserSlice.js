import {createSlice} from "@reduxjs/toolkit";

const initialUserState = {
  listLoading: false,
  actionsLoading: false,
  users: [],
  userForEdit: null,
  userPermission:["anyallow"],
};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    catchError: (state, action) => {
         
      state.error = `${action.type}: ${action.payload.error}`;    
     
      if (action.payload.callType === callTypes.list) {       
        state.listLoading = false;         
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;         
      } else {
        state.actionsLoading = true;
      }
    },    
    userForEdit: (state, action) => {
      state.actionsLoading = false;     
      state.userForEdit = action.payload;      
      state.error = null;
    },
    userAdd: (state, action) => {
      state.actionsLoading = false;     
      state.users=[...state.users,action.payload]    
      state.error = null;            
    },
    userUpdate: (state, action) => {
      state.actionsLoading = false;     
      state.users= state.users.filter((user)=>{
        return user.id!==action.payload.id
      });
      
      state.users.push(action.payload)
      state.error = null;
    },
    userDelete: (state, action) => {
      state.listLoading = false;
      state.actionsLoading = false;     
      state.users= state.users.filter((user)=>{
        return user.id!==action.payload
      });     
      state.error = null;
    } ,
    userGetList: (state, action) => {
      state.actionsLoading = false;     
      state.users= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    devError: (state) => {
      state.actionsLoading = false;           
      state.error = null;
    }             
  }
});