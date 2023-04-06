import React from 'react'
import './styles.scss'

import pizza from '../../images/icons/pizza.png'
import { useState,useContext } from 'react'
import { useEffect } from 'react'
import { CartContext } from '../../context/cart'
import { useNavigate,useParams } from 'react-router-dom'

const ProductInfo = ({info}) => {
  const [selectedSize,setSelectedSize]= useState('small')
  const [topping,setToppings] = useState([])
  const params = useParams()
  const [itemCount,setItemCount] =useState(1)
  const [price,setPrice] = useState(info?.price)  
  const cartContext = useContext(CartContext)
  const navigate = useNavigate();
  const [newCartItem,setNewCartItem] = useState({
    _id:cartContext.cart.length+1,
    productId:Number(params.id),
    toppings:[],
    qty:1,
    size:'s'
  })

  useEffect(()=>{
    switch(selectedSize){
      case 'm':
        setPrice((Math.floor(info?.price*1.3) + topping.length*info?.perToppingPrice)*itemCount);
        setNewCartItem({...newCartItem,size:'m',toppings:topping,qty:itemCount})
        break;
      case 'l':
        setPrice((Math.floor(info?.price*1.8) + topping.length*info?.perToppingPrice)*itemCount);
        setNewCartItem({...newCartItem,size:'l',toppings:topping,qty:itemCount})
        break;
      default:
        setPrice((Math.floor(info?.price) + topping.length*info?.perToppingPrice)*itemCount);
        setNewCartItem({...newCartItem,size:'s',toppings:topping,qty:itemCount})
        break;
    }
  },[price,selectedSize,topping,info.price,info.perToppingPrice,itemCount])

  const handleChooseToppings = (e) => {
    topping.includes(e.target.id)?setToppings(topping.filter(item => item !== e.target.id)):setToppings([...topping,e.target.id])
  }

  const handleAddToCartOrBuyNow = (isAddToCart) => {
    if(isAddToCart){
      cartContext.cartDispatch({type:'ADDITEM',payload:newCartItem})
      return
    }
    cartContext.cartDispatch({type:'ADDITEM',payload:newCartItem})
    navigate('/cart')
  }

  return (
    <div className="product-right">
      <div className="info">
        <h2 className='product-name'>{info.productName}</h2>
        <p className='product-price'><span>&#8377;</span>{`${price}`}</p>
        <p className="product-desc">{info.productLongDesc}</p>
        <p className="product-price">Select size</p>
        <div className="note-sizes">
          <div className="sizes">
            <div className={selectedSize === 'small'?"pizza-size small active":"pizza-size small"} id='small' onClick={()=>setSelectedSize('s')}>
              <img src={pizza} alt="" />
              <div className="size">S</div>
            </div>
            <div className={selectedSize === 'medium'?"pizza-size small active":"pizza-size medium"} id='medium' onClick={()=>setSelectedSize('m')}>
              <img src={pizza} alt="" />
              <div className="size">M</div>
            </div>
            <div className={selectedSize === 'large'?"pizza-size large active":"pizza-size large"} id='large' onClick={()=>setSelectedSize('l')}>
              <img src={pizza} alt="" />
              <div className="size">L</div>
            </div>
          </div>
          <p className='note'><span>*Note : </span>Price of item depends on size you choose.</p>
        </div>
        <p className="product-price">select Toppings</p>
        <div className="toppings">
          {
            info.productToppings?.map(item => (
              <div className="topping">
                <input type="checkbox" id={item} onClick={(e)=>handleChooseToppings(e)}/>
                <label htmlFor="">{item}</label>
              </div>
            ))
          }
        </div>
        <div className="btns">
          <div className="qty">
            <button className='remove' onClick={()=>setItemCount(itemCount>1 ?itemCount-1:itemCount)}>-</button>
            <span>{itemCount}</span>
            <button className='add' onClick={()=>setItemCount(itemCount+1)}>+</button>
          </div>
          <button onClick={()=> handleAddToCartOrBuyNow(true)}>Add to Cart</button>
          <button onClick={()=> handleAddToCartOrBuyNow(false)} className='buy'>Boy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo