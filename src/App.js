import React from "react";
import "./App.scss";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/containers/home/index";
import About from "./components/containers/about/index";
import Resume from "./components/containers/resumes/index";
import Skills from "./components/containers/skills/index";
import Portfolio from "./components/containers/portfolio/index";
import Contact from "./components/containers/contact/index";
import Navbar from "./components/navBar/index";
import Footer from "./components/containers/footer/index";

function App() {
  return (
    <div className="App">
      {/* navBar */}
      <Navbar />
      {/* main page content */}
      <div className="App__main-page-content">
        <Home />
        <About />
        <div>
          <Resume />
        </div>
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;
