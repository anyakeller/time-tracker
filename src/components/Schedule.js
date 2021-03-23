import React from "react";
import Header from "./Header";
import ScheduleTable from "./scheduleTable";
import { FileContext } from "../FileContext";

function Schedule() {
  return (
    <div id="schedule">
      <FileContext.Consumer>
        {({ data, fileName, setFile }) => {
          return (
            <>
              <Header fileName={fileName} setFile={setFile} />
              <div className="container-md py2">
                <h2>Schedule</h2>
                {fileName && data ? (
                  <>
                    <h1>{fileName}</h1>
                    <ScheduleTable
                      data={data}
                      fileName={fileName}
                      setFile={setFile}
                    />
                  </>
                ) : (
                  <h1>adsfasdf</h1>
                )}
              </div>
            </>
          );
        }}
      </FileContext.Consumer>
    </div>
  );
}

export default Schedule;
