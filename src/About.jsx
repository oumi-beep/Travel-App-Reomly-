import React from "react";
import "./about_css.scss"; // Make sure you have your styles defined in this file

// Import images
import missionImg from "./image/mession.jpg";
import teamImg from "./image/team.jpg";

const About = () => {
  return (
    <section className="about container section">
      <div className="secContainer">
        <div className="secInfo">
          <h2 className="secTitle">About Us</h2>
          <p>Welcome to our company! We are dedicated to providing the best service to our customers. Our team is committed to excellence and innovation.</p>
        </div>

        <div className="mainContent">
          <div className="aboutContent grid">
            <div className="aboutText">
              <h3>Our Mission</h3>
              <p>Our mission is to deliver high-quality products that bring value to our customers. We strive to innovate and improve continuously.</p>
            </div>
            <div className="aboutImage">
              <img src={missionImg} alt="Our Mission" />
            </div>
          </div>

          <div className="aboutContent grid">
            <div className="aboutImage">
              <img src={teamImg} alt="Our Team" />
            </div>
            <div className="aboutText">
              <h3>Our Team</h3>
              <p>We have a diverse and talented team of professionals who are passionate about what they do. Together, we work towards achieving our common goals.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;