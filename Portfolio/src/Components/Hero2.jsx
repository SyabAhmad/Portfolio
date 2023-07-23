import React from "react";
import githubimage from "../assets/github.png";
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
          <div className="details1"></div>
          <div className="images"></div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
