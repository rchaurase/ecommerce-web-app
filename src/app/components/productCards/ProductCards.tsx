import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import productData from '../../data/data.json'
import Image from 'next/image'
function ProductCards() {
  
  const allProduct = productData.products
  
  return (
    <div className="max-w-7xl mx-auto p-4">
      {
        allProduct.map((product)=>(
          <div key={product.id}

          className="flex flex-col md:flex-row items-start md:items-center gap-6 border border-gray-200       rounded-lg shadow-md bg-white">
          <div className="w-full md:w-1/3">
          <Image
            width={500}
            height={500}
            src={product.images[0] ? String(product.images[0]) : '/fallback-image.png'}
            alt={product.title ? String(product.title) : 'Product Image'}
            className="w-full h-64 object-cover rounded-lg"
          />
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4 text-base leading-relaxed"> {product.description} </p>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-green-600 mr-4">${product.price}</span>
              <span className="text-sm text-gray-500 line-through">${((product.price)*2).toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-500"><strong className="text-gray-800">{product.brand}</strong></span>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Add to Cart</button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
                <FaHeart/>
              </button>
            </div>
        </div>
      </div>
        ))
      }
    </div>


  )
}

export default ProductCards
