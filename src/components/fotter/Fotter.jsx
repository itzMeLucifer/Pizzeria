import React from 'react'
import './styles.scss'

import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Fotter = () => {
  return (
    <div className='fotter-container'>
      <div className="header">
        <div className="logo-image">
          <img src={logo} alt="" />
        </div>
        <div className="name-slogan">
          <p className='name'>Pizzeria</p>
          <p className='slogan'>You ask we deiver ...</p>
        </div>
      </div>
      <div className="information">
        <div className="left">
          <div className="left-cont">
            <p className="social">Contact Info</p>
            <p className="info-item"><span className='key'>Address </span><span>E-126 M, New Orlendo, USA-1125696</span></p>
            <p className="info-item"><span className='key'>Landmark </span><span>Max Hospital, Orlendo</span></p>
            <p className="info-item"><span className='key'>Working Shift </span><span>8:00 AM - 12:00 PM</span></p>
            <p className="info-item"><span className='key'>Address </span><span>+91-987-654-3210</span></p>
          </div>
        </div>
        <div className="right">
          <div className="right-cont">
            <p className="social">Social</p>
            <div className="items">
              <Link className="link" to={'https://www.instagram.com/'} target='blank'>
                <div className="item">
                  <InstagramIcon className='item-icon'/>
                  <p>Instagram</p>
                </div>
              </Link>
              <Link className="link" to={'https://www.facebook.com/'} target='blank'>
                <div className="item">
                  <FacebookIcon className='item-icon'/>
                  <p>Facebook</p>
                </div>
              </Link>
              <Link className="link" to={'https://www.twitter.com/'} target='blank'>
                <div className="item">
                  <TwitterIcon className='item-icon'/>
                  <p>Twitter</p>
                </div>
              </Link>
              <Link className="link" to={'https://www.linkedin.com/'} target='blank'>
                <div className="item">
                  <LinkedInIcon className='item-icon'/>
                  <p>LinkedIn</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p className="copyright">
          Copyright<span><CopyrightIcon className='icon'/></span> PIZZERIA. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Fotter