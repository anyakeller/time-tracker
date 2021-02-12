import React from "react";
import Header from "./Header.js";
import CSVinput from "./CSVinput.js";
import ScheduleTable from "./scheduleTable";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.handleCSVUpload = this.handleCSVUpload.bind(this);
    this.state = { data: null };
  }

  handleCSVUpload(data) {
    let [headers, ...tableBody] = data;
    localStorage.setItem("originalCSV", JSON.stringify(data));
    localStorage.setItem("currentCSV", JSON.stringify(data));
    this.setState({ data: [headers, tableBody] });
  }

  render() {
    return (
      <div id="schedule">
        <Header onCSVUpload={this.handleCSVUpload} />
        <div className="container-md py2">
          <h1>Schedule</h1>
          {this.state.data ? (
            <ScheduleTable
              headers={this.state.data[0]}
              tableBody={this.state.data[1]}
            />
          ) : (
            <h1>adsfasdf</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Schedule;
