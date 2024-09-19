'use client'
import React from 'react';
import ImageSlider from './ImageSlider';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/store/slices/cartSlice';
import { Product } from '@/app/type/Type';
import { FaHeart } from 'react-icons/fa';
import { addToWishlist } from '@/app/store/slices/wishlistSlice';
interface ProductLandingPageProps {
  product: Product;
}
function ProductLandingPage({ product }: ProductLandingPageProps) {
  const dispatch = useDispatch();

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(addToCart(product));
  }
  function handleWishlist(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(addToWishlist(product));
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      
      {/* Product Image and Details */}
      <section className="flex flex-col md:flex-row items-center mt-12 w-full max-w-6xl px-4 md:px-8">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center">
          <ImageSlider images={product.images} />
        </div>
        {/* Product Information */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mt-2 font-bold">{product.category}</p>
          </header>

          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-gray-500 line-through ml-2">
              ${(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)}
            </span>
            <span className="ml-2 text-green-600">
              Save {product.discountPercentage}%!
            </span>
          </div>
          <div className="mt-2 text-yellow-500 font-semibold">
            Rating: {product.rating} / 5
          </div>
          <div className="mt-2">
            <span
              className={`inline-block px-2 py-1 rounded-full text-white text-sm ${
                product.availabilityStatus === 'Low Stock'
                  ? 'bg-red-500'
                  : 'bg-green-500'
              }`}
            >
              {product.availabilityStatus}
            </span>
          </div>

          <button 
            onClick={handleAddToCart} 
            className="mt-6 bg-[#048567] text-white px-6 py-3 rounded-lg hover:bg-[#39efc4]"
          >
            Add to Cart
          </button>
          <button
            onClick={handleWishlist}
            className="bg-gray-300 text-gray-800 px-6 py-3 ml-3 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
              <FaHeart/>
            </button>
          <button className="mt-6 ml-3 bg-[#048567] text-white px-6 py-3 rounded-lg hover:bg-[#39efc4]">
            Buy Now
          </button>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="w-full max-w-6xl mt-12 px-4 md:px-8">
        <p className="text-gray-600">{product.description}</p>

        <h2 className="text-2xl font-semibold text-gray-800">Product Details</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">Brand:</p>
            <p>{product.brand}</p>
          </div>
          <div>
            <p className="font-semibold">SKU:</p>
            <p>{product.sku}</p>
          </div>
          <div>
            <p className="font-semibold">Weight:</p>
            <p>{product.weight} oz</p>
          </div>
          <div>
            <p className="font-semibold">Dimensions:</p>
            <p>{`W: ${product.dimensions.width} x H: ${product.dimensions.height} x D: ${product.dimensions.depth}`}</p>
          </div>
          <div>
            <p className="font-semibold">Warranty:</p>
            <p>{product.warrantyInformation}</p>
          </div>
          <div>
            <p className="font-semibold">Shipping Information:</p>
            <p>{product.shippingInformation}</p>
          </div>
          <div>
            <p className="font-semibold">Return Policy:</p>
            <p>{product.returnPolicy}</p>
          </div>
          <div>
            <p className="font-semibold">Minimum Order Quantity:</p>
            <p>{product.minimumOrderQuantity}</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full max-w-6xl mt-12 px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
        <div className="mt-4 space-y-6">
          {product.reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{review.reviewerName}</p>
                <p className="text-yellow-500 font-bold">{review.rating} / 5</p>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductLandingPage;
