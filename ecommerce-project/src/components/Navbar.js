import React from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import Cart from '../assets/cart.png';
export default function Navbar() {
  const { state, dispatch } = React.useContext(CartContext);

  return (
    <nav className='navbar'>
      <div className='logo'>SHOPSTICK!</div>
      <ul className='nav-links'>
        <div className='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cart' className='notification'>
              <img src={Cart} className='cartIcon' />
              <span className='badge'>{state ? state.length : '0'}</span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
