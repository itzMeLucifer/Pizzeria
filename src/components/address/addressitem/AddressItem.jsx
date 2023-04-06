import React,{useState,useContext} from 'react'
import './styles.scss'

import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import AddAddress from '../addaddress/AddAddress';
import {UserContext} from '../../../context/user'
const AddressItem = ({data}) => {
  const [showEditAddress,setShowEditAddress] = useState(false)
  const user = useContext(UserContext)
  return (
    <>
    {
      showEditAddress?<AddAddress isEdit={true} closeEditAddress={setShowEditAddress} editAddress={showEditAddress} data={data}/>:
      <div className="address">
        <div className="old-address-header">
          <h4>Address 1 </h4>
          <div className="address-btns">
            <EditIcon className='edit-icon icon' onClick={() =>  setShowEditAddress(true)}/>
            <DeleteSweepOutlinedIcon className='icon delete-icon' onClick={() =>user.userDispatch({type:'DELADD',payload:data._id})}/>  
          </div>
        </div>
        <div className="name-phone">
          <p className='add-name'>{data.recieverName}</p>
          <p className="number">{data.recieverPhone}</p>
        </div>
        <p className="address-details">{`${data.house}, ${data.locality}, ${data.district}, ${data.state}, ${data.state + "-"+ data.pincode}`}</p>
      </div>
    }
      </>
  )
}

export default AddressItem