import React from "react";
import "./style.css";

class InputTd extends React.Component {
  constructor(props) {
    super(props);
    this.originalData = props.data;
    this.currentData = props.data;
    this.state = {
      currentEdit: props.data,
    };
  }

  handleChange(event) {
    this.setState({ currentEdit: event.target.value });
  }

  render() {
    return (
      <td>
        <input
          type="text"
          className={
            this.props.isEditMode ? "form-control" : "form-control-plaintext"
          }
          readOnly={this.props.isEditMode ? false : true}
          value={this.state.currentEdit}
          onChange={(e) => this.handleChange(e)}
        />
      </td>
    );
  }
}

export default InputTd;
