import React from 'react'
import './styles.scss'

const ProductImage = ({info}) => {
  return (
    <div className="product-left">
      <div className="other-images">
        <div className="image">
          <img src={info.productImage} alt="" />
        </div>
        <div className="image active">
          <img src={info.productImage} alt="" />
        </div>
        <div className="image">
          <img src={info.productImage} alt="" />
        </div>
      </div>
      <div className="select-image active">
          <img src={info.productImage} alt="" />
      </div>
    </div>
  )
}

export default ProductImage