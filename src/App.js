import React, { Component } from "react";
import bee from "./img/BEE-BCKRD.png";
import danube from "./music/danube.mp3";
import Particles from "react-particles-js";

class App extends Component {
  state = { bees: null, beesFree: false };
  render() {
    const { bees, beesFree } = this.state;

    return (
      <div className={"content"}>
        <div className={"beeContainer"}>
          {bees &&
            bees.map((eachBee) => {
              return (
                <img
                  src={bee}
                  className={beesFree && "rotate"}
                  alt={"small bee"}
                />
              );
            })}
          {bees && beesFree && (
            <>
              <audio autoplay="true" src={danube} />
            </>
          )}
        </div>
        <div className={"buttons"}>
          <button onClick={() => this.addBee()}>BEES</button>
          <button onClick={() => this.makeBeesFree()}>BEE FREE!</button>
        </div>
      </div>
    );
  }

  addBee = () => {
    if (this.state.bees === null) {
      return this.setState({ bees: ["bee"] });
    }
    this.setState({ bees: [...this.state.bees, "bee"] });
  };
  makeBeesFree = () => {
    this.setState({ beesFree: !this.state.beesFree });
  };
}

export default App;
