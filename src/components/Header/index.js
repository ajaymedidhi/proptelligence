import React, {useState} from 'react'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const [showServicesPopup, setShowServicesPopup] = useState(false)

  const toggleServicesPopup = () => {
    setShowServicesPopup(!showServicesPopup)
  }

  const closeServicesPopup = () => {
    setShowServicesPopup(false)
  }
  const [activeNavItem, setActiveNavItem] = useState(null)

  const handleItemClick = index => {
    setActiveNavItem(index)
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1702144766/097ggh_s7g2pi.png"
            alt="website logo"
          />
        </Link>

        <ul className="nav-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${activeNavItem === 1 ? 'active' : ''}`}
              onClick={() => handleItemClick(1)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>
          <li
            className="link-item"
            onMouseEnter={toggleServicesPopup}
            onMouseLeave={closeServicesPopup}
          >
            <span className="nav-link">Solutions</span>
            {showServicesPopup && (
              <div className="services-popup">
                <ul className="services-list">
                  <Link to="/prop">
                    <li className="nav-link1">Industries</li>
                  </Link>
                  <Link to="/technology">
                    <li className="nav-link1"> Technologies</li>
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li
            className="link-item"
            onMouseEnter={toggleServicesPopup}
            onMouseLeave={closeServicesPopup}
          >
            <span className="nav-link">Services</span>
            {showServicesPopup && (
              <div className="services-popup">
                <ul className="services-list">
                  <Link to="/prop">
                    <li>Property Management Services</li>
                  </Link>
                  <a href="https://ntadvocates.in">
                    <li>Legal Services</li>
                  </a>
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Login / Sign Up
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li className="nav-menu-item-mobile">
              <img
                src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1702144766/097ggh_s7g2pi.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/products">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/cart">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
