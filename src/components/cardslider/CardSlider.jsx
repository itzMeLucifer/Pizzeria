import React,{useState,useEffect} from 'react'
import './styles.scss'
import Card from './card/Card'

import {useNavigate} from 'react-router-dom'

import {products} from '../../dummydata'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Skeleton } from '@mui/material';
const CardSlider = ({category, sliderHeader}) => {
  const [items,setItems] = useState([])
  const [autoSlide,setAutoSlide] = useState(0)
  const [cardIdx,setCardIdx] = useState(0)
  const [leftPx,setLeftPx] = useState(0)
  const [maxCardCount,setMaxCardCount] = useState(0)
  const [isloading,setIsLoading] = useState(false)
  const [fetched,setFetched] = useState('')
  const navigate = useNavigate()

  const handleCardScroll = (direction) => {
    if(direction === 'l'){
      if(cardIdx !== 0 ){
        setCardIdx(cardIdx-1)
      }
    }
    if(direction === 'r'){
      if(cardIdx !== maxCardCount  && maxCardCount > 0){
        setAutoSlide(1)
        setCardIdx(cardIdx+1)
      }
    }
  }
  useEffect(() => {
    if(fetched === 'done')
      setIsLoading(false)
  },[fetched])

  useEffect(()=>{
    setFetched('start')
    setIsLoading(true)
    setLeftPx(window.innerWidth - 40 - (240 * (Math.floor((window.innerWidth-40)/240))))
    switch(category){
      case 1: 
      setTimeout(() => {
        setFetched('done')
        setItems(products.filter((item) => item.productCategory === 1));
      }, 0);
        break;
      case 2: 
      setTimeout(() => {
        setFetched('done')
        setItems(products.filter((item) => item.productCategory === 2));
      }, 0);
        break;
      case 3: 
      setTimeout(() => {
        setFetched('done')
        setItems(products.filter((item) => item.productCategory === 3));
      }, 0);
        break;
      case 4: 
      setTimeout(() => {
        setFetched('done')
        setItems(products.filter((item) => item.productCategory === 4));
      }, 0);
      break;
        default:break;
    }
  },[category])

  useEffect(() => {
    setMaxCardCount(items.length - (Math.floor((window.innerWidth-40)/240)))
  },[items])

  const handleMovetoCategoryPage = () => {
    switch(category){
      case 1:
        navigate('/category/1')
        break;
      case 2:
        navigate('/category/2')
        break;
      case 3:
        navigate('/category/3')
        break;
      case 4:
        navigate('/category/4')
        break;
      default :
        break;
    }
  }

  const cardSkeleton = (
    <div className="card">
      <div className="product-image-container">
      <Skeleton sx={{ bgcolor: 'grey.400' }}  variant="rectanglular" height={150}/>
      </div>
      <div className="product-info">
        <Skeleton sx={{ bgcolor: 'grey.400' }}  variant="text" width={150}/>
        <Skeleton sx={{ bgcolor: 'grey.400' }}  variant="text"/>
        <br/>
        <div>
        <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rectanglular" height={40}/>
      <br/>
        </div>
        <Skeleton sx={{ bgcolor: 'grey.400' }}  variant="rectanglular" width={150} height={30}/>
      </div>
    </div>
  )

  return (
    <div className='card-slider-container'>
      <div className="slider-header">
        <h2>{sliderHeader}</h2>
        <button onClick={() => handleMovetoCategoryPage()}>More<span><ArrowForwardIcon className='icon'/></span></button>
      </div>
      <div className='slider-container'>
        <div className="prev-btn prev" onClick={()=>handleCardScroll('l')}><ArrowBackIcon className='icon'/></div>  
        <div className="slider">
          <div className="slider-box" id='scroll-box' style={{transform:`${leftPx > 0 && leftPx === 0?`translateX(${-240*cardIdx}px)`: cardIdx < maxCardCount ?`translateX(${-240*cardIdx}px)`:autoSlide === 0?null:`translateX(${-((240*cardIdx+1)-leftPx)}px)`}`}}>
            {
              !isloading?
              items.map(item => (
                <div className='item'>
                  <Card key={item._id} data={item}/>
                </div>
              )):[1,2,3,4,5,6,7].map(item => (
                <div className='item' key={item}>
                  {
                    cardSkeleton
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div className="prev-btn next" onClick={()=>handleCardScroll('r')}><ArrowForwardIcon className='icon'/></div>
      </div>
    </div>
  )
}

export default CardSlider