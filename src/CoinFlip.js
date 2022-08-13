import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlip extends Component {
  //it seems like we also put the default props at the top here
  constructor(props) {
    super(props);
    //why can't we just keep this array empty?
    this.state = { currCoin: 0, flips: 0, heads: 0, tails: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  flip = () => {
    let rand = Math.floor(Math.random() * 2);
    this.setState((curState) => ({
      currCoin: rand,
      flips: curState.flips + 1,
      heads: rand ? curState.heads + 1 : curState.heads,
      tails: rand ? curState.tails : curState.tails + 1,
    }));
  };
  handleClick = () => {
    this.flip();
  };
  render() {
    let { currCoin, flips, heads, tails } = this.state;
    return (
      <div className="CoinFlip">
        <h1>Let's flip a coin!</h1>
        {flips ? <Coin face={currCoin ? "heads" : "tails"} /> : null}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {flips} flips, there have been {heads} heads and {tails} tails
        </p>
      </div>
    );
  }
}

export default CoinFlip;
