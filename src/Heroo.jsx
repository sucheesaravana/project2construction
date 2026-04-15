import React from "react";

import "./Heroo.css";

const Heroo = () => {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>
         Experience Your Project in <span>Virtual Reality</span>
        </h1>
        <p>
          Walk through your construction project before it's built. Our VR
          technology lets you visualize every detail, make changes in real-time,
          and ensure everything meets your expectations.
        </p>
        <ul>
          <li>Immersive 3D visualization</li>
          <li>Real-time modifications</li>
          <li>Multi-user collaboration</li>
          <li>Cost-saving insights</li>
        </ul>
        <button className="cta-btn">Book Free Consultation →</button>
     </div>
     {/* RIGHT IMAGE CARD */}
      <div className="hero-right">
        <div className="image-card">
          <img
            src="/src/assets/building.png"
            alt="building"
          />
         <div className="card-badge top">
            <p>Active Projects</p>
            <h3>1,247</h3>
          </div>
        <div className="card-badge bottom">
            <p>Satisfaction rate</p>
            <h3>98%</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Heroo;