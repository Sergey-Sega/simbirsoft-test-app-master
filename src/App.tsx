import React from "react";
import "./App.css";

import Competitions from "pages/competitions";
import Competition from "pages/competition";

const App: React.FC<any> = () => {
  return (
    <div className="App-wrapper">
      <Competitions />
      <Competition />
    </div>
  );
};

export default App;
