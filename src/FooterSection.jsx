import React from "react";
import "./FooterSection.css";
import Image8 from "./assets/Image8.png";
import Image5 from "./assets/Image5.png";

function FooterSection() {
  return (
    <>
      {/* CTA SECTION */}
      <div
        className="cta-section"
        style={{ backgroundImage: `url(${Image8})` }}
      >
        <div className="overlay1">
          <h2>
            Ready to Transform Your <span>Construction Project?</span>
          </h2>

          <p>
            Join hundreds of successful projects built with premium materials,
            expert guidance, and unmatched reliability.
          </p>

          <button className="cta-btn">
            Book Free Consultation →
          </button>

          <div className="features">
            <span>● ISO Certified</span>
            <span>● Quality Assured</span>
            <span>● Trusted Partner</span>
          </div>
        </div>

        {/* Curved Shape */}
        <div className="curve"></div>
      </div>

      {/* FOOTER SECTION */}
      <div className="footer">
        <div className="footer-container">
          {/* Logo */}
          <div className="footer-col logo-col">
            <img src={Image5} alt="logo" />
            <p>Premium Construction materials with guaranteed quality, price protection,& 24/7 support for your project</p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <p>Residential Construction</p>
            <p>Commercial Construction</p>
            <p>Maintenance Services</p>
            <p>Interior Planning & Designing</p>
            <p>Renovation & Remodeling</p>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>📍 123 Construction Ave, City 12345</p>
            <p>📞 +91-1234567890</p>
            <p>✉️ info@supportconstruction.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;