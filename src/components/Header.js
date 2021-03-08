import React from 'react';
import CSVinput from './CSVinput.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validFileName: props.fileName
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.fileName !== prevProps.fileName) {
      this.setState({
        validFileName: this.props.fileName
      });
    }
  }

  handleChangeUploadClick = (e) => {
    e.preventDefault();
    this.setState({
      validFileName: false
    });
    console.log('change file clicked');
  };

  onCSVUpload = (uploadData) => {
    this.props.onCSVUpload(uploadData);
  };

  validFileHeader = () => {
    return (
      <>
        Currently Viewing: {this.state.validFileName}{' '}
        <button onClick={this.handleChangeUploadClick} className="btn btn-primary">
          Change File
        </button>
      </>
    );
  };

  render() {
    return (
      <header className="d-flex justify-content-between align-items-center py-2 px-4 bg-light">
        {this.state.validFileName ? (
          this.validFileHeader()
        ) : (
          <CSVinput onCSVUpload={this.onCSVUpload} />
        )}
      </header>
    );
  }
}

export default Header;
