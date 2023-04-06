import React,{useContext} from 'react'

import './styles.scss'
import {CartContext} from '../../context/cart'
import {OrderContext} from '../../context/orders'
import { useState } from 'react'
import { useEffect } from 'react'
import { coupons, products } from '../../dummydata'
import {useNavigate} from 'react-router-dom'

const CartSummart = () => {
  const navigate = useNavigate()
  const {cart,cartDispatch} = useContext(CartContext)
  const {orders,orderDispatch} = useContext(OrderContext)
  const [coupon,setCoupon] =useState('')
  var foundedCoupon = {}
  const [subTotal,setSubTotal] = useState(0);
  const [discount,setDiscount] = useState(0);
  const [total,setTotal] = useState(0); 
  const [order,setOrder] = useState(null)
  useEffect(()=> {
    var amount = 0;
    for(let i=0;i<cart.length;i++){
      const product = products.find(item => item._id === cart[i].productId)
      console.log(1)
      amount = amount + ((product.price*cart[i].qty)*1) + cart[i].toppings.length*product.perToppingPrice
    }
    setSubTotal(amount)
  },[cart])

  const checkCoupon = (input) => {
    foundedCoupon = coupons.find(item => item.code === input)
    if(foundedCoupon !== {}){
      setDiscount(Math.floor(subTotal*foundedCoupon.discount/100))
      return
    }
    setDiscount(0)
  }
  useEffect(()=>{
    if(foundedCoupon !== {}){
      setTotal(subTotal-discount)
    }else{
      setTotal(subTotal)
    }
  },[discount,subTotal])

  useEffect(()=>{
    if(order !== null){
      orderDispatch({type:'ADDORDER',payload:order})
      cartDispatch({type:'PLACEORDER'})
      navigate('/orders')
    }
  },[order])

  const handleCheckOut = () => {
    setOrder({
      _id:Math.floor(Math.random() * 899999 + 100000),
      deliveryAddress:'E-25, New Ashok Nagar, New Delhi-110096',
      subTotal:subTotal,
      cartTotal:total,
      discount:discount,
      orderStatus:Math.floor(Math.random() * 4), //0,1,2,3
      paymentType:'COD',
      items:[...cart]
    })
  }
  return (
    <div className="cart">
      <h2>Cart Total</h2>
      <p><span className='head'>Sub Total :</span><span>&#8377;</span>{subTotal}</p>
      <p><span className='head'>Discount :</span><span>&#8377;</span>{discount}</p>
      <p><span className='head'>Total :</span><span>&#8377;</span>{total}</p>
      <h4>Apply Coupon</h4>
      <div className="coupon">
        <input type="text" onChange={(e)=>setCoupon(e.target.value)} placeholder='Coupon code'/>
      </div>
      <button className="btn" onClick={()=>checkCoupon(coupon)}>Apply</button>
      <button className="checkout" onClick={() =>  handleCheckOut()}>CheckOut</button>
    </div>
  )
}

export default CartSummart