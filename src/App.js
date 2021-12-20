import "./App.css";
import React from "react";
import Layout from "./components/layout/";
import Navbar from "./components/navbar";

// import { Button } from "./components/button/Button";

import Home from "./views/home";
import Skills from "./views/skills";
import Contact from "./views/contact";
import Work from "./views/work";
import About from "./views/about";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      {/* <h1 className="title">
      Hello Netizen, welcome to my <strike>hell</strike>&nbsp;website
      </h1> */}
      {/* <Button className="button" label="clic me if u dare" /> */}
      <Layout className="particles-js" />
      <Router>
        <Navbar className="app-navbar" />
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
