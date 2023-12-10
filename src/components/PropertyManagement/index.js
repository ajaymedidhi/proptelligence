import {useState} from 'react'

import {Link, withRouter} from 'react-router-dom'
import {FaShoppingCart, FaHandshake, FaHome} from 'react-icons/fa'

import './index.css'

const PropertyManagement = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const handleCityChange = e => {
    setSelectedCity(e.target.value)
  }

  const handleOptionChange = option => {
    setSelectedOption(option)
  }
  const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Kolkata',
    'Chennai',
    'Pune',
    'Ahmedabad',
  ]
  return (
    <>
      <div className="property-management-services">
        <div className="header">
          <h2 className="pms-heading">Property Management Services</h2>
          <button>Post Property</button>
        </div>
        <div>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {cities.map(city => (
              <li key={city} style={{margin: '5px'}}>
                <Link
                  to="/prop"
                  style={{textDecoration: 'none', color: 'blue'}}
                >
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-container">
          <div className="service">
            <h3>
              <FaShoppingCart /> Buy
            </h3>
            <ul>
              <li>Property Valuation</li>
            </ul>
          </div>
          <div className="service">
            <h3>
              <FaHandshake /> Sell
            </h3>
          </div>
          <div className="service">
            <h3>
              <FaHome /> Rent
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(PropertyManagement)
