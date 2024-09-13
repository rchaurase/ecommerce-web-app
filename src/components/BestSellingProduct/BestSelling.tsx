import React from 'react';
import Link from 'next/link';
import { Product } from '../../type/Type';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import productData from '../../data/data.json'; // Adjust the path as needed

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
    <Link href={`/product/${product.id}`} passHref>
      <div className="w-full">
        <div className="flex flex-row items-start">
          <div className="w-32">
            <img
              src={String(product.images[0])}
              alt={String(product.title)}
              className="w-full h-24 rounded-lg"
            />
          </div>
          <div className="w-full p-4">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
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
                ${(Number(product.price.toFixed(2)) * 2).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

function getRandomProducts(products: Product[], length: number): Product[] {
  const shuffled = [...products].sort(() => 0.5 - Math.random()); // Avoid mutating original array
  return shuffled.slice(0, length);
}

const BestSelling: React.FC = () => {
  const products = productData.products as Product[]; // Ensure correct typing
  const randomProducts = getRandomProducts(products, 4);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className='flex justify-between items-center mb-6'>
        <h1 className='font-bold text-xl shadow-xl border-b-4 border-[#048567] uppercase'>Best Selling</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 items-start">
        {randomProducts.map((product) => (
          <ProductComponent key={Number(product.id)} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
