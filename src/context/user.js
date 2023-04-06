import React from 'react'
export const UserContext = React.createContext()
export const userInitialState = {}
export const userReducer = (state,action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = {...action.payload};
        case 'EDIT':
            return state = {...action.payload};
        case 'LOGOUT':
            return state = {};
        case 'DELADD':
            return state = {...state,addresses:state.addresses.filter(item => item._id !== action.payload)};
        case 'EDITADD':
            return state = {...state,addresses:[...state.addresses.map((item) => item._id === action.payload._id?action.payload:item)]};
        case 'ADDADD':
            return state = {...state,addresses:[...state.addresses,action.payload]};
        default:
            return state;
    }
}