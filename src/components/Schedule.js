import React from "react";
import CSVinput from "./CSVinput.js";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.handleCSVUpload = this.handleCSVUpload.bind(this);
    this.state = { data: null };
  }

  handleCSVUpload(data) {
    this.setState({ data: data });
  }

  makeRow(rowData) {
    return rowData.map((tableCell, index) => <td key={index}>{tableCell}</td>);
  }

  getTable() {
    var [headers, ...tableBody] = this.state.data;
    console.log(headers);
    console.log(tableBody);
    return (
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((tableRow, index) => (
            <tr key={index}>{this.makeRow(tableRow)}</tr>
          ))}
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div id="schedule">
        <h1>Schedule Div</h1>
        {this.state.data ? (
          this.getTable()
        ) : (
          <CSVinput onCSVUpload={this.handleCSVUpload} />
        )}
      </div>
    );
  }
}

export default Schedule;
