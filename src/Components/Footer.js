import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer-section" id="contact">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            
            <p className="ft-list-title">Contact Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@healthplus.com">Email:medAI@gmail.com</a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">Phone:+919001122333</a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">Instagram:medAI_official</a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">Twitter:medAI_official</a>
            </li>
          </ul>
      
          </div>
        </div>
        </div>
      </div>
  );
}

export default Footer;
