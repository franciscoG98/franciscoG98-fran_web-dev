import "./App.css";
// import React { useState } from 'react';
import React from 'react';

import Layout from "./components/layout/";
// import { Button } from "./components/button/Button";
import Terminal from "./components/terminal/Terminal";
import Navbar from "./components/navbar";



function App() {


  return (
    <>
      <Navbar className="app-navbar" />
      {/* <Button className="button" label="clic me if u dare" /> */}
      <Terminal
        className="app-terminal"
        title="[pancho@dev:~/workspace/fg-portfolio]"
        bash="pancho@user~$"
      />
      <Layout className="particles-js" />
    </>
  );
}

export default App;
