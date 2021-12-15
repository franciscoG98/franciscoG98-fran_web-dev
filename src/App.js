import "./App.css";
import React from "react";

import Layout from "./components/layout/";
// import { Button } from "./components/button/Button";
import Terminal from "./components/terminal/Terminal";

function App() {
  return (
    <>
      {/* <Layout className="particles-js" /> */}
        <h1 className="title">Hello mf, welcome to my hell</h1>
      {/* <Button className="button" label="clic me if u dare" /> */}
      <Terminal title='pancho@dev:~/workspace/fg-portfolio' bash='pancho@user~$' text='fvk u' />
      
    </>
  );
}

export default App;
