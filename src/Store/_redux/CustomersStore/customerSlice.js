import {createSlice} from "@reduxjs/toolkit";

const initialCustomerState = {
  listLoading: false,
  actionsLoading: false,
customers: [],
  customerForEdit: null,
  
};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "customer",
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
    customerForEdit: (state, action) => {
      state.actionsLoading = false;     
      state.customerForEdit = action.payload;      
      state.error = null;
    },
    customerAdd: (state, action) => {
      state.actionsLoading = false;     
      state.customers=[...state.customers,action.payload]    
      state.error = null;            
    },
    customerUpdate: (state, action) => {
      state.actionsLoading = false;     
      state.customers= state.customers.filter((customer)=>{
        return customer.id!==action.payload.id
      });
      
      state.entities.push(action.payload)
      state.error = null;
    },
    customerDelete: (state, action) => {
      state.listLoading = false;
      state.actionsLoading = false;     
      state.customers= state.customers.filter((customer)=>{
        return customer.id!==action.payload
      });     
      state.error = null;
    } ,
    customerGetList: (state, action) => {
      state.actionsLoading = false;     
      state.customers= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    devError: (state) => {
      state.actionsLoading = false;           
      state.error = null;
    }             
  }
});