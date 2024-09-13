'use client'
import React, { useState } from 'react'
import { useEffect } from 'react'
function Slider() {
  const [currentIndex,setCurrentIndex]  = useState(0)
  const sliderImages = [
    'https://project.yahoobaba.net/ecommerce-inertia/public/banner/b2.jpg',
    'https://images.pexels.com/photos/1235542/pexels-photo-1235542.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2029239/pexels-photo-2029239.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6297080/pexels-photo-6297080.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7217789/pexels-photo-7217789.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6394581/pexels-photo-6394581.jpeg?auto=compress&cs=tinysrgb&w=600'
  ]
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentIndex(index=>(index+1)%sliderImages.length)
    },10000)
    return ()=>clearInterval(intervalId)
  },[sliderImages.length])
  return (
    <div>
      <img
      src={sliderImages[currentIndex]}
      alt='slider-image'
      className='w-full h-full object-cover'
      />
    </div>
  )
}

export default Slider
