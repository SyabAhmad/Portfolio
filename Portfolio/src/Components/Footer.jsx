import React from "react";
import comp from "../assets/comp.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footerSection">
        <div className="socialMedia">
          <div>
            <span>Social Media</span>
          </div>
          <div className="social">
            <img src={comp} alt="image" />
            <img src={comp} alt="image" />
            <img src={comp} alt="image" />
            <img src={comp} alt="image" />
          </div>
        </div>
        <div className="prjectNames">
          <div className="projectslinks">
            <span>Projects Name</span>
          </div>
          <div>
            <ul>
              <li>GPA Calculator</li>
              <li>GPA Calculator</li>
              <li>GPA Calculator</li>
              <li>GPA Calculator</li>
              <li>GPA Calculator</li>
              <li>GPA Calculator</li>
            </ul>
          </div>
        </div>
        <div className="Links">
          <div className="projectslinks">
            <span>Links</span>
          </div>
          <div>
            <ul>
              <li> Links</li>
              <li> Links</li>
              <li> Links</li>
              <li> Links</li>
              <li> Links</li>
              <li> Links</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
