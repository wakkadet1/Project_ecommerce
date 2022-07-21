import React from 'react';
import '../styles/Cart.css';
import { CartContext } from '../App';
import Up from '../assets/up.png';
import Down from '../assets/down.png';
import { Link } from 'react-router-dom';
export default function Cart({ summary }) {
  const { state, dispatch } = React.useContext(CartContext);

  return (
    <div className='CartBox'>
      <div className='LeftBox'>
        <div className='CartTitle'>
          <h2>Shopping Cart</h2>
          <h2>{state ? state.length : '0'} Items</h2>
        </div>
        <div
          style={{
            borderBottom: '4px solid rgb(171 171 171)',
            width: '100%',
            marginTop: '16px',
          }}
        />
        {/* <div className='ProductDetail'>
          <p>PRODUCT DETAILS</p>
          <p>QUANTITY</p>
          <p>PRICE</p>
          <p>TOTAL</p>
        </div> */}

        {state.length > 0
          ? state.map((element, index) => {
              return (
                <div className='ProductDetail' key={index}>
                  <img
                    src={element.productimg}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '160px',
                      maxHeight: '160px',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <p>{element.productName}</p>
                    <p>{element.productDetail}</p>
                    <button
                      onClick={() => {
                        dispatch({ type: 'REMOVE_ITEM', payload: element });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={Up}
                      className='updown'
                      onClick={() => {
                        dispatch({ type: 'ADD_QUANTITY', payload: element });
                      }}
                    />
                    <input
                      type='text'
                      id='quantity'
                      name='quantity'
                      min='1'
                      value={element.quantity}
                      disabled
                    />
                    <img
                      src={Down}
                      className='updown'
                      onClick={() => {
                        dispatch({ type: 'SUB_QUANTITY', payload: element });
                      }}
                    />
                  </div>
                  <p>{element.product_price}</p>
                  <p>{element.product_price * element.quantity}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className='RightBox'>
        <h2>Order Summary</h2>
        <div
          style={{
            borderBottom: '4px solid rgb(171 171 171)',
            width: '100%',
            marginTop: '16px',
          }}
        />
        <div className='OrderTitle'>
          <p>Items {state.length}</p>
          <p>{summary} $</p>
        </div>
        <div
          style={{
            padding: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            height: '220px',
          }}
        >
          <p>SHIPPING</p>
          <select disabled>
            <option value='1'>Standard Delivery - 50$</option>
          </select>
          <p>PROMO CODE</p>
          <input type='text' disabled placeholder='Enter your code' />
        </div>
        <div
          style={{
            borderBottom: '2px solid rgb(171 171 171)',
            width: '100%',
            marginTop: '16px',
          }}
        />
        <div className='OrderTitle'>
          <p>TOTAL COST</p>
          <p>{summary + 50} $</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className='Button'
            style={{ width: '180px', height: '50px', margin: '16px' }}
            onClick={() => {
              dispatch({ type: 'CLEAR_CART' });
            }}
          >
            <span className='clearButton'>
              <a className='clearButtonA'></a>
            </span>
          </button>
          <Link
            to='/checkout'
            className='Button'
            style={{ width: '180px', height: '50px', margin: '16px' }}
            disabled={state.length === 0 ? true : false}
          >
            <span className='checkoutButton'>
              <a className='checkoutButtonA'></a>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
