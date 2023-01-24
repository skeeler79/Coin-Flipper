import React, { Component } from "react";
import Flip from "./Flip";
import './Coin.css';

class Coin extends Component {
  render() {
    return(<div className="Coin">
        <img className="coin" src={`https://tinyurl.com/react-coin-${this.props.face}-jpg`}></img>
    </div>);
  }
}

export default Coin;
