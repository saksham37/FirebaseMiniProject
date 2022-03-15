import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      play: "Pause",
      intervalId: 0
    };
  }
  componentDidMount() {
    this.state.intervalId = setInterval(() => {
      this.setState({
        value: this.state.value + 1
      });
    }, 1000);
  }

  onHandleClick = () => {
    let temp = this.state.play;
    if (temp === "Pause") {
      temp = "Play";
      clearInterval(this.state.intervalId);
      this.setState({
        play: temp
      });
    } else {
      temp = "Pause";
      let newId = setInterval(() => {
        this.setState({
          play: temp,
          value: this.state.value + 1,
          intervalId: newId
        });
      }, 1000);
    }
  };
  render() {
    const { value, play } = this.state;
    return (
      <>
        <div className="App">Counter1 {value}</div>
        <div className="App">Counter2 {value > 10 ? 10 : value}</div>
        <button onClick={() => this.onHandleClick()}> {play} </button>
      </>
    );
  }
}

export default App;
