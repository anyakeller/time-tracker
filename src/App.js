import React from "react";
import Header from "./components/Header";
import fiorDiLatte from "./fiorDiLatte.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <img src={fiorDiLatte} className="img-fluid" alt="fiorDiLatte" />
        <p>hi hello</p>
      </div>
    </div>
  );
}

export default App;
