import React from "react";
import { FileContext } from "./FileContext";
import { Navbar, Schedule } from "./components";
// import fiorDiLatte from "./fiorDiLatte.png";
// <!img src={fiorDiLatte} className="img-fluid" alt="fiorDiLatte" />

class App extends React.Component {
  constructor() {
    super();

    this.setFile = (uploadData) => {
      let [headers, ...tableBody] = uploadData.data;
      localStorage.setItem("originalCSV", JSON.stringify(uploadData.data));
      localStorage.setItem("currentCSV", JSON.stringify(uploadData.data));
      this.setState((state) => ({
        data: { headers, tableBody },
        fileName: uploadData.fileName
      }));
    };
    this.state = {
      data: null,
      fileName: null,
      setFile: this.setFile
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <FileContext.Provider value={this.state}>
          <main className="min-vh-100">
            <Schedule />
          </main>
        </FileContext.Provider>
      </div>
    );
  }
}

export default App;
