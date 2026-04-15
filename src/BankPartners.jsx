import React from "react";
import "./BankPartners.css";

import bajaj from "./assets/bajaj.webp";
import godrej from "./assets/godrej.webp";
import hdfc_home_loan from "./assets/hdfc_home_loan.webp";
import housing from "./assets/housing.webp";
import sbi_home_loan from "./assets/sbi_home_loan.webp";

const logos = [bajaj, godrej, hdfc_home_loan, housing, sbi_home_loan];

function BankPartners() {
  return (
    <div className="bank-section">
      <h2>Our Banking Partners</h2>
      <p>Helping customers get easy access of home construction loans</p>

      <div className="slider">
        <div className="slide-track">
          {/* Duplicate logos for infinite effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt="bank" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BankPartners;