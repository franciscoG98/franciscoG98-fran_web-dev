import "./App.css";
// import React { useState } from 'react';
import React from "react";
// import Layout from "./components/layout/";
// import { Button } from "./components/button/Button";
// import Terminal from "./components/terminal/Terminal";
// import Navbar from "./components/navbar";
import Skills from "./views/skills";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="container">
      {/* <Navbar className="app-navbar" /> */}
      {/* <h1 className="title">
      Hello Netizen, welcome to my <strike>hell</strike>&nbsp;website
      </h1> */}
      {/* <Button className="button" label="clic me if u dare" /> */}
      {/* <Terminal
      className="app-terminal"
      title="[pancho@dev:~/workspace/fg-portfolio]"
      bash="pancho@user~$"
      />
      <Layout className="particles-js" /> */}
      <h1>Navbar...</h1>
      <hr />
      <Router>
        <Routes>
          <Route path="/skills" element={ <Skills />} />
          <Route path="/about" element={"Esta es la pagina de nosotros"} />
          <Route path="/contact" element={"Esta es la pagina de contacto"} />
          <Route exact path="/" element={"Esta es la pagina de Inicio"} />
        </Routes>
        <hr />
        <h4>porque no andaaaaaaa</h4>
      </Router>
    </div>
  );
}

export default App;
