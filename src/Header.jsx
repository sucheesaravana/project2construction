import "./Header.css";
import React from "react";
// import image5 from "./assets/image5"

const Header = () => {
    return (
        <div className="abc">
        <header className="navbar">
          <div className="logo">
            <img src="/src/assets/image5.png"
            alt="building"/>
          </div>
          <nav className="nav-links">
          <a style={{color:"orange"}} href="#">Home</a>
          <a href="#Service1">Services</a>
          <a href="#Projects">Projects</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
          </nav>

          <button className="cta-btn">Free Consultation →</button>
      </header>

      {/* Hero Section */}
      <section className="hero1">
        <div className="overlay"></div>

        <div className="hero-content">
          {/* Left Text */}
          <div className="left">
            <h1>
              Build Your Future with <br />
              <span>Confidence</span>
            </h1>
            <p>
              Premium construction materials with guaranteed quality checks,
              price protection, and 24/7 project tracking.
            </p>
          </div>

          {/* Right Form */}
          <div className="form-card">
            <h3>Talk to Our Expert</h3>

            <input type="text" placeholder="Name" />

            <div className="phone-input">
              <span>IN +91</span>
              <input type="text" placeholder="Phone Number" />
            </div>

            <label>Project Type</label>
            <select>
              <option>Select type</option>
              <option>Residential</option>
              <option>Commercial</option>
            </select>

            <label>Location</label>
            <select>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>

            <button className="submit-btn">
              Book Free Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
    
  );
}
export default Header;
    