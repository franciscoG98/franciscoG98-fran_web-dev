import "./App.css";
// import React, { useState } from "react";
import React from "react";

import Layout from "./components/layout/";
// import { Button } from "./components/button/Button";
import Terminal from "./components/terminal/Terminal";
import Navbar from "./components/navbar";
import Loader from "./components/loader";

function App() {
  // const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading ? <Loader /> : setLoading(false)} */}
      {/* {console.log("here!:\n", loading, setLoading)} */}

      {/* <Navbar className="app-navbar" /> */}
      <h1 className="title">Hello netizen, welcome to my website</h1>
      {/* <Button className="button" label="clic me if u dare" /> */}
      <Loader className="app-loader"/>
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
