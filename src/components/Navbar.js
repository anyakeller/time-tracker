import React from "react";
import Clock from "./Clock.js";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Time Manager Thing</span>
        <Clock />
        <span className="navbar-text">by aNYAHHH Keller</span>
      </div>
    </nav>
  );
}

export default Navbar;
