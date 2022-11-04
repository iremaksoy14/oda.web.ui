
import { persistReducer,persistStore } from "redux-persist";
import { createStore} from 'redux';
import * as mobileReducer from "../../Store/_redux/MobileSlice";
import * as authReducer from "./../_redux/AuthStore/authSlice";
import * as lightReducer from "./../_redux/LıghtStore/lightSlice";
import * as customerReducer from "./../_redux/CustomersStore/customerSlice";
import * as companyReducer from "./../_redux/CompaniesStore/companiesSlice";
import * as userReducer from "./../_redux/RoleManagementStore/UserSlice";
import * as architectReducer from "./../_redux/ArchitectStore/architectSlice";
import * as cardReducer from "./../_redux/CardStore/cardSlice";
import * as productSlice from "./../_redux/ProductStore/productSlice";



import storage from "redux-persist/lib/storage" 
 

export const mobileeReducer = persistReducer({ storage, key: "state-mobile"},mobileReducer.Slice.reducer)
export const authhReducer = persistReducer({ storage, key: "state-auth",blacklist:[]},authReducer.Slice.reducer)
export const lighttReducer = persistReducer({ storage, key: "state-light",blacklist:[]},lightReducer.Slice.reducer)
export const  customerrReducer = persistReducer({ storage, key: "state-customer",blacklist:[]},customerReducer.Slice.reducer)
export const  companyyReducer = persistReducer({ storage, key: "state-company",blacklist:[]},companyReducer.Slice.reducer)
export const  userrReducer = persistReducer({ storage, key: "state-user",blacklist:[]},userReducer.Slice.reducer)
export const  architecttReducer = persistReducer({ storage, key: "state-user",blacklist:[]},architectReducer.Slice.reducer)
export const  carddReducer = persistReducer({ storage, key: "state-card",blacklist:[]},cardReducer.Slice.reducer)
export const productReducer =  persistReducer({ storage, key: "state-product",blacklist:[]},productSlice.Slice.reducer)






const mobilestore = createStore(mobileeReducer);
const authReducerStore = createStore(authhReducer);
const lightReducerStore = createStore(lighttReducer);
const customerReducerStore = createStore(customerrReducer);
const companystore = createStore(companyyReducer);
const  userReducerstore= createStore(companyyReducer);
const  architectReducerstore= createStore(architecttReducer);
const  cardReducerstore= createStore(carddReducer);
const productStore = createStore(productReducer);




persistStore(mobilestore);
persistStore(authReducerStore);
persistStore(lightReducerStore);
persistStore(customerReducerStore);
persistStore(companystore);
persistStore(userReducerstore);
persistStore(architectReducerstore);
persistStore(cardReducerstore);
persistStore(productStore);





 