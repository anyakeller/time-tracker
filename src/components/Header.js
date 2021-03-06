import React, { useState, useEffect } from "react";
import CSVinput from "./CSVinput.js";

function Header(props) {
  const [validFileName, setValidFileName] = useState(null);

  useEffect(() => {
    if (props.fileName && props.fileName !== validFileName) {
      setValidFileName(props.fileName);
    }
  }, [props.fileName, validFileName]);

  const validFileHeader = () => {
    return (
      <>
        Currently Viewing: {validFileName} <button className="btn btn-primary">Change File</button>
      </>
    );
  };

  return (
    <header className="d-flex justify-content-between align-items-center py-2 px-4 bg-light">
      {validFileName ? (
        validFileHeader()
      ) : (
        <CSVinput onCSVUpload={props.onCSVUpload} />
      )}
    </header>
  );
}

export default Header;
