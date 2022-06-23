import React from "react";
import "./Header.css";
import CTA from "./CTA.js";
import ME from "../../images/photo-of-me.jpg";
import Socials from "./Socials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Zulfiya Yumagulova</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        {/* <CTA /> */}
        <Socials />
        <div className="me">
          <img src={ME} alt="me" id="img-me" />
        </div>
        <a href="#contacts" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
