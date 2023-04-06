import React from 'react'
import './styles.scss'

import amazing from '../../images/icons/amazing.png'
import good from '../../images/icons/good.png'
import okay from '../../images/icons/okay.png'
import bad from '../../images/icons/bad.png'
import terrible from '../../images/icons/terrible.png'
import { useState } from 'react'

const ReviewBanner = () => {
    const [emotion,setEmotion] = useState('amazing')
  
  return (
    <div className='review-banner'>
        <p className='banner-header'>Thank You! for visting us.</p>
        <form className='review-form'>
            <p>Your Feedback is valuable.</p>
            <div className="emojis-container">
                <div className={`${emotion === 'amazing' ? 'item active':'item'}`}>
                    <img src={amazing} alt="" id='amazing' onClick={() => setEmotion('amazing')}/>
                </div>
                <div className={`${emotion === 'good' ? 'item active':'item'}`}>
                    <img src={good} alt=""  id='good'  onClick={() => setEmotion('good')}/>
                </div>
                <div className={`${emotion === 'okay' ? 'item active':'item'}`}>
                    <img src={okay} alt=""  id='okay'  onClick={() => setEmotion('okay')}/>
                </div>
                <div className={`${emotion === 'bad' ? 'item active':'item'}`}>
                    <img src={bad} alt=""  id='bad'   onClick={() => setEmotion('bad')}/>
                </div>
                <div className={`${emotion === 'terrible' ? 'item active':'item'}`}>
                    <img src={terrible} alt="" id='terrible'   onClick={() => setEmotion('terrible')}/>
                </div>
            </div>
            <textarea name="feedback" placeholder='Type your feedback here...'></textarea>
            <button type='button'>Submit</button>
        </form>
    </div>
  )
}

export default ReviewBanner