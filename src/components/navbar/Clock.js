import React from "react";
// const dayjs = require("dayjs");

// with help from https://reactjs.org/docs/state-and-lifecycle.html
class Clock extends React.Component {
  // let now = dayjs();
  //  console.log(now.format("h:mm:ss a"));
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <span>{this.state.date.toLocaleTimeString()}.</span>;
  }
}

export default Clock;
