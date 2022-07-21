import React from 'react';
import Products from '../components/Products';
import Product from '../components/Product';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='title'>All products</h1>

      <Products />
    </div>
  );
}
