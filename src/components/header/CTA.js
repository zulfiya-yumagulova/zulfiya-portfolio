import React from "react";
import "./Header.css";
import CV from "../../images/zulfiya_cv.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
