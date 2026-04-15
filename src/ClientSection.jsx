import React from "react";
import "./ClientSection.css";
import person from "./assets/businesswoman.avif"; 

function ClientSection() {
  return (
    <div className="client-section">
      <h2 className="title">What Our Clients Say</h2>

      {/* Overlay Card */}
      <div className="testimonial-card">
        <div className="stars">
          {"★★★★★"}
        </div>

        <p className="quote">
          "Working with this team was an amazing experience. Their professionalism
          and quality exceeded our expectations."
        </p>

        <div className="client-info">
          <img src={person} alt="client" />
          <div>
            <h4>John Doe</h4>
            <span>Project Manager</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats">
        <div>
          <h3>500+</h3>
          <p>Happy Clients</p>
        </div>
        <div>
          <h3>1200+</h3>
          <p>Projects Completed</p>
        </div>
        <div>
          <h3>98.5%</h3>
          <p>Satisfaction Rate</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>
    </div>
  );
}

export default ClientSection;