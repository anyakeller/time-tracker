import React from "react";
import { Header, Clock, Schedule } from "./components";
import fiorDiLatte from "./fiorDiLatte.png";
// <!img src={fiorDiLatte} className="img-fluid" alt="fiorDiLatte" />
function App() {
  return (
    <div className="App">
      <Header />
      <div className="py-3 px-5">
        <Clock />
        <Schedule />
      </div>
    </div>
  );
}

export default App;
