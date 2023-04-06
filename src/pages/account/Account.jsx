import React,{useState,useContext} from 'react'
import './styles.scss';
import {useNavigate} from 'react-router-dom'
import PersonalInfo from '../../components/profileinfo/ProfileInfo'
import ReviewBanner from '../../components/reviewbanner/ReviewBanner'
import {MenuItems} from '../../dummydata'
import Address from '../../components/address/Address';
import { useEffect } from 'react';
import { UserContext } from '../../context/user';

const Account = () => {
  const navigate = useNavigate()
  const [changed,setChanged] = useState('')
  const [component,setComponent] = useState(<></>)
  
  const user = useContext(UserContext)
  useEffect(()=> {
    switch(changed){
      case 'PI':
        setComponent(<PersonalInfo/>)
        break
      case 'MA':
        setComponent(<Address/>)
        break
      default:
        setComponent(<PersonalInfo/>)
        break
    }
  },[changed])
  
  const handleMenuItemChange = (e) => {
    switch (e.target.id) {
      case 'PI':
        setChanged('PI')
        break;
      case 'MA':
        setChanged('MA')
        break;
      case 'MC':
        navigate('/cart')
        break;
      case 'MO':
        navigate('/orders')
        break;
      case 'LG':
        user.userDispatch({type:'LOGOUT'})
        navigate('/')
        break;
      default:
        setChanged('PI')
        break
    }
  }

  return (
    <div className='account-container'>
      <div className='account-box'>
        <div className="account-left">
          <div className="user-info">
            <div className="user-image">
              <img src={user.currentUser.profilePic} alt=""/>
            </div>
            <div className="greeting">
              <h4 className='greeting-text'>Hi! Welcome</h4>
              <p className='username'>{user.currentUser.firstName}</p>
            </div>
          </div>
          <div className="menu" onClick={(e) => handleMenuItemChange(e)}>
            {
              MenuItems.map((item) => (
                <div className={item.itemId === changed?"menu-item active":"menu-item"} key={item.id} id={item.itemId}>
                  <div className="icon-div" id={item.itemId}>
                    <img src={item.iconImage} alt=""  id={item.itemId}/>
                  </div>
                  <h4 id={item.itemId}>{item.itemName}</h4>
                </div>
              ))
            }
          </div>
        </div>
        <div className="account-right">
          {
            component
          }
        </div>
      </div>
        <ReviewBanner/>
    </div>
  )
}

export default Account