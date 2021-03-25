import React from "react";

// data:[headers, tableBody]
export const FileContext = React.createContext({
  data: null,
  fileName: null,
  testData: [
    { activity: "blah0", delay: 0 },
    { activity: "blah1", delay: 1000 },
    { activity: "blah5", delay: 5000 },
    { activity: "blah5", delay: 5000 }
  ],
  setFile: () => {}
});
