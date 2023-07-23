import React from "react";
import profile from "../assets/profile.jpeg";
import "./RecentProjects.css";
const RecentProjects = () => {
  return (
    <>
      <div className="projects">
        <div className="title">
          <span>Recent Projects</span>
        </div>
        <div className="projectCards">
          <div className="card">
            <h2>Interview Preparation Question</h2>
            <p>Self-Project for experience</p>
            <h4>Tach Stack</h4>
            <p>HTML | CSS | JavaScript</p>
            <h4>Live at</h4>
            <p>soundvibe-vercel.app</p>
            <img src={profile} alt="Project image" />
          </div>
          <div className="card">
            <h2>Interview Preparation Question</h2>
            <p>Self-Project for experience</p>
            <h4>Tach Stack</h4>
            <p>HTML | CSS | JavaScript</p>
            <h4>Live at</h4>
            <p>soundvibe-vercel.app</p>
            <img src={profile} alt="Project image" />
          </div>
          <div className="card">
            <h2>Interview Preparation Question</h2>
            <p>Self-Project for experience</p>
            <h4>Tach Stack</h4>
            <p>HTML | CSS | JavaScript</p>
            <h4>Live at</h4>
            <p>soundvibe-vercel.app</p>
            <img src={profile} alt="Project image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
