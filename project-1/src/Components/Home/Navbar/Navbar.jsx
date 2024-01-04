import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
          Coffeeroaster
      </div>

      
          <ul className="nav-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Create Your Plan</li>
          </ul>
      
    </div>
  )
}

export default Navbar
