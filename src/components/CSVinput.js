import React from "react";
import readCSVFile from "./../utils/readCSV.js";

class CSVinput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    // file: stores the user's file input
    // isFileValid: tracks if file is a csv
    this.state = {
      file: null,
      wasValidated: false,
      hasTriedUpload: false,
      isFileValid: false,
    };
  }

  // handle user file upload
  handleSubmit(event) {
    event.preventDefault();
    // If the file is a csv, read it.  Otherwise, don't.
    if (this.state.isFileValid) {
      console.log("yay");
      // read the csv
      readCSVFile(this.state.file).then((rows) => {
        this.props.onCSVUpload(rows);
      });
    } else {
      console.log("booo");
    }
  }

  // handle file input change  must be arrow function
  handleChange = (e) => {
    // get the user's input
    let fileUpload = this.fileInput.current.files[0];
    if (!fileUpload) console.log("nofile");
    else {
      if (fileUpload.type === "text/csv") {
        this.setState({
          isFileValid: true,
          file: fileUpload,
          wasValidated: true,
        });
      } else {
        this.setState({ isFileValid: false, wasValidated: true });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* ALL FILE INPUTS ARE UNCONTROLLABLE STATE THINGS */}
        <div>
          <label htmlFor="csvInput" className="form-label">
            Upload your CSV file
          </label>
          <div className="input-group has-validation">
            <input
              type="file"
              accept=".csv"
              className={`form-control ${
                this.state.wasValidated
                  ? this.state.isFileValid
                    ? "is-valid"
                    : "is-invalid"
                  : ""
              }`}
              aria-describedby="csvValidationFeedback"
              id="csvInput"
              ref={this.fileInput}
              onChange={this.handleChange}
            />
            <button
              className={`btn ${
                this.state.wasValidated
                  ? this.state.isFileValid
                    ? "btn-outline-success"
                    : "btn-outline-danger disabled"
                  : "btn-outline-secondary disabled"
              }`}
              type="submit"
              id="csvInputSubmit"
            >
              Upload
            </button>
            <div
              className={
                this.state.isFileValid ? "valid-feedback" : "invalid-feedback"
              }
              id="csvValidationFeedback"
            >
              {this.state.isFileValid ? "good to go!" : "must be a CSV file"}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CSVinput;
