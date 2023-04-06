import React from "react";
export const orderInitialState = []
export const OrderContext = React.createContext()
export const orderReducer = (state,action) => {
    switch (action.type) {
        case 'ADDORDER' :
            console.log(1)
            return [...state,action.payload];
        default:
            return state;
    }
}