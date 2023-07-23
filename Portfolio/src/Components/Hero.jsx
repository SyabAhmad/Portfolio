import React from "react";
import profile from "../assets/profile.jpeg";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <main>
        <div className="nameDetails">
          <h2 className="nameAnd">Hey! This is Syed Syab</h2>
          <h3 className="roleAnd">Front-End Developer</h3>
          <h4 className="detailsAnd">
            Syed Syab, a proficient front-end developer and data analyst, blends
            creativity and technical expertise to craft visually appealing and
            functional websites. His analytical acumen enables him to derive
            valuable insights from complex datasets, empowering informed
            decision-making. Keeping abreast of industry trends, Syed
            consistently delivers innovative solutions, making him a valuable
            asset in the digital world.
          </h4>
        </div>
        <div className="image">
          <img src={profile} alt="Profile Image" />
        </div>
      </main>
    </>
  );
};

export default Hero;
