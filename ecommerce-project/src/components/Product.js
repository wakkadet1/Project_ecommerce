import React from 'react';
import Check from '../assets/check.png';
import ToCart from '../assets/tocart.png';
import { CartContext } from '../App';

export default function Product({ oneProduct }) {
  const { state, dispatch } = React.useContext(CartContext);

  return (
    <>
      <div className='grid-item'>
        <img
          src={oneProduct.productimg}
          alt='Avatar'
          className='productIMG'
          style={{ width: '100%' }}
        />
        <div className='container'>
          <h4>
            <b>{oneProduct.productName}</b>
          </h4>
          <p>{oneProduct.productDetail}</p>
          <p>{oneProduct.product_price} $</p>
          {state.some((obj) => obj.productID === oneProduct.productID) ? (
            <img
              src={Check}
              className='checkIcon'
              style={{ width: '32px', height: '32px' }}
            />
          ) : (
            <img
              src={ToCart}
              className='toCartIcon'
              onClick={() => {
                dispatch({ type: 'ADD_ITEM', payload: oneProduct });
              }}
            ></img>
          )}
        </div>
      </div>
    </>
  );
}
