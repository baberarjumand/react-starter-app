import React from "react";

class SampleCompB extends React.Component {
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
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="component-card">
        <p>This is CompB!</p>
        <em>It is {this.state.date.toLocaleTimeString()}.</em>
      </div>
    );
  }
}

export default SampleCompB;
