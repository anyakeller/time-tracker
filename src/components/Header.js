import React, { useState } from "react";
import CSVinput from "./CSVinput";

function Header(props) {
  const [isChangeFileMode, toggleChangeFileMode] = useState(true);

  const handleChangeUploadClick = (e) => {
    e.preventDefault();
    toggleChangeFileMode(!isChangeFileMode);
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

  const noFileHeader = () => {
    return (
      <>
        <CSVinput setFile={setFile} />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleChangeUploadClick}>
          Cancel
        </button>
      </>
    );
  };

  return (
    <header className="d-flex justify-content-between align-items-center py-2 px-4 bg-light">
      {props.fileName && !isChangeFileMode ? (
        validFileHeader()
      ) : !props.fileName && isChangeFileMode ? (
        <CSVinput setFile={setFile} />
      ) : (
        noFileHeader()
      )}
    </header>
  );
}

export default Header;
