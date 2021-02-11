import React from "react";

class EditableTd extends React.Component {
  constructor(props) {
    super(props);
    this.originalData = props.data;
    this.state = {
      currentEdit: props.data,
      currentData: props.data,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isEditMode !== prevProps.isEditMode) {
      if (!this.props.isEditMode && prevProps.isEditMode) {
        //save edits
        this.setState({ currentData: this.state.currentEdit });
      } else {
        // start edit
      }
    }
  }

  handleInput(e) {
    this.setState({ currentEdit: e.currentTarget.textContent.trim() });
  }

  render() {
    return (
      <td
        contentEditable={this.props.isEditMode}
        onInput={(e) => this.handleInput(e)}
        suppressContentEditableWarning={true}
      >
        {this.state.currentData}
      </td>
    );
  }
}

export default EditableTd;
