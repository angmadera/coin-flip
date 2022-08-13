import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img
          src={
            this.props.face === "tails"
              ? "https://www.usmint.gov/wordpress/wp-content/uploads/2016/06/2003-50-state-quarters-coin-illinois-proof-reverse-300x300.jpg"
              : "https://www.usmint.gov/wordpress/wp-content/uploads/2016/11/2003-50-state-quarters-coin-proof-obverse-300x300.jpg"
          }
        ></img>
      </div>
    );
  }
}

export default Coin;
