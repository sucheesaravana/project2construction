import React from "react";
import "./Header.css";
import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import c6 from "./assets/c6.png";
const ServiceCard  = ({ image, title, desc }) => {
  return (
    <div className="service-card">
      
      <div className="image-wrapper">
        <img src={image} alt={title} />
        
        <div className="overlay-btn">
          <button>View Details ➤</button>
        </div>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Services() {
  const data = [
    {
      title: "Residential Construction",
      desc: "Custom-built homes with quality materials and timely delivery.",
      image: c1
    },
    {
      title: "Commercial Construction",
      desc: "Modern and durable spaces designed for business growth.",
      image: c2
    },
    {
      title: "Maintenance Services",
      desc: "Complete repair and upkeep solutions for your property.",
      image: c3
    },
    {
      title: "Interior Planning and Designing",
      desc: "Smart, stylish interiors tailored to your lifestyle.",
      image: c4
    },
    {
      title: "Renovation and Remodeling",
      desc: "Upgrade old space into modern and functional design.",
      image: c5
    },
    {
      title: "Architectural plans",
      desc: "Accurate blue-print and approval ready design.",
      image: c6
    }
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        {data.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>

      
    </section>
  );
}

export default Services;