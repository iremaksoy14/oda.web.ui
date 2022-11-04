import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { isNaN } from "lodash";
const initialState = {
    products: [],
};
export const callTypes = {
    list: "list",
    action: "action"
};
//State işlemleri için
export const Slice = createSlice({
    name: "product",
    initialState: initialState,
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
        updateAll: (state, action) => {
            state.error = null;
            state.products = action.payload;
        },
        update: (state, action) => {
            state.error = null;
            let item = action.payload;
            let updatedProduct = action.payload.product;
            let index = state.products.map(object => object.id).indexOf(item.id);
            let products = state.products;
            products[index] = updatedProduct;
            state.products = products;
        },
        removeAll: (state, action) => {
            state.error = null;
            state.products = [];
        },
        remove: (state, action) => {
            state.error = null;
            let item = action.payload;
            let products = state.products;
            let index = products.map(object => object.id).indexOf(item.id);
            products.splice(index, 1);
            state.products = products;
        },
        addAll: (state, action) => {
            state.error = null;
            state.products.concat(action.payload);
        },
        add: (state, action) => {
            state.error = null;
            state.products.push(action.payload);
        },
        addChild: (state, action) => {
            state.error = null;
            let item = action.payload;
            let products = state.products;
            let index = products.map(object => object.id).indexOf(item.productId);
            products[index].productChildItems.push(action.payload);
            state.products = products;
        },
        removeChild: (state, action) =>{
            state.error = null;
            let item = action.payload;
            let products = state.products;
            let itemIndex = products.map(object => object.id).indexOf(item.productId); 
            let subItemIndex = products[itemIndex].productChildItems.map(object => object.id).indexOf(item.id);
            products[itemIndex].productChildItems.splice(subItemIndex,1);
            state.products = products;
        },
        updateChild:(state, action) =>{
            state.error = null;
            let item = action.payload;
            let products = state.products;
            let itemIndex = products.map(object => object.id).indexOf(item.productId); 
            let subItemIndex = products[itemIndex].productChildItems.map(object => object.id).indexOf(item.id);
            products[itemIndex].productChildItems[subItemIndex] = action.payload;
        }

    }
});



