import React from 'react';
import '../styles/Cart.css';
import { CartContext } from '../App';
import Up from '../assets/up.png';
import Down from '../assets/down.png';
import { Link } from 'react-router-dom';
export default function Checkout({ summary }) {
  const { state, dispatch } = React.useContext(CartContext);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');

  const submitOrder = async () => {
    if (state && phone && email && name && address) {
      await fetch('/sendOrder', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          address,
          products: state,
          summary: summary + 50,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          setName('');
          setPhone('');
          setEmail('');
          setAddress('');
          console.log(data);
          
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

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
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <input
                      type='text'
                      id='quantity'
                      name='quantity'
                      min='1'
                      value={element.quantity}
                      disabled
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
        <h2>Delivery Address</h2>
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
        <div className='addressForm'>
          <input
            type='text'
            placeholder='Your name'
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='Your phone number'
            value={phone}
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type='email'
            placeholder='Your email'
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            className='address'
            placeholder='Your address'
            value={address}
            required
            rows='20'
            cols='20'
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
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
            disabled={
              state.length === 0 || !name || !phone || !email || !address
                ? true
                : false
            }
            onClick={() => {
              submitOrder();
            }}
          >
            <span className='checkoutButton'>
              <a className='checkoutButtonA'></a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
