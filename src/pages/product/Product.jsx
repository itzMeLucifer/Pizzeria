import React,{useState,useEffect} from 'react'
import './styles.scss'
import {useParams} from 'react-router-dom'

import ReviewBanner from '../../components/reviewbanner/ReviewBanner'
import CardSlider from '../../components/cardslider/CardSlider'
import TelephoneBanner from '../../components/telephone/TelePhoneInfo'
import ProductImage from '../../components/productimage/ProductImage'
import ProductInfo from '../../components/productinfo/ProductInfo'

import { products } from '../../dummydata'

const Product = () => {
  const params = useParams();
  const [selectedProduct,setSelectedProduct] = useState({});
  useEffect(()=>{
    setSelectedProduct(...products.filter(item => item._id === Number(params.id)))
  },[params])
  return (
    <div className='product-container'>
      <div className="product-info-container">
        <ProductImage info={selectedProduct}/>
        <ProductInfo info={selectedProduct}/>
      </div>
      <TelephoneBanner/>
      <CardSlider category={Number(params.category)} sliderHeader={'Similar Products'}/>
      <ReviewBanner/>
    </div>
  )
}

export default Product