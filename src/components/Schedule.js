import React from "react";
import CSVinput from "./CSVinput.js";

function Schedule(props) {
  return (
    <div id="schedule">
      <h1>Schedule Div</h1>
      <CSVinput />
      {/* ALL FILE INPUTS ARE UNCONTROLLABLE STATE THINGS
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload a CSV
          </span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          ></input>
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
      </div> */}
    </div>
  );
}

export default Schedule;
