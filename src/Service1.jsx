import React from "react";
import "./Service1.css";
import Image9 from "./assets/Image9.png";
import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import c6 from "./assets/c6.png";

const services = [
  {
    title: "Residential Construction",
    subtitle: "Crafting Homes That Last Generations",
    text: "We build independent houses, villas, duplex homes,Construction is the process involved in delivering buildings, infrastructure, industrial facilities, and associated activities through to the end of their life. It typically starts with planning, financing, and design that continues until the asset is built and ready for use. and apartment units with superior quality materials.",
    img: c1,
  },
  {
    title: "Commercial Construction",
    subtitle: "Modern Business Spaces",
    text: "We design and build offices, retail spaces, and commercial buildings Architectural Design Site plan, Construction is the process involved in delivering buildings, infrastructure, industrial facilities, and associated activities through to the end of their life. It typically starts with planning, financing, and design that continues until the asset is built and ready for use.floor plan, elevation, and section view",

    img: c2,
  },
  {
    title: "Maintanence Service",
    subtitle: "Elegant & Functional Interiors",
    text: "Transform your space with creative and modern interiorsArchitectural Design: Construction is the process involved in delivering buildings, infrastructure, industrial facilities, and associated activities through to the end of their life. It typically starts with planning, financing, and design that continues until the asset is built and ready for use.Site plan, floor plan, elevation, and section views.",
    img: c3,
  },
  {
    title: "Interior Planning and designing",
    subtitle: "Upgrade Your Space",
    text: "We renovate homes and offices with premium finishing Construction is the process involved in delivering buildings, infrastructure, industrial facilities, and associated activities through to the end of their life. It typically starts with planning, financing, and design that continues until the asset is built and ready for use.",
    img: c4,
  },
  {
    title: "Renovation and Remodelling",
    subtitle: "Smart Architecture",
    text: "Construction is the process involved in delivering buildings, infrastructure, industrial facilities, and associated activities through to the end of their life. It typically starts with planning, financing, and design that continues until the asset is built and ready for use.Efficient and innovative architectural planning services.",
    img: c5,
  },
  {
    title: "Artchitectural Plans and Approval",
    subtitle: "Reliable Support",
    text: "24/7 maintenance and support services for all projectsConstruction is the process involved in delivering buildings, infrastructure, industrial facilities, and associated activities through to the end of their life. It typically starts with planning, financing, and design that continues until the asset is built and ready for use.",
    img: c6,
  },
];

function Service1() {
  return (

    <div id="Service1">

        {/* HERO SECTION */}
      <div
        className="herooo"
        style={{ backgroundImage: `url(${Image9})` }}
      >
        <div className="overlay">
          <h1>Building Excellence Across Every Project</h1>
          <p>
            At BluePeak Infra & Constructions, we provide end-to-end construction
            solutions — from planning and design to execution and handover.<br />
            Our structured process, expert team, and strict quality standards
            ensure reliable and<br /> lasting results.
          </p>
        </div>
      </div>

      {services.map((item, index) => {
        const isReverse = index % 2 !== 0; // 2,4,6

        return (
          <div
            className={`service-row ${isReverse ? "reverse" : ""}`}
            key={index}
          >
            {/* IMAGE */}
            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>

            {/* CONTENT */}
            <div className="text-box">
              <h2>{item.title}</h2>
              <h4>{item.subtitle}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Service1;