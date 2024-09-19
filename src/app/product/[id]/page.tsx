'use client';
import ProductLandingPage from '@/app/components/ProductLandingPage/ProductLandingPage';
import React from 'react';
import { useParams } from 'next/navigation';
import productData from '../../data/data.json';

function Page() {
  console.log('This is the landing page');
  const { id } = useParams(); // Get the dynamic id from the URL
  const parsedId = Number(id); // Convert id to a number for comparison

  // Find the product with the matching id
  const product = productData.products.find((product) => product.id === parsedId);

  return (
    <div>
      {product ? (
        <ProductLandingPage product={product} />
      ) : (
        <div>Page not found</div>
      )}
    </div>
  );
}

export default Page;
