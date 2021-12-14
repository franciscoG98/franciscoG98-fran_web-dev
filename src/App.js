import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App" id="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://franciscog98.github.io/portfolio/"
          target="__blank"
          rel="noopener noreferrer"
        >
          <Button label="clic here"></Button>
        </a>
        <code>im coding react bitchie</code>
        <Button label="clic me"></Button> <br />
      </header>
    </div>
  );
}

export default App;
