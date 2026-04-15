import React from "react";
import { FaMapMarkerAlt, FaCreditCard }from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
   <div className="why-container">
   
      <div className="banner">
        <div className="banner-content">
          <div className="icon">🤝</div>
          <div>
            <h2>Trusted by 500+ Happy Clients Across India</h2>
            <p>
              From independent homes to large commercial projects, we have
              successfully delivered spaces that stand strong and inspire confidence.
            </p>
          </div>
        </div>
      </div>
     {/* Why Choose Us Section */}
      <div className="why-section">
        <h2>Why Choose Us</h2>
        <p className="subtitle">
          Comprehensive solutions designed for modern construction projects
        </p>
        <div className="cards">
        
          <div className="card">
            <div className="card-icon">🛡️</div>
            <h3>Guaranteed Price Protection</h3>
            <p>
              No hidden costs. No surprises. Transparent and detailed quotations before project start.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">✔️</div>
            <h3>440+ Quality Checks</h3>
            <p>
              Every stage of construction undergoes strict quality inspection.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">⏱️</div>
            <h3>Timely Delivery</h3>
            <p>
              We follow structured planning and milestone tracking to ensure on-time completion.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><FaCreditCard size={40} /></div>
            <h3>Payment in Stages</h3>
            <p>
              Pay in flexible construction✔️linkes in stages for financial convenience.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><FaMapMarkerAlt size={40} /></div>
            <h3>24/7 Real-Time Tracking</h3>
            <p>
              Monitor your project progress digitally from anywhere.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
export default WhyChooseUs;