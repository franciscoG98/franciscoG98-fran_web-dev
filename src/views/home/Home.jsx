import React from "react";
import "./homeStyles.css";

import Terminal from "../../components/terminal";

const Home = () => {
  return (
    <Terminal
      title="[pancho@dev:~/workspace/fg-portfolio]"
      bash="pancho@user~$"
    />
  );
};

export default Home;
