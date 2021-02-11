import React from "react";

class EditableTd extends React.Component {
  constructor(props) {
    super(props);
    this.tdInput = React.createRef();
    this.originalData = props.data;
    this.currentData = props.data;
    this.state = {
      currentEdit: props.data,
    };
  }

  render() {
    return (
      <td contentEditable={this.props.isEditMode} ref={this.tdInput}>
        {this.currentData}
      </td>
    );
  }
}

export default EditableTd;
