import React from 'react';
import Link from 'next/link';
import { Product } from '../../type/Type';
import { FaHeart } from 'react-icons/fa6';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface ProductProp {
  product: Product;
}

const ProductComponent: React.FC<ProductProp> = ({ product }) => {
  function renderRatings(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className='text-yellow-500' />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className='text-yellow-500' />);
      } else {
        stars.push(<FaRegStar key={i} className='text-yellow-500' />);
      }
    }
    return stars;
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group block max-w-sm mx-auto p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 relative">
        <div className="flex flex-col items-start gap-6">
          <div className="w-full relative">
            <img
              src={String(product.images[0])}
              alt={String(product.title)}
              className="w-full h-64 object-cover rounded-lg"
            />
            <button className="absolute bottom-0 left-0 right-0 mx-auto mb-4 px-4 py-2 bg-[#048567] text-white opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-transform  duration-500 ease-out">
              Quick Review
            </button>
          </div>
          <div className="w-full p-4">
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              {product.description.length > 20 ? `${product.description.slice(0, 20)}...` : product.description}
            </p>
            <div className="flex items-center mb-4">
              {renderRatings(product.reviews[0].rating)}
              <span className="ml-2 text-gray-600">({product.reviews[0].rating})</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-green-600 mr-4">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${(Number(product.price.toFixed(2)) * 2)}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-600 font-bold bg-gray-200 px-4 py-2  hover:bg-[#058678] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Add to Cart
            </button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductComponent;
