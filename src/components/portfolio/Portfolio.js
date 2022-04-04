import React from "react";
import "./Portfolio.css";
import IMG1 from "../../images/project1.png";
import IMG2 from "../../images/project2.png";
import IMG3 from "../../images/todo-app.png";
import IMG4 from "../../images/pinit.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Tic-Tac-Toe",
    github: "https://github.com/zulfiya-yumagulova/tic-tac-toe",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "SalVeg",
    github: "https://github.com/zulfiya-yumagulova/final-project-api-six-bits",
    demo: "https://salveg.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Todo App",
    github: "https://github.com/zulfiya-yumagulova/tic-tac-toe",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "PinIt",
    github:
      "https://github.com/zulfiya-yumagulova/national-project-week-professional-artists",
    demo: "https://pinitapp.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-img">
                <img src={image} alt="project 1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-cta">
                <a className="btn" href={github} target="_blank">
                  GitHub
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
