import React, { useEffect, useState } from 'react'
import { FaBars, FaBell, FaHeart, FaHome } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import profile from "../../assets/profile1.webp";
import { Link } from 'react-router-dom';

const Header = ({ onToggleAside, toggleCart }) => {


  const [cart, setCart] = useState(null);
  function displayCart() {
     // Get the cart data from localStorage
     let cartItems = localStorage.getItem("cart");
 
     // If cart data exists, parse it from JSON
     if (cartItems) {
       cartItems = JSON.parse(cartItems);
 
       setCart(cartItems);
     } else {
       // If cart data doesn't exist, display a message indicating an empty cart
       console.log("Cart is empty");
     }
   }
 
   useEffect(() => {
     displayCart();
   }, []);

  return (
    <div>
      {/* <section class="upper-nav">
        <p>
          Streamline your career success
          <span>| Start learning toward your next big milestone today.</span>
        </p>
      </section> */}
    <header>
        <div className='toogle-nav'>
          <FaBars className='header-icons' onClick={onToggleAside} />
        </div>

        <Link to={'/'} className='header-logo'><h1>DK Learning</h1></Link>


        <div className="search-bar">
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search courses here..."
        className="search-input"
      />
    
    </div>

    <div className='header-links'>
      <Link to={'/categories'}><span>Categories</span></Link>
      <Link to={'/teaching'}><span>Become a Instructor</span></Link>
      {/* <span>My learning</span> */}
    </div>
        <div className='header-aside'>
 

<FiSearch className='header-icons search-icon2' />
          <FaCartShopping className='header-icons' onClick={toggleCart}  /> <span className="red">{ cart ? cart.length : '0'}</span>
          <span className='header-btn'>
          <Link to={'/login'} ><button>Login</button></Link>&emsp;
          <Link to={'/signup'} ><button className='btn2'>Signup</button></Link>
          </span>

{/* 
                     <span className='header-icons2'><FaBell className='header-icons' />
                       <FaHeart className='header-icons' /></span>
            <img
            src={profile}
            alt="profile Image"
            className="profile-image"
          /> */}
    
        </div>
    </header>
    </div>
  )
}

export default Header