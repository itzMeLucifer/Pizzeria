import React,{useState,useContext} from 'react'
import './styles.scss'

import EditIcon from '@mui/icons-material/Edit';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import {UserContext} from '../../context/user'
const ProfileInfo = () => {
    const [showSave,setShowSave] = useState(false)
    const [isDisabled,setIsDisabled] = useState(true)
    const user = useContext(UserContext)
    const [info,setInfo] = useState(user.currentUser)

    const hanldeChangeData = () => {
      setIsDisabled(false)
      setShowSave(!showSave)
    }

    const handleInputChange = (e) => {
      const {name,value} = e.target
      setInfo({...info, [name]:value})
    }

    const hanldeCancelOperation = () => {
      setShowSave(!showSave)
      setIsDisabled(true)
      setInfo({...user.currentUser})
    }

    const handleSaveInfo = () => {
      user.userDispatch({type:'EDIT',payload:info})
      setIsDisabled(true)
      setShowSave(!showSave)
    }

  return (
    <div className="personal-info-container">
      <div className="account-header">
        <h2>Personal Information</h2>
        {
          showSave?
          <div className="btns">
            <SaveAsOutlinedIcon className='save-icon' onClick={() => handleSaveInfo()}/>
            <CancelPresentationOutlinedIcon className='cancel-icon' onClick={() => hanldeCancelOperation()}/>
          </div>:
          <EditIcon className='edit-icon' onClick={() => hanldeChangeData()}/>
        }
      </div>
      <form action="" className="personal-info">
        <div className="names">
          <div className="fname">
            <label htmlFor="">First Name :</label>
            <input type="text" placeholder='First name' name='firstName' value={info.firstName} disabled={isDisabled} onChange={(e)=>handleInputChange(e)}/>
          </div>
          <div className="fname">
            <label htmlFor="">Middle Name :</label>
            <input type="text" placeholder='Middle name' name='middleName'  value={info.middleName} disabled={isDisabled} onChange={(e)=>handleInputChange(e)}/>
          </div>
          <div className="fname">
            <label htmlFor="">Last Name :</label>
            <input type="text" placeholder='Last name' name='lastName'  value={info.lastName} disabled={isDisabled} onChange={(e)=>handleInputChange(e)}/>
          </div>
        </div>
        <div className="genders">
          <div className="gender">
            <input type="radio" name="gender" id="" checked={info.gender==='M'?true:false} disabled={isDisabled} onClick={()=>setInfo({...info,gender:'M'})} />
            <label htmlFor="">Male</label>
          </div>
          <div className="gender">
            <input type="radio" name="gender" id="" checked={info.gender==='F'?true:false} disabled={isDisabled} onClick={()=>setInfo({...info,gender:'F'})}/>
            <label htmlFor="">Female</label>
          </div>
        </div>
        <label htmlFor="">Email :</label><br/>
        <input type="text" placeholder='Email' name='email' value={info.email} disabled={isDisabled} onChange={(e)=>handleInputChange(e)}/>
        <br/>
        <label htmlFor="">Phone :</label><br/>
        <input type="text" name="phone" placeholder='+91-1234567890' value={info.phone  }  disabled={isDisabled} onChange={(e)=>handleInputChange(e)}/>
      </form>
    </div>
  )
}

export default ProfileInfo