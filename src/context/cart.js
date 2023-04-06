import React from "react";
export const CartContext = React.createContext()
export const initialState = [];
export const reducer = (state,action) => {
  switch(action.type){
    case 'ADDITEM':
      return [...state, action.payload];
    case 'PLACEORDER':
      return [];
    case 'DECQTY':
      return state.map((item) => item._id === action.payload._id?action.payload:item)
    case 'INCQTY':
      return state.map((item) => item._id === action.payload._id?action.payload:item)
    case 'DELITEM':
          return state = state.filter((item)=>item._id!==action.payload)
    default:
      return state;
  }
}