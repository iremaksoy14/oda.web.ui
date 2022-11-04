import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { isNaN } from "lodash";
const initialState = {
    items: [],
    totalPrice: 0,
};
export const callTypes = {
    list: "list",
    action: "action"
};
//State işlemleri için
export const Slice = createSlice({
    name: "card",
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
        addToCard: (state, action) => {
            state.error = null;
            let item = action.payload;
            let index = state.items.map(object => object.id).indexOf(item.id);
            if (index == -1) {
                var newItem = {
                    amout: 1,
                    id: item.id,
                    description: item.description,
                    title: item.title,
                    price: item.price,
                    pictureId: item.pictureId,
                    productChildItems: item.productChildItems,
                    selectedItems : [],
                }
                state.items.push(newItem)
                state.totalPrice = state.totalPrice + newItem.price;
            }
            else {
                state.items[index].amout = state.items[index].amout + 1;
                state.totalPrice = state.totalPrice + item.price;
            }
        },
        increaseItem: (state, action) => {
            state.error = null;
            let item = action.payload;
            let index = state.items.map(object => object.id).indexOf(item.id);
            state.totalPrice = state.totalPrice + state.items[index].price;
            state.items[index].amout = state.items[index].amout + 1;
        },
        decreaseItem: (state, action) => {
            state.error = null;
            let item = action.payload;
            let index = state.items.map(object => object.id).indexOf(item.id);
            if (state.items[index].amout != 1) {
                state.totalPrice = state.totalPrice - state.items[index].price;
                state.items[index].amout = state.items[index].amout - 1;
            }
            else {
                state.totalPrice = state.totalPrice - state.items[index].price;
                if (state.items[index].title === "Bütün Ev") {
                    state.items[index].price = 0;
                    state.items[index].selectedItems = [];
                }
                state.items.splice(index, 1);
            }
        },
        removeCard: (state, action) => {
            state.error = null;
            state.items = [];
            state.totalPrice = 0
        },
        removeItemFromCard: (state, action) => {
            state.error = [];
            let item = action.payload;
            let index = state.items.map(object => object.id).indexOf(item.id);
            let value =0;
            if(item.amout){
                 value = item.amout * item.price;
            }
            else{

                value = state.items[index].amout *  item.price;
            }
            state.items.splice(index, 1);

            state.totalPrice = state.totalPrice - value;
        },
        addPackage: (state, action) => {
            state.error = [];
            let item = action.payload.item;
            let subItem = action.payload.subItem;
            let index = state.items.map(object => object.id).indexOf(item.id);
            if (index === -1) {
                var newItem = {
                    amout: 1,
                    id: item.id,
                    description: item.description,
                    title: item.title,
                    price: subItem.price,
                    pictureId: item.pictureId,
                    productChildItems: item.productChildItems,
                    selectedItems : [],
                }
                newItem.selectedItems.push(subItem);
                state.items.push(newItem)
                state.totalPrice = state.totalPrice + newItem.price;
            }
            else {
                state.items[index].selectedItems.push(subItem);
                state.items[index].price = state.items[index].price + subItem.price;
                state.totalPrice = state.totalPrice + subItem.price;
            }

        },
        removeFromCardSubItem: (state, action) => {
            state.error = [];
            let subItem = action.payload;
            let index = state.items.map(object => object.title).indexOf("Bütün Ev");
            if (index != -1) {
                let subIndex = state.items[index].selectedItems.map(object => object.title).indexOf(subItem.title);
                state.items[index].price = state.items[index].price - subItem.price;
                state.totalPrice = state.totalPrice - subItem.price;
                state.items[index].selectedItems.splice(subIndex, 1);
                if (state.items[index].selectedItems.length == 0) {
                    state.items[index].price = 0;
                    state.items.splice(index, 1);

                }
                var t = state.items;
                var toplam = state.totalPrice;
            }
        }
    }
});



