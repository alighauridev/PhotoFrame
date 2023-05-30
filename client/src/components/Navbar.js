import React from 'react'
import '../scss/Navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="mega-menu-parent">
      <nav>
        <div className="wrapper">
          <div className="logo">

          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times" />
            </label>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/frames">Frame</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>






          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars" />
          </label>
        </div>
      </nav>
    </div>

  )
}

export default Navbar