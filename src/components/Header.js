import React, { useState, useEffect } from "react";
import CSVinput from "./CSVinput.js";

function Header(props) {
  const [validFileName, setValidFileName] = useState(null);

  useEffect(() => {
    if (props.fileName && props.fileName !== validFileName) {
      setValidFileName(props.fileName);
    }
  }, [props.fileName, validFileName]);

  return (
    <header className=" py-2 px-4 bg-light">
      <CSVinput onCSVUpload={props.onCSVUpload} />
    </header>
  );
}

export default Header;
