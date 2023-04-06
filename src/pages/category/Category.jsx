import React, { useEffect, useState }  from 'react'
import './styles.scss';

import {useParams} from 'react-router-dom'

import Banner from '../../components/banner/Banner'
import Card from '../../components/cardslider/card/Card'
import {Skeleton} from '@mui/material'

import {products} from '../../dummydata'

const Category = () => {
  const params = useParams()
  const [items,setItems] = useState([])
  const [headerText,setHEaderText] = useState('')
  const [subText,setSubText]= useState('')
  const [isLoading,setIsLoading] = useState(false)
  const [fetched,setFetched] = useState('')

  useEffect(() => {
    if(fetched === 'done')
      setIsLoading(false)
  }, [fetched])
  

  useEffect(() => {
    setIsLoading(true)
    setFetched('start')
    switch(Number(params.category)){
      case 1 : 
      setTimeout(() => {
        setItems(products.filter((item) => item.productCategory === 1))
        setFetched('done')
      },0)
        setHEaderText('Pizza')
        setSubText('Pizza, A dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.')
        break;
      case 2 : 
      setTimeout(() => {
        setItems(products.filter((item) => item.productCategory === 2))
        setFetched('done')
      },0)
        setHEaderText('Beverages')
        setSubText('A drink or beverage is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, juice, smoothies and soft drinks. Traditionally warm beverages include coffee, tea, and hot chocolate. Caffeinated drinks that contain the stimulant caffeine have a long history.')
        break;
      case 3 : 
      setTimeout(() => {
        setItems(products.filter((item) => item.productCategory === 3))
        setFetched('done')
      },0)
        setHEaderText('Paasta')
        setSubText('Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste and texture, or as a gluten-free alternative. Pasta is a staple food of Italian cuisine.')
        break;
      case 4 : 
      setTimeout(() => {
        setItems(products.filter((item) => item.productCategory === 4))
        setFetched('done')
      },0)
        setHEaderText('Ice Creams')
        setSubText('Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored cream base and liquid nitrogen together. Food coloring is sometimes added, in addition to stabilizers.')
        break;
      default:
        break;
    }
  },[params.category,setItems])

  const reviewSkeleton = (
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
    <div className='category-container'>
      <Banner category={Number(params.category)}/>
      <div className="category-items-container">
        <h2>{headerText}</h2>
        <p className='subtext'>{subText}</p>
        <div className="item-box">
          {
            !isLoading?items.map(item => (
              <Card key={item.id} data={item}/>
            )):[0,1,2,3,4,5,6,7,8,9].map(() => (
                reviewSkeleton
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Category