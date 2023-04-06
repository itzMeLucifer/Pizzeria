import React,{useState,useEffect,useContext} from 'react'
import './styles.scss'

import CartItem from '../../components/cartitem/CartItem'
import CartSummary from '../../components/cartsummary/CartSummary'
import ReviewBanner from '../../components/reviewbanner/ReviewBanner'
import {Skeleton} from '@mui/material'
import {CartContext} from '../../context/cart'
import NoItemFound from '../../components/noitemfound/NoItemFound'

const Cart = () => {
  const [fetched,setFetched] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const [items,setItems] = useState([])
  const cartContext = useContext(CartContext)

  const itemSkeleton = (
    <>
    <Skeleton variant='rectangular' height={170}/>
      <br/>
    </>
  )   
  const summarySkeleton = (
    <>
      <Skeleton variant='rectangular' height={380}/>
      <br/>
    </>
  )   
  
  useEffect(()=>{
    if(fetched === 'done')
      setIsLoading(false)
  },[fetched])

  useEffect(()=>{
    setIsLoading(true)
    setFetched('start')
    setTimeout(() => {
      setFetched('done')
      setItems(cartContext.cart)
    },0)
  },[cartContext.cart])

  return (
    <div className='cart-container'>
      <div className="cart-box">
        <div className="left-cart">
        {
          !isLoading?
            items.length === 0 ?
              <NoItemFound type='cart'></NoItemFound>:
              items.map((item) => (
                <CartItem key={item._id} data={item}/>
              )):
              [1,2].map(()=>(
              itemSkeleton
          ))
        }
        </div>
        <div className="right-cart">
          {
            !isLoading?
            <CartSummary/>:
            summarySkeleton
          }
        </div>
      </div>
      <ReviewBanner/>
    </div>
  )
}

export default Cart