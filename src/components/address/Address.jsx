import React,{useState,useContext} from 'react'
import './styles.scss';

import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddressItem from './addressitem/AddressItem'
import AddAddress from './addaddress/AddAddress'
import {UserContext} from '../../context/user'
const Address = () => {
  const [showAddress,setShowAddress] = useState(false)
  const user = useContext(UserContext)
  return (
    <div className="address-item-container">
      <div className="address-header">
        <h2>Manage Addresses</h2>
        {
          showAddress?
          <div className="btns">
            <CancelPresentationOutlinedIcon className='cancel-icon'  onClick={() => setShowAddress(!showAddress)}/>
          </div>:
          <AddBoxOutlinedIcon className='add-icon icon' onClick={() => setShowAddress(!showAddress)}/>
        }
      </div>
      {
        showAddress?
        <AddAddress isEdit={false} closeEditAddress={setShowAddress} editAddress={showAddress}/>:
        null
      }
        <div className="addresses">
          {
            user.currentUser.addresses?.map((item) => (
              <AddressItem key={item._id} data={item}/>
            ))
          }
        </div>
    </div>
  )
}

export default Address