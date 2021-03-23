import React from "react";

// data:[headers, tableBody]
export const FileContext = React.createContext({
  data: null,
  fileName: null,
  setFile: () => {}
});
