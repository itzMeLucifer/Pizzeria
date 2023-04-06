import React,{useState,useEffect,useContext} from 'react'
import './styles.scss'

import {Link} from 'react-router-dom'
import { CartContext } from '../../../context/cart'

const Card = ({data}) => {
  const [itemCount,setItemCount] = useState(1)
  const [selectedSize,setSelectedSize] = useState('small')
  const [price,setPrice] = useState(data?.price)
  const cartContext = useContext(CartContext)
  const [newCartItem,setNewCartItem] = useState({
    _id:cartContext.cart.length+1,
    productId:0,
    toppings:[],
    qty:0,
    size:'s'
  })

  useEffect(()=>{
    switch(selectedSize){
      case 'm':
        setNewCartItem({...newCartItem, size:'m',qty:itemCount})
        setPrice(Math.floor(data?.price*1.3)*itemCount);
        break;
      case 'l':
        setNewCartItem({...newCartItem, size:'l',qty:itemCount})
        setPrice(Math.floor(data?.price*1.8)*itemCount);
        break;
      default:
        setNewCartItem({...newCartItem, qty:itemCount})
        setPrice(Math.floor(data?.price)*itemCount);
        break;
    }
  },[selectedSize,data.price,itemCount])

  useEffect(()=> {
    if(newCartItem.productId !== 0)
      cartContext.cartDispatch({type:'ADDITEM', payload:newCartItem})
  },[newCartItem.productId])

  const handleAddToCart = (id) => {
    setNewCartItem({...newCartItem,productId:id})
  }

  return (
    <div className="card">
      <div className="product-image-container">
        <img src={data.productImage} alt="" />
        <p className="amount"><span>&#8377;</span>{price}</p>
        {
          data.productCategory === 1 || data.productCategory === 3 ?
          <div className={data.productIsVeg?'veg':'non-veg'}>
              <div className="dot"></div>
          </div> : null
        }
      </div>
      <div className="product-info">
        <Link className='link' to={`/product/${data.productCategory}/${data._id}`}>
          <p className="name">{data.productName}</p>
        </Link>
        <p className="desc">{data.productShortDesc}</p>
        <div>
          <select name="size" className='size-selector'  onChange={(e)=> setSelectedSize(e.target.value)}>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </div>
        <div className="btns">
          <div className="qty">
            <button className='remove' onClick={()=>setItemCount(itemCount>1 ?itemCount-1:itemCount)}>-</button>
            <span>{itemCount}</span>
            <button className='add' onClick={()=>setItemCount(itemCount+1)}>+</button>
          </div>
          <button className='addtocart' onClick={() => handleAddToCart(data._id)}>Add To Cart</button>
          </div>
      </div>
    </div>
  )
}

export default Card