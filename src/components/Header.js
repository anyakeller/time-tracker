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

  const fileHeader = () => {
    return (
      <>
        {isChangeFileMode ? (
          <CSVinput setFile={setFile} />
        ) : (
          <span className="text-center">Currently Viewing: {props.fileName} </span>
        )}
        {changeFileBtn()}
      </>
    );
  };

  const changeFileBtn = () => {
    if (props.fileName) {
      return (
        <button
          className={`btn ms-2 mt-2 ${
            isChangeFileMode ? "mt-md-0 btn-outline-secondary" : "mt-sm-0 btn-primary"
          }`}
          type="button"
          onClick={handleChangeUploadClick}>
          {isChangeFileMode ? "Cancel" : "Change File"}
        </button>
      );
    }
  };

  return (
    <header className="d-flex flex-wrap  justify-content-center justify-content-md-between align-items-center py-2 px-4 bg-light">
      {fileHeader()}
    </header>
  );
}

export default Header;
