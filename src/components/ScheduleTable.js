import React from "react";
import EditableTd from "./EditableTd.js";

class ScheduleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: props.headers,
      tableBody: props.tableBody,
      originalData: [props.headers, props.tableBody],
      isEditMode: false,
    };
  }

  makeRow(rowData) {
    return rowData.map((tableCell, index) => (
      <EditableTd
        key={index}
        isEditMode={this.state.isEditMode}
        data={tableCell}
      />
    ));
  }

  handleClickEditSave(e) {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={(e) => this.handleClickEditSave(e)}
        >
          {this.state.isEditMode
            ? "save changes to time tracker"
            : "edit time tracker"}
        </button>
        <table className="table">
          <thead>
            <tr>
              {this.state.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.tableBody.map((tableRow, index) => (
              <tr key={index}>{this.makeRow(tableRow)}</tr>
            ))}
            <tr>
              <td colSpan="4">asdfas</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScheduleTable;
