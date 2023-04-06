import React,{useState,useContext} from 'react'
import './styles.scss';

import OrderItem from '../../components/orderitem/OrderItem';
import ReviewBanner from '../../components/reviewbanner/ReviewBanner'
import {Skeleton} from '@mui/material'
import { useEffect } from 'react';
import NoItemFound from '../../components/noitemfound/NoItemFound'
import {OrderContext} from '../../context/orders'

const Order = () => {
  const [fetched,setFetched] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const [orders,setOrders] = useState([])
  const orderContext = useContext(OrderContext)
  const orderSkeleton = (
    <>
    <Skeleton variant='rectangular' height={120}/>
      <br/>
    </>
  )
    console.log(orderContext)
  useEffect(()=>{
    if(fetched === 'done')
      setIsLoading(false)
  },[fetched])

  useEffect(()=>{
    setIsLoading(true)
    setFetched('start')
    setTimeout(() => {
      setFetched('done')
      setOrders(orderContext.orders)
    },0)
  },[])

  return (
    <div className='order-container'>
      <div className="orders">
        {
          !isLoading?
            orders.length === 0?
            <NoItemFound type='order'></NoItemFound>:
              orders.map((item) => (
                <OrderItem key={item._id} data={item}/>
              )):[1,2,3].map(()=>(
              orderSkeleton
          ))
        }
      </div>
      <ReviewBanner/>
    </div>
  )
}

export default Order