import React, { useState, useEffect } from 'react';
import CSVinput from './CSVinput.js';

function Header(props) {
  const [validFileName, setValidFileName] = useState(props.fileName);

  useEffect(() => {
    if (validFileName !== false && props.fileName && props.fileName !== validFileName) {
      console.log(validFileName);
      setValidFileName(props.fileName);
    }
  }, [props.fileName, validFileName]);

  const handleChangeUploadClick = (e) => {
    e.preventDefault();
    setValidFileName(false);
    console.log('change file clicked');
  };

  const onCSVUpload = (uploadData) => {
    props.onCSVUpload(uploadData);
  }

  const validFileHeader = () => {

    return (
      <>
        Currently Viewing: {validFileName}{' '}
        <button onClick={handleChangeUploadClick} className="btn btn-primary">Change File</button>
      </>
    );
  };

  return (
    <header className="d-flex justify-content-between align-items-center py-2 px-4 bg-light">
      {validFileName ? (
        validFileHeader()
      ) : (
        <CSVinput onCSVUpload={onCSVUpload} />
      )}
    </header>
  );
}

export default Header;
