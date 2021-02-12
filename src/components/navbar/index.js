import React from "react";
import Clock from "./Clock.js";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand fs-6">Time Manager Thing</span>
        <span className="navbar-text fs-4">
          <Clock />
        </span>
        <span className="navbar-text">by aNYAHHH Keller</span>
      </div>
    </nav>
  );
}

export default Navbar;
