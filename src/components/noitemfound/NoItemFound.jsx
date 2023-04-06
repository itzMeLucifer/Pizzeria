import React from 'react'
import {Link} from 'react-router-dom'
import orders from '../../images/icons/orders.png'
import cart from '../../images/icons/cart.png'
import './styles.scss'

const NoItemFound = ({type}) => {
  return (
    <div className='container'>
        <div className="box">
            <img src={type === 'order'?orders:cart} alt="" />
        </div>
        <div className="btn">
            <h3>{type ==='order'?"No Order Yet! Let's start shopping ": `There is no item in your bag`}</h3>
            <Link to='/' className='link'><button>Continue Shopping</button></Link>
        </div>
    </div>
  )
}

export default NoItemFound