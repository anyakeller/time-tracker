import React from "react";

class CSVinput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.fileInputLabel = React.createRef();
    this.state = { file: null };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(`Selected file - ${this.state.file.name}`);
  }
  handleChange = e => {
    let fileUpload = this.fileInput.current.files[0];
    this.setState({ file: fileUpload });
    this.fileInputLabel.current.textContent = fileUpload.name;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* ALL FILE INPUTS ARE UNCONTROLLABLE STATE THINGS */}
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
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
}

export default CSVinput;
