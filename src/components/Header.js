import React from "react";
import CSVinput from "./CSVinput.js";

function Header(props) {
  return (
    <header className=" py-2 px-4 bg-light">
      <CSVinput onCSVUpload={props.onCSVUpload} />
    </header>
  );
}

export default Header;
