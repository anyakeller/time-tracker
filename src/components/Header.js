import React from "react";
import CSVinput from "./CSVinput";

function Header(props) {
  const validFileHeader = () => {
    return <>Currently Viewing: {props.fileName} </>;
  };
  return (
    <header className="d-flex justify-content-between align-items-center py-2 px-4 bg-light">
      {props.fileName ? (
        validFileHeader()
      ) : (
        <CSVinput setFile={props.setFile} />
      )}
    </header>
  );
}

export default Header;
