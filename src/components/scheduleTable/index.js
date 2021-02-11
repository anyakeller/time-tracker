import React from "react";
import EditableTr from "./EditableTr.js";
import EditableTd from "./EditableTd.js";
import "./style.css";

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

  handleClickCancelRevert(e) {
    console.log("cancel revert");
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary me-2"
          onClick={(e) => this.handleClickEditSave(e)}
        >
          {this.state.isEditMode
            ? "save changes to time tracker"
            : "edit time tracker"}
        </button>
        <button
          className="btn btn-danger"
          onClick={(e) => this.handleClickCancelRevert(e)}
        >
          {this.state.isEditMode
            ? "discard current changes"
            : "revert to original"}
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
              <EditableTr
                key={index}
                rowData={tableRow}
                isEditMode={this.state.isEditMode}
              />
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
