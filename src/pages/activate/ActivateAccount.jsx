import React from 'react'
import './styles.scss'

const ActivateAccount = () => {
  return (
    <div className='activate-bg-container'>
      <form className='form'>
        <h2>Activate Account</h2>
        <p>Please click on the below button to activate your account.</p>
        <button type='button' className='login'>Activate</button>
      </form>
    </div>
  )
}

export default ActivateAccount