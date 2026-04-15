import React from "react";
import "./Contact.css";
import mapp from "./assets/mapp.png";
import Image10 from "./assets/Image10.png";

const Contact = () => {
  return (
    <div id="Contact">
      {/* HERO SECTION */}
      {/* <div
        className="herooo"
        style={{ backgroundImage: `url(${Image10})` }}
      ></div> */}
      <section className="c-hero">
        <div className="overley2">
          <h1>Lets Build Something Great Together.</h1>
          <p>
            Have a project in mind? Get in touch with Blue Peak infra & Construction Today.
          </p>
        </div>
      </section>
      <div className="contact-container">

        
        <div className="contact-left">
          <h2>
            We're here to <span>help,</span><br />
            <span>anytime</span>
          </h2>

          <div className="info-grid">
            <div className="info-card">
              <div className="icon">📍</div>
              <h4>Office Address</h4>
              <p>BluePeak Infra & Constructions</p>
              <p>Chennai, Tamil Nadu, India</p>
            </div>

            <div className="info-card">
              <div className="icon">📞</div>
              <h4>Phone Number</h4>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>

            <div className="info-card">
              <div className="icon">📧</div>
              <h4>Email Address</h4>
              <p>info@bluepeak.com</p>
              <p>support@bluepeak.com</p>
            </div>

            <div className="info-card">
              <div className="icon">⏰</div>
              <h4>Business Hours</h4>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 4:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

       
        <div className="contact-right">
          <h3>Send Us a Message</h3>

          <form className="form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Enter Email Address" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="+91 Phone Number" />
              <select>
                <option>Select type</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="form-row">
              <select>
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
              </select>
            </div>

            <textarea placeholder="Message"></textarea>

            <button type="submit">Send Message ➤</button>
          </form>
        </div>

      </div>
      <div className="mapp">
        <img src={mapp}></img>
      </div>
    </div>
  );
}
export default Contact;