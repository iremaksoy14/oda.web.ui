import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,  
  ForEdit: null,
  lastError: null,
  error: null,
  entities:[],
  keyboard:false,   
  SignUp:null, 
  topNavigationModal:false,
  approveModalState:false,
  verticalStatusBarState:false,
  selectedMode:'Eco-Mode',
  poolLight:false,
  cleaningStatus:0,
  temperature:0,
  poolHeatState:false,
  closeTimeModalState:false,
  poolModalState:false,
  dynamicTemperatureValue:0,
  dayStates:[false,false,false,false,false,false,false],
  selectedDayIndex:0,
  selectPoolModalState:false,
  backWashState:false,
  cleaningState:false,
  isPoolOpen:true,
  phState:true,
  chloorState:true,
  selectedPool:"Vendaag Home",
  backWashDescription:"none",
  keyboardState:false,
  selectMinutesModalState:false,
  isConnected:false,
};
export const callTypes = {
  list: "list",
  action: "action"
};
//State işlemleri için
export const Slice = createSlice({
  name: "mobile",
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
         
      state.error = `${action.type}: ${action.payload.error}`;    
     
      if (action.payload.callType === callTypes.list) {       
        state.listLoading = false;
        state.actionsLoading = false;
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
    Edit: (state, action) => {
      state.actionsLoading = false;     
      state.ForEdit = action.payload;
      state.error = null;
    },
    Add: (state, action) => {
      state.actionsLoading = false;     
      state.entities.push(action.payload);
      state.error = null;
      state.listLoading=false
    },    
    Delete: (state, action) => {
      state.listLoading = false;
      state.actionsLoading = false;     
      state.entities= state.entities.filter((a)=>{
        return a.id!==action.payload
      });     
      state.error = null;
    } ,
    Update: (state, action) => {
      state.actionsLoading = false;     
      state.entities= state.entities.filter((supply)=>{
        return supply.id!==action.payload.id
      });
      state.entities.push(action.payload)
      state.error = null;
    },
    GetList: (state, action) => {
      
      state.actionsLoading = false;     
      state.entities= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setCleaningStatus: (state, action) => {
      state.actionsLoading = false;     
      state.cleaningStatus= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setSelectMinutesModalState: (state, action) => {
      state.actionsLoading = false;     
      state.selectMinutesModalState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setConnectedState: (state, action) => {
      state.actionsLoading = false;     
      state.isConnected= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setCleaningState: (state, action) => {
      state.actionsLoading = false;     
      state.cleaningState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setIsPoolOpen:(state,action)=>{
      state.actionsLoading = false;     
      state.isPoolOpen= action.payload;
      state.error = null;
      state.listLoading = false;
    },
    setBackWashState:(state,action)=>{
      state.actionsLoading = false;     
      state.backWashState= action.payload; 
      state.error = null;
      state.listLoading = false;
    },
    setBackWashDescription:(state,action)=>{
      state.actionsLoading = false;     
      state.backWashDescription= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setPhState:(state,action)=>{
      state.actionsLoading = false;     
      state.phState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setKeyboardState:(state,action)=>{
      state.actionsLoading = false;     
      state.keyboardState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setSelectedPool:(state,action)=>{
      state.actionsLoading = false;     
      state.selectedPool= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setChloorState:(state,action)=>{
      state.actionsLoading = false;     
      state.chloorState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setSelectedDayIndex: (state, action) =>{
      state.actionsLoading = false;     
      state.selectedDayIndex= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setApproveModalState:(state,action) =>{
      state.actionsLoading = false;     
      state.approveModalState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setPoolLight:(state,action) =>{
      state.actionsLoading = false;     
      state.poolLight= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setSelectPoolModalState:(state,action)=>{
      state.actionsLoading = false;     
      state.selectPoolModalState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setDayStates:(state,action)=>{
      state.actionsLoading = false;     
      state.dayStates[action.payload]= !state.dayStates[action.payload];
      state.error = null;
      state.listLoading = false;
    },
    setDynamicTemperatureValue:(state,action)=>{
      state.actionsLoading = false;     
      state.dynamicTemperatureValue= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setPoolModalState:(state,action)=>{
      state.actionsLoading = false;     
      state.poolModalState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setTemperature: (state,action) =>{
      state.actionsLoading = false;     
      state.temperature = action.payload; 
      state.error = null;
      state.listLoading = false;
    },
    setPoolHeatState: (state,action) =>{
      state.actionsLoading = false;     
      state.poolHeatState = action.payload; 
      state.error = null;
      state.listLoading = false;
    },
    setTabNavigationModal: (state, action) => {
      // debugger
      state.actionsLoading = false;     
      state.topNavigationModal= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setCloseTimeModalState: (state, action) => {
      // debugger
      state.actionsLoading = false;     
      state.closeTimeModalState= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setSelectedMode:(state,action)=>{
      state.actionsLoading = false;     
      state.selectedMode = action.payload; 
      state.error = null;
      state.listLoading = false;
    },
    KeyboardState: (state, action) => {
      
      state.actionsLoading = false;     
      state.keyboard= action.payload 
      state.error = null;
      state.listLoading = false;
    },
    setverticalStatusBarState: (state, action)=>{
      state.actionsLoading = false;     
      state.verticalStatusBarState= action.payload 
      state.error = null;
      state.listLoading = false;
    },

    SetSignUp: (state, action) => {
      
      state.actionsLoading = false;     
      state.SignUp=action.payload
      state.error = null;
      state.listLoading = false;
    },
    devError: (state) => {
      state.actionsLoading = false;           
      state.error = null;
    }             
  }
});