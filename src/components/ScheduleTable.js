import React from "react";

class ScheduleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: props.headers,
      tableBody: props.tableBody,
    };
  }

  makeRow(rowData) {
    return rowData.map((tableCell, index) => <td key={index}>{tableCell}</td>);
  }

  render() {
    return (
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
        </tbody>
      </table>
    );
  }
}

export default ScheduleTable;
