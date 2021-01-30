import React from "react";
let fileReader;

class CSVinput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    // file: stores the user's file input
    // isFileValid: tracks if file is a csv
    this.state = { file: null, hasTriedUpload: false, isFileValid: false };
  }

  // helper to read the file
  handleFileRead = e => {
    const content = fileReader.result.split("\n").map(row => row.split(","));
    // console.log(content);
    // pass data up
    this.props.onCSVUpload(content);
  };

  // handle user file upload
  handleSubmit(event) {
    event.preventDefault();
    // If the file is a csv, read it.  Otherwise, don't.
    if (this.state.isFileValid) {
      console.log("yay");
      // read the csv
      fileReader = new FileReader();
      fileReader.onloadend = this.handleFileRead;
      fileReader.readAsText(this.state.file);
    } else {
      console.log("booo");
    }
  }

  // handle file input change  must be arrow function
  handleChange = e => {
    // get the user's input
    let fileUpload = this.fileInput.current.files[0];
    if (!fileUpload) console.log("nofile");
    else {
      if (fileUpload.type === "text/csv") {
        this.setState({ isFileValid: true, file: fileUpload });
      } else {
        this.setState({ isFileValid: false });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* ALL FILE INPUTS ARE UNCONTROLLABLE STATE THINGS */}
        <div className="input-group mb-3">
          <input
            type="file"
            accept=".csv"
            className={`form-control ${
              this.state.isFileValid ? "is-valid" : "is-invalid"
            }`}
            id="csvInput"
            ref={this.fileInput}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="csvInputSubmit"
          >
            Upload
          </button>
        </div>
      </form>
    );
  }
}

export default CSVinput;
