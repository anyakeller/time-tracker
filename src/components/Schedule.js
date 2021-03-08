import React from 'react';
import Header from './Header.js';
import ScheduleTable from './scheduleTable';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.handleCSVUpload = this.handleCSVUpload.bind(this);
    this.state = { data: null, fileName: null };
  }

  handleCSVUpload(uploadData) {
    let [headers, ...tableBody] = uploadData.data;
    localStorage.setItem('originalCSV', JSON.stringify(uploadData.data));
    localStorage.setItem('currentCSV', JSON.stringify(uploadData.data));
    this.setState({
      data: [headers, tableBody],
      fileName: uploadData.fileName
    });
  }

  render() {
    return (
      <div id="schedule">
        <Header
          onCSVUpload={this.handleCSVUpload}
          fileName={this.state.fileName}
        />
        <div className="container-md py2">
          <h2>Schedule</h2>
          {this.state.fileName && this.state.data ? (
            <>
              <h1>{this.state.fileName}</h1>
              <ScheduleTable
                headers={this.state.data[0]}
                tableBody={this.state.data[1]}
              />
            </>
          ) : (
            <h1>adsfasdf</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Schedule;
