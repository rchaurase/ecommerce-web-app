import React from 'react';
import { Product } from '@/app/type/Type';
import productData from '../../data/data.json'; // Adjust the path as needed
import ProductComponent from '../productCards/productComponent';
import Link from 'next/link';

// Fisher-Yates Shuffle for better randomization
function getRandomProducts(products: Product[], length: number): Product[] {
  const shuffled = products.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, length);
}

const LatestProduct: React.FC = () => {
  const products = productData.products as Product[]; // Ensure the data structure matches the type
  const randomProducts = getRandomProducts(products, 4);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold ml-10 shadow-xl border-b-4 border-[#048567] uppercase">
          Latest Product
        </h1>
        <Link href="/" className="px-5 py-2 text-white rounded-sm bg-[#048567] text-right mr-10">
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {randomProducts.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
