import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Welcome to Proptelligence! Your Gateway to Revolutionary Proptech
          Solutions!
        </h1>
        <img
          src="https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          At Proptelligence, we spearhead a Proptech revolution by harnessing
          the potential of Synthetic Data, propelling the Real Estate and Legal
          industries into the future using cutting-edge, disruptive
          technologies.
        </p>
      </div>
      <img
        src="https://img.freepik.com/premium-photo/house-growth-chart-real-estate-market-concept-generative-ai_609002-980.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>

    <div className="service-section">
      <h2 className="service-heading">Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <Link to="/prop">
            <img
              src="https://img.freepik.com/premium-vector/security-infests-house-agrees-isometric-illustration_18660-608.jpg"
              alt="Service 1"
              className="service-image"
            />
          </Link>
          <h3>Property Management Services</h3>
          <p>Efficient Solutions for Real Estate Management</p>
        </div>
        <div className="service-item">
          <Link to="/legal">
            <img
              src="https://img.freepik.com/premium-photo/consultation-male-lawyer-business-woman-customer_28283-887.jpg"
              alt="Service 2"
              className="service-image"
            />
          </Link>
          <h3>Legal Services</h3>
          <p>Expert Legal Guidance for Seamless Real Estate Transactions</p>
        </div>
      </div>
    </div>
  </>
)

export default Home
