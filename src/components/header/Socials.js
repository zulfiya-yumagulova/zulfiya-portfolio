import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

function Socials() {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/zulfiya-yumagulova-7929ab1b8/"
        target="_blank"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>
      <a
        href="https://github.com/zulfiya-yumagulova?tab=repositories"
        target="_blank"
      >
        {" "}
        <FaGithub />{" "}
      </a>
      <a href="https://www.codewars.com/users/zulfiya-yumagulova">
        {" "}
        <SiCodewars />{" "}
      </a>
    </div>
  );
}

export default Socials;
