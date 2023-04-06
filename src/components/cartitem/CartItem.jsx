import React,{useEffect, useState,useContext} from 'react'
import './styles.scss';

import { products } from '../../dummydata';
import {CartContext} from '../../context/cart'
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

const CartItem = ({data}) => {
  const [product,setProduct]= useState();
  const [cart,setCart] = useState(data) 
  const cartContext = useContext(CartContext)
  const [opertion,setOperation] = useState(null)

  useEffect(()=> {
    setProduct(products.find(item => item._id === data.productId))
  },[])

  useEffect(()=> {
    if(opertion !== null){
      if(opertion === 'add'){
        cartContext.cartDispatch({type:'INCQTY',payload:cart})
      }
      else{
        cartContext.cartDispatch({type:'DECQTY',payload:cart})
      }
    }
  },[opertion])

  const handleChangeQuantityCount = (increase) => {
    if(increase === true){
      setCart({...cart,qty:cart.qty+1})
      setOperation('add')
      return
    }
    setCart({...cart,qty:cart.qty-1})
    setOperation('sub')
  }

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={product?.productImage} alt="" />
      </div>
      <div className="cart-item-info">
        <div className="name-delete">
          <h2 onClick={()=> console.log(cartContext.cart)}>{product?.productName}</h2>
          <DeleteSweepOutlinedIcon className='delete-icon' onClick={() => cartContext.cartDispatch({type:'DELITEM',payload:data._id})}/> 
        </div>
        <p className="price"><span>&#8377;</span>{product?.price}</p>
        <p className="item-desc">{product?.productShortDesc}</p>
        <div className="cart-total">
          <div className="quantity-btns">
            <button type='button' onClick={()=>handleChangeQuantityCount(false)}>-</button>
            <input type="text" value={cart?.qty} />
            <button type='button' onClick={()=>handleChangeQuantityCount(true)}>+</button>
          </div>
          <div className="total">
            <h4>Total Amount : </h4>
            <p className='total-amount'><span>&#8377;</span>{product?.price*cart?.qty}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem