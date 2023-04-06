import React from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='forgot-bg-container'>
      <form className='form'>
        <h2>Login</h2>
        <p>Please provide registered email id. We will send link to reset your password.</p>
        <input type="text" placeholder='Email Address' className='username-input' />
        <div className="btns">
          <button type='button' className='login'>Send Link</button>
          <Link to={'/login'}>
            <button type='button' className='signup'>Login</button>
          </Link>
        </div> 
      </form>
    </div>
  )
}

export default ForgotPassword