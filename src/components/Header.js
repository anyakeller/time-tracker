import React, { useState } from "react";
import CSVinput from "./CSVinput";

function Header(props) {
  const [isChangeFileMode, toggleChangeFileMode] = useState(false);

  const handleChangeUploadClick = (e) => {
    e.preventDefault();
    toggleChangeFileMode(true);
    console.log("change file clicked");
  };

  const setFile = (stuff) => {
    toggleChangeFileMode(false);
    props.setFile(stuff);
  };

  const validFileHeader = () => {
    return (
      <>
        Currently Viewing: {props.fileName}{" "}
        <button onClick={handleChangeUploadClick} className="btn btn-primary">
          Change File
        </button>
      </>
    );
  };
  return (
    <header className="d-flex justify-content-between align-items-center py-2 px-4 bg-light">
      {props.fileName && !isChangeFileMode ? (
        validFileHeader()
      ) : (
        <CSVinput setFile={setFile} />
      )}
    </header>
  );
}

export default Header;
