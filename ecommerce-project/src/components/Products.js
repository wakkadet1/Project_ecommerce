import React from 'react';
import Product from './Product';
import { useFetch } from '../custom/useFetch';
const AllProductsItems = [
  {
    productImg: `https://images.unsplash.com/photo-1635805737707-575885ab0820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80`,
    productID: 0,
    productName: 'Item#1',
    productDetail: 'Product Detail',
    product_price: 100,
    quantity: 1,
  },
  {
    productImg: `https://images.unsplash.com/photo-1635805737707-575885ab0820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80`,
    productID: 1,
    productName: 'Item#2',
    productDetail: 'Product Detail',
    product_price: 200,
    quantity: 1,
  },
  {
    productImg: `https://images.unsplash.com/photo-1635805737707-575885ab0820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80`,
    productID: 2,
    productName: 'Item#3',
    productDetail: 'Product Detail',
    product_price: 300,
    quantity: 1,
  },
  {
    productImg: `https://images.unsplash.com/photo-1635805737707-575885ab0820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80`,
    productID: 3,
    productName: 'Item#4',
    productDetail: 'Product Detail',
    product_price: 400,
    quantity: 1,
  },
];

export default function Products() {
  const { loading, products } = useFetch('/products');
  return (
    <>
      <div className='grid-container'>
        {loading
          ? null
          : products.map((element, index) => {
              return <Product oneProduct={element} key={index} />;
            })}
      </div>
    </>
  );
}
