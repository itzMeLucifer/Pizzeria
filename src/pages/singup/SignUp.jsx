import React,{useState} from 'react'
import './styles.scss'

import {Link} from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import google from '../../images/icons/google.PNG'

const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showCnfmPassword,setCnfmShowPassword] = useState(false)
  return (
      <div className='signup-bg-container'>
        <form className='form'>
          <h2>Signup</h2>
          <div className="btns">
            <Link to={'/login'}>
              <button type='button' className='signup'>Login</button>
            </Link>
            <Link to={'/signup'}>
              <button type='button' className='login'>Signup</button>
            </Link>
          </div> 
            <input type="text" placeholder='Email Address' className='username-input' />
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
            <button>Signup</button>
            <div className="other-login">
              <p>or signup using</p>
            </div>
            <div className='google-btn'>
              <img src={google} alt="" />
              Google</div>
            <p>Already a member?<span><Link to={'/login'} className = 'link'> Login Now</Link></span></p>
        </form>
      </div>
    )
}

export default SignUp