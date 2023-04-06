import React,{useState} from 'react'
import './styles.scss';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import order from '../../images/icons/order.png'
import cooking from '../../images/icons/cooking.png'
import delivery from '../../images/icons/delivery.png'
import delivered from '../../images/icons/delivered.png'
import { products } from '../../dummydata';

const OrderItem = ({data}) => {
    const [showDetails,setShowDetails] = useState(false)

    function getCartItems(){
      var menu = ''
      data.items.map(item => {
        const product = products.find(product =>  product._id === item.productId)
        menu = menu + `${item.qty +" "+ item.size} - ${product.productName}, `
      })
      return menu
    }

  return (
    <div className="order-box">
      <div className="order">
        <div className="order-info-item">
          <h4>Order ID</h4>
          <p>{data._id}</p>
        </div>
        <div className="order-info-item order-food sr-no">
          <h4>Order Items</h4>
          <p>{getCartItems()}</p>
        </div>
        <div className="order-info-item address-p  sr-no">
          <h4>Address</h4>
          <p>{data.deliveryAddress}</p>
        </div>
        <div className="order-info-item">
          <h4>Total</h4>
          <p><span>&#8377;</span>{data.cartTotal}</p>
        </div>
        <div className="order-info-item">
          <h4>Details</h4>
          {
            !showDetails?
            <VisibilityIcon className='eye-icon' onClick={() => setShowDetails(!showDetails)}/>
            :<VisibilityOffIcon className='eye-icon' onClick={() => setShowDetails(!showDetails)}/>
          }</div>
      </div>
      {
        showDetails?
        <div className="order-details">
          <div className="status">
            <div className="mobile-info">
              <h4>Order Items</h4>
              <p className='delivery'>{getCartItems()}</p>
              <h4>Delivery Address</h4>
              <p className='delivery'>{data.deliveryAddress}</p>
            </div>
            <h4>Track Your Order</h4>
            <div className="status-tracker">
              <div className={data.orderStatus === 0?"status-item":"status-item notcompleted"}>
                <img src={order} alt="" />
                <p>Order Placed</p>
              </div>
              <div className={data.orderStatus === 1?"status-item":"status-item notcompleted"}>
                <img src={cooking} alt="" />
                <p>Order Cooking</p>
              </div>
              <div className={data.orderStatus === 2?"status-item":"status-item notcompleted"}>
                <img src={delivery} alt="" />
                <p>Out For Delivery</p>
              </div>
              <div className={data.orderStatus === 3?"status-item":"status-item notcompleted"}>
                <img src={delivered} alt="" />
                <p>Order Delivered</p>
              </div>
            </div>
          </div>
          <div className="cart-details">
            <h4>Payment Details</h4>
              <p><span className='head'>Sub Total :</span><span>&#8377;</span>{data?.subTotal}</p>
              <p><span className='head'>Discount :</span><span>&#8377;</span>{data?.discount}</p>
              <p><span className='head'>Cart Total :</span><span>&#8377;</span>{data?.cartTotal}</p>
            <button disabled>{data.paymentType === 'COD'?'Cash On Delivery':'Pre Paid Order'}</button>
          </div>
        </div>:
        null
      }
    </div>
  )
}

export default OrderItem