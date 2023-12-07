import React, {useState} from 'react'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
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
        <h1 className="heading">Proptellegince</h1>
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
          <li>
            <Link to="/about" className="nav-link">
              Industries
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              Technologies
            </Link>
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
                  <Link to="/legal">
                    <li>Legal Services</li>
                  </Link>
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link to="/cart" className="nav-link">
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
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
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
