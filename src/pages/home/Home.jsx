import React from 'react'
import './styles.scss'

import Banner from '../../components/banner/Banner'
import TelephopneInfo from '../../components/telephone/TelePhoneInfo'
import ReviewBanner from '../../components/reviewbanner/ReviewBanner'
import CardSlider from '../../components/cardslider/CardSlider'

const Home = () => {
  return (
    <div className='home-container'>
      <Banner/>
      <div>
        <CardSlider category={1} sliderHeader={'Pizzas'}/>
      </div>
      <div>
        <CardSlider category={2} sliderHeader={'Beverages'}/>
      </div>
      <TelephopneInfo/>
      <div>
        <CardSlider category={3} sliderHeader={'Passtas'}/>
      </div>
      <div>
        <CardSlider category={4} sliderHeader={'Ice Creams'}/>
      </div>
      <ReviewBanner/>
    </div>
  )
}

export default Home