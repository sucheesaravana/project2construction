import React, { useState } from "react";
import "./Projects.css";
import Image10 from "./assets/Image10.png";
import pr1 from "./assets/pr1.png";
import pr2 from "./assets/pr2.png";
import pr3 from "./assets/pr3.png";
import pr4 from "./assets/pr4.png";
import pr5 from "./assets/pr5.png";
import pr6 from "./assets/pr6.png";  

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Lake-View Villa - Chennai",
      details: "Chennai | 3,200 sq.ft.",
      category: ["residential", "interior"],
      img: pr1,
    },
    {
      id: 2,
      title: "Metro Business Hub - Bangalore",
      details: "Bangalore | 12,000 sq.ft.",
      category: ["commercial", "interior"],
      img: pr2,
    },
    {
      id: 3,
      title: "Green Meadows Residency - Coimbatore",
      details: "Coimbatore | 2,400 sq.ft.",
      category: ["commercial", "interior"],
      img: pr3,
    },
    {
      id: 4,
      title: "Skyline Retail Plaza",
      details: "Hyderabad | 8,400 sq.ft.",
      category: ["interior"],
      img: pr4,
    },
    {
      id: 5,
      title: "Heritage Home Renovation",
      details: "Chennai | 1,800 sq.ft.",
      category: ["renovation"],
      img: pr5,
    },
    {
      id: 6,
      title: "Palm Grove Apartment",
      details: "Trichy | 15,000 sq.ft.",
      category: ["residential"],
      img: pr6,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <div id="Projects">
      {/* Hero Section */}
      <section className="herooooo">
        <div className="overley2">
          <h1>Building Landmarks. Delivering Excellence.</h1>
          <p>
            At BluePeak Infra & Constructions, every project reflects our
            commitment to quality, transparency, and timely delivery.
          </p>
        </div>
      </section>
      
       

      {/* Buttons */}
      <div className="buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("residential")}>Residential</button>
        <button onClick={() => setFilter("commercial")}>Commercial</button>
        <button onClick={() => setFilter("interior")}>Interior</button>
        <button onClick={() => setFilter("renovation")}>Renovation</button>
      </div>

      {/* Grid */}
      <div className="grid">
        {filteredProjects.map((project) => (
          <div className="card1" key={project.id}>
            <img src={project.img} alt={project.title} />
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Projects;