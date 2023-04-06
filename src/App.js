import React,{useReducer} from 'react'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import './App.scss';

import Account from './pages/account/Account';
import Activate from './pages/activate/ActivateAccount'
import Admin from './pages/admin/Admin';
import Cart from './pages/cart/Cart';
import ForgotPassword from './pages/fogot/ForgotPassword';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Product from './pages/product/Product';
import ResetPassword from './pages/reset/ResetPassword';
import SignUp from './pages/singup/SignUp';
import Category from './pages/category/Category';
import Order from './pages/order/Order'

import NavBar from './components/navbar/NavBar';
import Fotter from './components/fotter/Fotter';
import {reducer,CartContext,initialState} from './context/cart'
import {orderReducer,OrderContext,orderInitialState} from './context/orders'
import {userReducer,userInitialState,UserContext} from './context/user'
const App = () => {
  const Layout = () => {
    return (
        <div className='page'>
          <NavBar/>
          <Outlet/>
          <Fotter/>
        </div>
      )
  };
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/account',
          element:<Account/>
        },
        {
          path:'/admin',
          element:<Admin/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/product/:category/:id',
          element:<Product/>
        },
        {
          path:'/category/:category',
          element:<Category/>
        },
        {
          path:'/orders',
          element:<Order/>
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/reset/:token',
      element:<ResetPassword/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:'/forgot',
      element:<ForgotPassword/>
    },
    {
      path:'/activate/:token',
      element:<Activate/>
    },
  ]);

  const [state,dispatch] = useReducer(reducer,initialState);
  const [orderState,orderDispatch] = useReducer(orderReducer,orderInitialState)
  const [userState,userDispatch] = useReducer(userReducer,userInitialState)
  return (
    <CartContext.Provider value={{cart:state,cartDispatch:dispatch}}>
      <OrderContext.Provider value={{orders:orderState,orderDispatch:orderDispatch}}>
        <UserContext.Provider value={{currentUser:userState,userDispatch:userDispatch}}>
          <RouterProvider router={router}>
            <App/>
          </RouterProvider>
        </UserContext.Provider>
      </OrderContext.Provider>
    </CartContext.Provider>
  )
}

export default App