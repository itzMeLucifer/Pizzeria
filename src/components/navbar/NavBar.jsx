import React,{useContext} from 'react'
import './styles.scss'
import{Link} from 'react-router-dom'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

import Search from '../search/Search';
import { CartContext } from '../../context/cart';
import { UserContext } from '../../context/user';

const NavBar = () => {
  const cartContext = useContext(CartContext)
  const userContext = useContext(UserContext)
  console.log(userContext.currentUser.firstName)
  return (
    <>
      <div className='navbar'>
        <div className="left">
          <Link className='nav-link' to={'/'}><p>Pizzeria</p></Link>
        </div>
        <div className="center">
          <Search/>
        </div>
        <div className="right">
          <ul className='menu-list'>
          <Link className='nav-link' to={'/'}>
            <li className='menu-item'>
              <div className="menu-icon"><HomeOutlinedIcon className='icon'/></div>
              <p>Home</p>
            </li>
          </Link>
          <Link className='nav-link' to={'/orders'}>
            <li className='menu-item'>
              <div className="menu-icon"><RedeemOutlinedIcon className='icon'/></div>
              <p>Orders</p>
            </li>
          </Link>
          <Link className='nav-link' to={'/cart'}>
            <li className='menu-item'>
              <div className="menu-icon"><ShoppingCartOutlinedIcon className='icon'/></div>
              <p>Cart</p>
              {
                cartContext.cart.length === 0 ?null:
                <span className='item-count'>{cartContext.cart.length}</span>
              }
            </li>
          </Link>
          {
            userContext.currentUser.firstName === undefined?
            <Link className='nav-link' to={'/login'}>
              <li className='menu-item'>
                <button>Login</button>
              </li>
            </Link>:
          <Link className='nav-link' to={'/account'}>
            <li className="menu-item-user">
              <PersonPinIcon className='user-icon'/>
              <div className="info">
                <h4>Welcome!</h4>
                <p>{userContext.currentUser.firstName}</p>
              </div>
            </li>
          </Link>
          }
          </ul>
        </div>
      </div>
      <div className="down-search">
        <Search/>
      </div>
    </>
  )
}

export default NavBar