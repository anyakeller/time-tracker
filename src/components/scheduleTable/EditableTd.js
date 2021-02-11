import React from "react";

class EditableTd extends React.Component {
  constructor(props) {
    super(props);
    this.tdInput = React.createRef();
    this.originalData = props.data;
    this.state = {
      currentEdit: props.data,
      currentData: props.data,
    };
  }

  handleInput(e) {
    this.setState({ currentEdit: e.currentTarget.textContent.trim() });
  }

  render() {
    return (
      <td
        contentEditable={this.props.isEditMode}
        ref={this.tdInput}
        onInput={(e) => this.handleInput(e)}
        suppressContentEditableWarning={true}
      >
        {this.state.currentData}
      </td>
    );
  }
}

export default EditableTd;
