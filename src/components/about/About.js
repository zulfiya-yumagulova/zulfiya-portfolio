import React from "react";
import "./About.css";
import ME from "../../images/me-color (1).jpg";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div id="about-container" className="container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="me-image" id="me-image" />
          </div>
        </div>

        <div className="about-content">
          <p>
            I am full stack web developer. Gradueted from School Of Code's
            remote intensive bootcamp. Trained to industry standards through
            extensive focus on the fundamentals of software development, problem
            solving, pair-programming and agile project management. Regularly
            participated in hackathons and independent exploration into new
            technology by embracing challenge and pushing myself out of my
            comfort zone. I am very passionate about coding and design, good
            team player.
          </p>

          <a href="#contacts" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
