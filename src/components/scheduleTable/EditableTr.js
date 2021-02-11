import React from "react";
import EditableTd from "./EditableTd.js";

class EditableTr extends React.Component {
  constructor(props) {
    super(props);
    this.originalRowData = props.rowData;
    this.state = {
      currentRowData: props.rowData,
    };
  }

  render() {
    return (
      <tr>
        {this.state.currentRowData.map((tableCell, index) => (
          <EditableTd
            key={index}
            isEditMode={this.props.isEditMode}
            data={tableCell}
          />
        ))}
      </tr>
    );
  }
}

export default EditableTr;
