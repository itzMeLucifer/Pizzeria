import React from 'react'
import './styles.scss'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const TelePhoneInfo = () => {
  return (
    <div className="telephone-help">
      <p className='slogan'>Order Hassle Free</p>
      <div className="details">
        <div className="phone-icon-cont">
          <PhoneInTalkIcon className='phone-icon'/>
        </div>
        <div className="info">
          <p className="text">Order Now</p>
          <p className="number">+91-987-654-3210</p>
        </div>
      </div>
    </div>
  )
}

export default TelePhoneInfo