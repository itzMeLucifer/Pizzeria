import React,{useState,useContext} from 'react'
import './styles.scss'

import {Link,useNavigate} from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import google from '../../images/icons/google.PNG'
import { users } from '../../dummydata';
import { UserContext } from '../../context/user';
const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  const userContext = useContext(UserContext)
  const [user,setUser] = useState({
    email:'',
    password:''
  })
  const [error,setError] = useState('')
const navigate = useNavigate()
  const handleInputChange = (e) => {
    const {name,value} = e.target
    setUser({...user, [name]:value})
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if(user.email === '' || user.password === ''){
      setError('Fill all details.')
      return
    }
    const registeredUser = users.find(item => item.email === user.email)
    if(registeredUser){
      if(registeredUser.password === user.password){
        userContext.userDispatch({type:'LOGIN',payload :registeredUser})
        navigate('/')
        return
      }
      setError('Pasword does not match.')
      return
    }
    setError('No user found.')
  }

  return (
    <div className='login-bg-container'>
      <form className='form'>
        <h2>Login</h2>
        <div className="btns">
          <Link to='/login'> <button type='button' className='login'>Login</button></Link>
          <Link to='/signup'><button type='button' className='signup'>Signup</button></Link>
        </div> 
          <input type="email" placeholder='Email Address' className='username-input' onChange={(e) => handleInputChange(e)} name='email'/>
          <div className="password">
            <input className='password-input'type={showPassword?'text':'password'} placeholder='Password'  onChange={(e) => handleInputChange(e)} name='password' />
            {
              showPassword?<VisibilityOffIcon className='eye' onClick={() => setShowPassword(!showPassword)}/>:<VisibilityIcon className='eye' onClick={() => setShowPassword(!showPassword)}/>
            }
          </div>
          <div className="forgot">
            <p><Link to='/forgot' className='link'>forgot password?</Link></p>
          </div>
          {
            error === ''?null:<h5 style={{color:'red'}}>{error}</h5>
          }
          <button onClick={(e)=>handleLogin(e)}>Login</button>
          <div className="other-login">
            <p>or login using</p>
          </div>
          <div className='google-btn'>
            <img src={google} alt="" />
            Google</div>
          <p>Not a member?<span><Link to='/signup' className='link'> Signup Now</Link></span></p>
      </form>
    </div>
  )
}

export default Login