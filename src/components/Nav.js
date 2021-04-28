import React, { useEffect } from 'react';
import '../App.css'; 
import { Link } from 'react-router-dom';
import logo from '../images/logo_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Nav({cartTotalItems}) {
  
  const updateNav = () => {if (cartTotalItems > 0){
    document.getElementById('nav-cart').classList.add('nav-link-style-cart');
  } else if (cartTotalItems === 0) {
    document.getElementById('nav-cart').classList.remove('nav-link-style-cart')
  }}

  useEffect(() => {
    updateNav()
  })

  return (
    <nav>
        <Link to='/'>
          <img className="nav-logo" src={logo} alt="hoopShop"></img>
        </Link>
        <ul className="nav-links">
            <Link className="nav-link-style" to='/shop'><li>Shop</li></Link>
            <Link className="nav-link-style" to='/about'><li>About</li></Link>
            <Link className="nav-link-style" id="nav-cart" to='/cart'> {cartTotalItems} <FontAwesomeIcon icon={faShoppingCart} /></Link>
        </ul>
    </nav>
  );
}

export default Nav;
