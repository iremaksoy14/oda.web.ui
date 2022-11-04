import {combineReducers} from "redux";
import * as AllReducer from "../Store/_redux/AllReducer";
import {all} from "redux-saga/effects";

export const rootReducer = combineReducers({
  auth:  AllReducer.authhReducer,
  mobil: AllReducer.mobileeReducer,
  light: AllReducer.lighttReducer,
  customer: AllReducer.customerrReducer,
  company: AllReducer.companyyReducer,
  user: AllReducer.userrReducer,
  architect: AllReducer.architecttReducer,
  card:AllReducer.carddReducer,
  product: AllReducer.productReducer,
});



 
 