import React, { Component } from 'react';
import emojis from './emojis';
import './Joke.css';

class Joke extends Component {
    getColor(){
        if(this.props.votes >= 15){
            return "#4eAF55";
        } else if (this.props.votes >= 12) {
            return "#8bc34a";
        } else if (this.props.votes >= 9) {
            return "#cddc39";
        } else if (this.props.votes >= 6) {
            return "#ffeb3b";
        } else if (this.props.votes >= 3) {
            return "#ffc107";
        } else if (this.props.votes >= 0) {
            return "#ff9800";
        } else if (this.props.votes >= -3) {
            return "#ff4433";
        } else if (this.props.votes >= -6) {
            return "#ff3311";
        }
    }

    getEmoji() {
        if (this.props.votes >= 8) {
          return "ultralol";
        } else if (this.props.votes >= 6) {
          return "lol";
        } else if (this.props.votes >= 4) {
          return "funny";
        } else if (this.props.votes >= 2) {
          return "okay";
        } else if (this.props.votes >= 1) {
          return "smile";
        } else if (this.props.votes >= 0) {
          return "meh";
        } else if (this.props.votes >= -1) {
          return "awkward";
        } else if (this.props.votes >= -3) {
          return "shame";
        } else if (this.props.votes >= -6) {
          return "horrible";
        } else if (this.props.votes >= -8) {
            return "cry";
        } else {
            return "dead";
        } 
    }
    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fa fa-arrow-up" onClick={this.props.upvote}></i>
                    <span className="Joke-votes" style={{borderColor: this.getColor()}}>{this.props.votes}</span>
                    <i className="fa fa-arrow-down" onClick={this.props.downvote}></i>
                </div>
                <div className="Joke-block">
                    <span className="Joke-block-text">
                    {this.props.text}
                    </span>
                    <img className="Joke-block-smiley" src={emojis[this.getEmoji()]} alt="smile"/>
                </div>
                

            </div>
        )
    }
}

export default Joke;