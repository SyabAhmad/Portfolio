import React from "react";
import githubimage from "../assets/github.png";
import js from "../assets/js.png";
import "./Hero2.css";
const Hero2 = () => {
  return (
    <>
      <div className="hero2">
        <div className="cardLarg">
          <div>
            LinkedIn
            <br />
            Connections
            <br />
            <span>1200+</span>
          </div>
          <div>
            Instagram
            <br />
            Followers
            <br />
            <span>2500+</span>
          </div>
          <div>
            GitHub
            <br />
            Followers
            <br />
            <span>4120+</span>
          </div>
          <div className="githubImage">
            <img src={githubimage} alt="" />
          </div>
        </div>
        <div className="recent">
          <div className="recentimages">
            <div className="imageLayout">
              <img src={js} alt="" />
            </div>
            <div className="imageLayout">
              <img src={js} alt="" />
            </div>
            <div className="imageLayout">
              <img src={js} alt="" />
            </div>
            <div className="imageLayout">
              <img src={js} alt="" />
            </div>
          </div>
          <div className="details1">
            <h3 className="details2">Recent Programming Languages</h3>
            <h5 className="roleDetails">HTML | CSS | JavaScript | React-JS</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
