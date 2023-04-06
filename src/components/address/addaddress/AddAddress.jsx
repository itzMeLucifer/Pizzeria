import React,{useEffect,useState,useContext} from 'react'
import './styles.scss';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { UserContext } from '../../../context/user';
const AddAddress = ({isEdit,closeEditAddress,editAddress,data}) => {
    const [address,setAddress]=useState({}) 
    const user = useContext(UserContext)
    useEffect(()=>{
        isEdit?
            setAddress(data):
            setAddress({
                _id:user.currentUser.addresses.length+1,
                recieverName:'',
                recieverPhone:'',
                house:'',
                state:'',
                district:'',
                locality:'',
                pincode:'',
                type:0
            })
    },[])
    
  const handleInputChange =(e) => {
    const {name,value} = e.target
    setAddress({...address,[name]:value})
  }

  const handleCloseAddress = () => {
    closeEditAddress(!editAddress)
    setAddress(data)
  }  
  
  const handleSave = () => {
    closeEditAddress(!editAddress)
    isEdit?user.userDispatch({type:'EDITADD',payload:address}):user.userDispatch({type:'ADDADD',payload:address})
  }

  return (
    <div className='add-address-container'>
        <h3>
            <span>Add New Address</span>
            {
                isEdit?
                <CancelPresentationOutlinedIcon className='cancel-icon' onClick={()=>handleCloseAddress()}/>:
                null
            }
        </h3>
        <div className="address-form">
            <div className="basic-details">
                <div className="item">
                    <input name='recieverName' type="text" placeholder='Reciever Name' value={address.recieverName} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="item">
                    <input name='recieverPhone' type="text" placeholder='+91-9876543210' value={address.recieverPhone} onChange={(e) => handleInputChange(e)} />
                </div>
            </div>
            <textarea name="house" id="" placeholder='Address (Area or Street)'  value={address.house} onChange={(e) => handleInputChange(e)}/>
            <div className="basic-details">
                <div className="item">
                    <input name='state' type="text" placeholder='State' value={address.state} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="item">
                    <input name='district' type="text" placeholder='City/District/Town' value={address.district} onChange={(e) => handleInputChange(e)}/>
                </div>
            </div>
            <div className="basic-details">
                <div className="item">
                    <input name='locality' type="text" placeholder='Locality'  value={address.locality} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="item">
                    <input name='pincode' type="text" placeholder='Pincode' value={address.pincode} onChange={(e) => handleInputChange(e)} />
                </div>
            </div>
            <label htmlFor="">Address Type: </label>
            <div className="genders">
              <div className="gender">
                <input type="radio" name="type" id="" checked={address.type === 0 ?true:false} onClick={()=>setAddress({...address,type:0})} />
                <label htmlFor="">Home</label>
              </div>
              <div className="gender">
                <input type="radio" name="type" id="" checked={address.type === 1 ?true:false}  onClick={()=>setAddress({...address,type:1})}  />
                <label htmlFor="">Work</label>
              </div>
            </div>
            <button onClick={()=>handleSave()}>Save Details</button>
        </div>
    </div>
  )
}

export default AddAddress