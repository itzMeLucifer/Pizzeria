import React,{useState} from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ResetPassword = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showCnfmPassword,setCnfmShowPassword] = useState(false)
  return (
      <div className='reset-bg-container'>
        <form className='form'>
          <h2>Reset Password</h2>
          <p>Please provide your new password.</p>
            <div className="password">
              <input className='password-input' type={showPassword?'text':'password'} placeholder='Password' />
              {
                showPassword?<VisibilityOffIcon className='eye' onClick={() => setShowPassword(!showPassword)}/>:<VisibilityIcon className='eye' onClick={() => setShowPassword(!showPassword)}/>
              }
            </div>
            <div className="password">
              <input className='password-input' type={showCnfmPassword?'text':'password'} placeholder='Confirm Password' />
              {
                showCnfmPassword?<VisibilityOffIcon className='eye' onClick={() => setCnfmShowPassword(!showCnfmPassword)}/>:<VisibilityIcon className='eye' onClick={() => setCnfmShowPassword(!showCnfmPassword)}/>
              }
            </div>
          <div className="btns">
            <button type='button' className='login'>Reset</button>
            <Link to={'/login'}>
              <button type='button' className='signup'>Login</button>
            </Link>
          </div> 
        </form>
      </div>
  )
}

export default ResetPassword