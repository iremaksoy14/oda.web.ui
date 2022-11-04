import {createSlice} from "@reduxjs/toolkit";

const initialCompanyState = {
  listLoading: false,
  actionsLoading: false,
  companies: [],
  companyForEdit: null,
  
};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "company",
  initialState: initialCompanyState,
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
    companyForEdit: (state, action) => {
      state.actionsLoading = false;     
      state.companyForEdit = action.payload;      
      state.error = null;
    },
    companyAdd: (state, action) => {
      state.actionsLoading = false;     
      state.companies=[...state.companies,action.payload]    
      state.error = null;            
    },
    companyUpdate: (state, action) => {
      state.actionsLoading = false;     
      state.companies= state.companies.filter((company)=>{
        return company.id!==action.payload.id
      });
      
      state.entities.push(action.payload)
      state.error = null;
    },
    companyDelete: (state, action) => {
      state.listLoading = false;
      state.actionsLoading = false;     
      state. companies= state.companies.filter(( company)=>{
        return  company.id!==action.payload
      });     
      state.error = null;
    } ,
    companyGetList: (state, action) => {
      state.actionsLoading = false;     
      state.companies= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    devError: (state) => {
      state.actionsLoading = false;           
      state.error = null;
    }             
  }
});