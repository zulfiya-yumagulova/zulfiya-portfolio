import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <div className="container skills-container">
        <div id="front-end">
          <h3 className="text">Front End</h3>
          <div className="skills-content">
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>
        {/* End of front-end */}

        <div className="back-end">
          <h4 className="text">Back End</h4>
          <div className="skills-content">
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <h4>Express</h4>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <h4>Heroku</h4>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <h4>PostgreSQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
