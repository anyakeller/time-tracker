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
    this.setState({ data: data });
  }

  getTable() {
    let [headers, ...tableBody] = this.state.data;
    return <ScheduleTable headers={headers} tableBody={tableBody} />;
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
