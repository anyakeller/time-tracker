import React from "react";
import { Navbar, Schedule } from "./components";
import fiorDiLatte from "./fiorDiLatte.png";
// <!img src={fiorDiLatte} className="img-fluid" alt="fiorDiLatte" />
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="min-vh-100">
        <Schedule />
      </main>
    </div>
  );
}

export default App;
