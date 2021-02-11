import React from "react";
import Clock from "./Clock.js";

function Header(props) {
  return (
    <header className=" py-2 px-4 bg-secondary text-white">
      <Clock />
    </header>
  );
}

export default Header;
