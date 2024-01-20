import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header_parent'>
      <div className="logo">
        <h3>logo</h3>
      </div>
      <div className="navbar">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
