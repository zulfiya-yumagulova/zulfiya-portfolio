import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

function Nav() {
  const [activeNav, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsCardChecklist />
      </a>
      <a
        href="#contacts"
        onClick={() => setActive("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
