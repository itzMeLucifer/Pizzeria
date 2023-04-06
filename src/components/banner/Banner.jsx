import React,{useState,useEffect} from 'react'
import './styles.scss'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../../dummydata'

import { Skeleton } from '@mui/material';

const Banner = ({category}) => {
  const [idx ,setIdx] = useState(0);
  const [items,setItems] = useState([])
  const [isloading,setIsLoading] = useState(false)
  const [fetched,setFetched] = useState('')

  useEffect(() => {
    if(fetched === 'done'){
      setIsLoading(false)
    }
  }, [fetched])
  

  useEffect(() => {
    setIsLoading(true);
    setFetched('start')
    switch (category) {
      case 1:
        setTimeout(() => {
          setFetched('done')
          setItems(sliderItems.filter((item) => item.category === 1));
        }, 0);
        break;
      case 2:
        setTimeout(() => {
          setFetched('done')
          setItems(sliderItems.filter((item) => item.category === 2));
        }, 0);
        break;
      case 3:
        setTimeout(() => {
          setFetched('done')
          setItems(sliderItems.filter((item) => item.category === 3));
        }, 0);
        break;
      case 4:
        setTimeout(() => {
          setFetched('done')
          setItems(sliderItems.filter((item) => item.category === 4));
        }, 0);
        break;
      default:
        if(window.location.pathname === '/'){
          setTimeout(() => {
            setFetched('done')
            setItems(sliderItems.filter((item) => item._id === 1 ||item._id === 5||item._id === 9||item._id === 13));
          }, 0);
        }
        break;
    }
  },[category])

  const handleScroll = (direction) => {
    if(direction === 'l'){
      if(idx !== 0 ){
        setIdx(idx-1)
      }
    }
    if(direction === 'r'){
      if(idx !== items.length-1){
        setIdx(idx+1)
      }
    }
  }

  const bannerSkeleton = (
    <div className='skeleton'>
      <Skeleton variant="rectanglular" height={500}/>
    </div>
  )
  return (
    <div className='banner-container'>
      <div className="left-arrow"><ArrowBackIosIcon className='icon' onClick={()=>handleScroll('l')}/></div>
      <div className="banner-image-container">
        <div className="banner-slider"id='banner-slider' style={{transform:`translateX(${-100*idx}vw)`}}>
          {
            !isloading?
            items?.map(item => (
              <div className="banner" key={item._id}>
                <img src={item.slideImage} alt="" />
              </div>
            )):bannerSkeleton
          }
        </div>
      </div>
      <div className="right-arrow"><ArrowForwardIosIcon className='icon' onClick={()=>handleScroll('r')}/></div>
    </div>
  ) 
}

export default Banner