import React from "react";
import "./About.css";
import download from "./assets/download.webp";
import Image2 from "./assets/Image2.png";
import P1 from "./assets/P1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
 const About=()=> {
  return (
    <div id="About">
      {/* HERO SECTION */}
      <section className="herooooo">
        <div className="overley2">
          <h1>Building Landmarks. Delivering Excellence.</h1>
          <p>
            At BluePeak Infra & Constructions, every project reflects our
            commitment to quality, transparency, and timely delivery.
          </p>
        </div>
      </section>

      {/* STATS CARDS */}
      <div className="stats-container">
        <div className="card">500+<span>Happy Clients</span></div>
        <div className="card">1,200+<span>Projects Completed</span></div>
        <div className="card">98.5%<span>Satisfaction Rate</span></div>
        <div className="card">24/7<span>Support Available</span></div>
      </div>

      {/* OUR STORY */}
      <section className="story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            BluePeak Infra & Constructions was founded with a mission to bring
            transparency, quality, and reliability into the construction
            industry. What began as a small team has grown into a trusted partner
            delivering structured planning and high-quality projects.We are pleased to confirm the booking of your construction project as per the agreed scope, timeline, and budget. Our team will commence work on the scheduled start date, ensuring all materials, equipment, and skilled personnel are in place for smooth execution. This booking secures your project slot in our calendar, and any changes to the schedule will be communicated promptly.
          </p>
        </div>

        <div className="story-images">
          <img
            src= {download}
            alt="construction"
          />
          <img
            src={Image2}
            alt="meeting"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section">
        <div className="mv-card">
          <div className="icon">🎯</div>
          <h3>Mission</h3>
          <p>
            Deliver high-quality construction with transparency and innovation.
          </p>
        </div>

        <div className="mv-card1">
          <div className="icon">👁️</div>
          <h3>Vision</h3>
          <p>
            To become a leading construction company known for excellence and
            trust.
          </p>
        </div>
      </section>
      {/* CORE VALUES */}
<section className="core-values">
  <h2>Our Core Values</h2>

  <div className="values-container">
    <div className="value-card">
      <div className="icon">🤝</div>
      <h3>Integrity</h3>
      <p>
        We maintain complete transparency in pricing, communication, and
        project execution to build lasting trust.
      </p>
    </div>

    <div className="value-card">
      <div className="icon">✅</div>
      <h3>Quality</h3>
      <p>
        Strict quality checks ensure every structure is strong, safe, and
        durable.
      </p>
    </div>

    <div className="value-card">
      <div className="icon">🔥</div>
      <h3>Commitment</h3>
      <p>
        We are dedicated to delivering projects on time while maintaining
        the highest standards.
      </p>
    </div>

    <div className="value-card">
      <div className="icon">🎯</div>
      <h3>Customer Focus</h3>
      <p>
        We design and build projects around client needs and long-term
        satisfaction.
      </p>
    </div>
  </div>
</section>

{/* TEAM SECTION */}
<section className="team">
  <h2>Meet Our Team</h2>
  <p className="subtitle">
    Experienced professionals dedicated to your success
  </p>

  <div className="team-container">
    <div className="team-card">
      <img src={P1} alt="" />
      <h4>Robert Anderson</h4>
    </div>

    <div className="team-card">
      <img src={p2} alt="" />
      <h4>Jennifer Martinez</h4>
    </div>

    <div className="team-card">
      <img src={p3} alt="" />
      <h4>Michael Thompson</h4>
    </div>

    <div className="team-card">
      <img src={p4} alt="" />
      <h4>Sarah Williams</h4>
    </div>
  </div>
</section>
    </div>
  );
}
export default About;