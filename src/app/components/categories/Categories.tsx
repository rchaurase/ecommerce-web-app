'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Product } from '@/app/type/Type';

function Categories() {
  const [category,setCategory] = useState<String[]>([])
  const jsonData = 'https://dummyjson.com/products'
  useEffect(()=>{
    fetch(jsonData).then((response)=>response.json()).then((data)=>{
      const allCategories = data.products.map((product:Product)=> product.category)
      setCategory([...new Set(allCategories)] as string[]) ;
  }).catch((error)=>console.error('there is error in fetching data from api:',error))
  },[])
  return (
    <div className='flex justify-between mx-auto py-4'>
      {
        category.map((category,index)=>{
          return (
            <div 
              key={index}
              className='flex-none mt-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2xl:grid-cols-8 sm:ml-10 sm:mr-10 sm:gap-2'>
              <Link 
              href='/'
              className="bg-[#048567] text-center p-4 text-white hover:text-black rounded-full w-16 h-16 shadow-md hover:bg-gray-200 transition capitalize">
              {category}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Categories
