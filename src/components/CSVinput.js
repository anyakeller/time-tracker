import React from "react";
let fileReader;

class CSVinput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.fileInputLabel = React.createRef();
    // file: stores the user's file input
    // isFileValid: tracks if file is a csv
    this.state = { file: null, isFileValid: false, data: null };
  }

  // helper to read the file
  handleFileRead = e => {
    const content = fileReader.result.split("\n").map(row => row.split(","));
    // console.log(content);
    this.setState({ data: content });
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
      this.setState({ file: fileUpload });
      if (fileUpload.type === "text/csv") {
        this.setState({ isFileValid: true });
      } else {
        this.setState({ isFileValid: false });
      }
      this.fileInputLabel.current.textContent = fileUpload.name;
    }
  };

  getForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* ALL FILE INPUTS ARE UNCONTROLLABLE STATE THINGS */}
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              accept=".csv"
              className="custom-file-input"
              id="csvInput"
              ref={this.fileInput}
              onChange={this.handleChange}
            />
            <label
              className="custom-file-label"
              htmlFor="csvInput"
              data-browse="Upload a CSV"
              ref={this.fileInputLabel}
            >
              Choose file
            </label>
          </div>
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }

  makeRow(rowData) {
    return rowData.map((tableCell, index) => <td key={index}>{tableCell}</td>);
  }

  getTable() {
    var [headers, ...tableBody] = this.state.data;
    console.log(headers);
    console.log(tableBody);
    return (
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((tableRow, index) => (
            <tr key={index}>{this.makeRow(tableRow)}</tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return this.state.data ? this.getTable() : this.getForm();
  }
}

export default CSVinput;
