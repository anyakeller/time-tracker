import React from "react";
import { Navbar, Header, Schedule } from "./components";
import fiorDiLatte from "./fiorDiLatte.png";
// <!img src={fiorDiLatte} className="img-fluid" alt="fiorDiLatte" />
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="container-md">
        <div className="row">
          <Schedule />
        </div>
      </main>
    </div>
  );
}

export default App;
