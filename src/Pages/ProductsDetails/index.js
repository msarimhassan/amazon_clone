import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import ProductDetails from './ProductDetail'
import Reviews from './Reviews'


export default function ProductDetail() {
  const [productId, setProductId] = useState('');
  const location = useLocation();
  return (
    <>
      <ProductDetails />
      <h1>{location.state.id}</h1>
      <Reviews productId={location.state.id} />
    </>
  )
}
