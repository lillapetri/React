import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numbers: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.handleClick(this.props.idx);
  }
  render() {
    const {numbers, locked, val, disabled, rolling} = this.props;
    let classes = `Die fas fa-dice-${numbers[val -1]}`
    if(locked) classes +=' Die-locked';
    if(rolling) classes += ' Die-rolling';
    return (
      
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}>
      </i>
    );
  }
}

export default Die;
