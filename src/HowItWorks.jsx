import React, { useEffect, useRef } from "react";
import "./HowItWorks.css";
import image1 from "./assets/image1.png";
import Image2 from "./assets/Image2.png";
import image3 from "./assets/image3.png";
import Image4 from "./assets/Image4.png";

const steps = [
  { id: 1, titlee: "Technical Consultation", text: "A technical consultant is a professional who leverages technical expertise to advise organizations on technology solutions, optimize systems, and solve complex IT-related problems.", img: image1 },
  { id: 2, titlee: "Booking.",text:"We are pleased to confirm the booking of your construction project as per the agreed scope, timeline, and budget. Our team will commence work on the scheduled start date, ensuring all materials, equipment, and skilled personnel are in place for smooth execution. This booking secures your project slot in our calendar, and any changes to the schedule will be communicated promptly", img: Image2 },
  { id: 3, titlee: "Design and Planning.",text:"The design and planning phase serves as the foundation for the successful execution of the project. During this stage, the project’s objectives, scope, and deliverables are clearly defined, ensuring alignment with stakeholder expectations. ", img: image3 },
  { id: 4, titlee: "Home Construction.",text:"Home construction is the process of designing and building a residential structure to provide safe, comfortable, and functional living spaces. It begins with planning and designing the layout, followed by preparing the site, laying the foundation, and constructing the walls, roof, and interiors.", img: Image4 },
  { id: 5, titlee: "Move-in.",text:"Mov into a new home with 10 years warrenty.our commitment to quality and customer satisfaction.", img: image1 },
];

function HowItWorks() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="title">How It Works</h2>

      <div className="timeline">
        {steps.map((step, index) => {
          const isEven = step.id % 2 === 0;

          return (
            <div
              className="timeline-item"
              key={step.id}
              ref={(el) => (refs.current[index] = el)}
            >
              {/* LEFT SIDE */}
              <div className="side left-side">
                {!isEven ? (
                  <img src={step.img} alt="" />
                ) : (
                   <div className="content-box">
                  <h3>{step.titlee}</h3>
                  {step.text && <p>{step.text}</p>}
                </div>
                )}
              </div>

              {/* CENTER CIRCLE */}
              <div className="circle">{step.id}</div>

              {/* RIGHT SIDE */}
              <div className="side right-side">
                {!isEven ? (
                <div className="content-box">
                <h3>{step.titlee}</h3>
                {step.text && <p>{step.text}</p>}
                 </div>
                ) : (
                  <img src={step.img} alt="" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks;