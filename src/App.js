import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0,
      intervalId: 0
    };
  }
  onHandleClick = () => {
    console.log("Play button clicked");
    const playButton = document.getElementsByTagName("button")[0];
    console.log(playButton);
    let currValue = playButton.innerHTML;
    currValue = currValue.trim();
    // handling the play and pause button name
    if (currValue === "Pause") {
      console.log("Entered");
      playButton.innerHTML = "Play";
      clearInterval(this.intervalId);
    } else {
      playButton.innerHTML = "Pause";
      this.intervalId = setInterval(() => {
        this.setState({
          val: this.state.val + 1
        });
      }, 1000);
    }
    //handling the counter
    // on pause, clear the previous interval
    // on play, start another setInterval from the point you left it
  };
  componentDidMount() {
    console.log("Component Has mounted ");
    this.intervalId = setInterval(() => {
      this.setState({
        val: this.state.val + 1
      });
    }, 1000);
  }
  render() {
    const { val } = this.state;
    console.log(val);
    return (
      <>
        <div> Counter 1: {val} </div>
        <div> Counter 2: {val <= 10 ? val : "10"} </div>
        <button onClick={() => this.onHandleClick()}> Pause </button>
      </>
    );
  }
}

export default App;
