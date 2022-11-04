import {createSlice} from "@reduxjs/toolkit";

const initialCustomerState = {
  listLoading: false,
  actionsLoading: false,
  architects: [],
  architectForEdit: null,
  
};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "architect",
  initialState: initialCustomerState,
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
    architectForEdit: (state, action) => {
      state.actionsLoading = false;     
      state.architectForEdit = action.payload;      
      state.error = null;
    },
    architectAdd: (state, action) => {
      state.actionsLoading = false;     
      state.architects=[...state.architects,action.payload]    
      state.error = null;            
    },
    architectUpdate: (state, action) => {
      state.actionsLoading = false;     
      state.architects= state.architects.filter((architect)=>{
        return architect.id!==action.payload.id
      });
      
      state.architects.push(action.payload)
      state.error = null;
    },
    architectDelete: (state, action) => {
      state.listLoading = false;
      state.actionsLoading = false;     
      state.architects= state.architects.filter((architect)=>{
        return architect.id!==action.payload
      });     
      state.error = null;
    } ,
    architectGetList: (state, action) => {
      state.actionsLoading = false;     
      state.architects= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    devError: (state) => {
      state.actionsLoading = false;           
      state.error = null;
    }             
  }
});