import React from "react";

// data:[headers, tableBody]
export const FileContext = React.createContext({
  data: null,
  fileName: null,
  testData: [
    { activity: "blah0", delay: 500, duration:"0:01" },
    { activity: "blah1", delay: 1000, duration:"0:02" },
    { activity: "blah5", delay: 5000, duration:"0:05" },
    { activity: "blah5", delay: 5000, duration:"0:05" }
  ],
  setFile: () => {}
});
