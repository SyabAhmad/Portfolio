import React from "react";
import comp from "../assets/comp.png";
import "./Companies.css";
const Companies = () => {
  return (
    <>
      <div className="recentCompanies">
        <div className="title">
          <span>Recent Joined Companies</span>
        </div>
        <div className="companiesList">
          <div className="companies">
            <div>
              <img src={comp} alt="company image" />
            </div>
            <div>
              <h3>INeuran</h3>
              <p>React Developer</p>
            </div>
          </div>
          <div className="companies">
            <div>
              <img src={comp} alt="company image" />
            </div>
            <div>
              <h3>INeuran</h3>
              <p>React Developer</p>
            </div>
          </div>
          <div className="companies">
            <div>
              <img src={comp} alt="company image" />
            </div>
            <div>
              <h3>INeuran</h3>
              <p>React Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
