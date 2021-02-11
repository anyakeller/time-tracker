import React from "react";
import CSVinput from "./CSVinput.js";
import ScheduleTable from "./ScheduleTable.js";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.handleCSVUpload = this.handleCSVUpload.bind(this);
    this.state = { data: null };
  }

  handleCSVUpload(data) {
    let [headers, ...tableBody] = data;
    localStorage.setItem("currentCSV", JSON.stringify(data));
    this.setState({ data: [headers, tableBody] });
  }

  render() {
    return (
      <div id="schedule">
        <h1>Schedule Div</h1>
        {this.state.data ? (
          <ScheduleTable
            headers={this.state.data[0]}
            tableBody={this.state.data[1]}
          />
        ) : (
          <CSVinput onCSVUpload={this.handleCSVUpload} />
        )}
      </div>
    );
  }
}

export default Schedule;
