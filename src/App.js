import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Nav from "./components/nav/Nav.js";
import About from "./components/about/About.js";
import Skills from "./components/skills/Skills.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Contacts from "./components/contacts/Contacts.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
