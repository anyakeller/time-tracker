import React from "react";

class ScheduleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: props.headers,
      tableBody: props.tableBody,
      isEditMode: false,
    };
  }

  makeRow(rowData) {
    return rowData.map((tableCell, index) => (
      <td key={index} contentEditable={this.state.isEditMode}>
        {tableCell}
      </td>
    ));
  }

  handleClickEdit(e) {}

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClickEdit}>
          edit time tracker
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
