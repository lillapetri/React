import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';
import uuid from 'react-uuid';
import axios from "axios";

  class JokeList extends Component {
    static defaultProps = {
      numJokesToGet: 10
    };
    constructor(props) {
      super(props);
      this.state = {
        jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
        loading: false
      };
      this.seenJokes = new Set(this.state.jokes.map(j => j.text));
      console.log(this.seenJokes);
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
      if (this.state.jokes.length === 0) this.getJokes();
    }
    async getJokes() {
      try {
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet) {
          let res = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" }
          });
          let newJoke = res.data.joke;
          if (!this.seenJokes.has(newJoke)) {
            jokes.push({ id: uuid(), text: newJoke, votes: 0 });
          } else {
            console.log("FOUND A DUPLICATE!");
            console.log(newJoke);
          }
        }
        this.setState(
          st => ({
            loading: false,
            jokes: [...st.jokes, ...jokes]
          }),
          () =>
            window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        );
      } catch (e) {
        alert(e);
        this.setState({ loading: false });
      }
    }
    handleVote(id, delta) {
      this.setState(
        st => ({
          jokes: st.jokes.map(j =>
            j.id === id ? { ...j, votes: j.votes + delta } : j
          )
        }),
        () =>
          window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    }
    handleClick() {
      this.setState({ loading: true }, this.getJokes);
    }
    render() {
      if (this.state.loading) {
        return (
          <div className='JokeList-spinner'>
            <i className='far fa-8x fa-laugh fa-spin' />
            <h1 className='JokeList-title'>Loading...</h1>
          </div>
        );
      }
      let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
      return (
        <div className='JokeList'>
          <div className='JokeList-sidebar'>
            <img src="https://camo.githubusercontent.com/28bb63d96a4a7bb8526d14f82b770d1e24a0bdbf/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f692f30636b6838326e6564336769706f79326f30336d2e6a7067" alt="dad jokes" />
            <button className='JokeList-getmore' onClick={this.handleClick}>
              Fetch Jokes
            </button>
          </div>
  
          <div className='JokeList-jokes'>
            {jokes.map(j => (
              <Joke
                key={j.id}
                votes={j.votes}
                text={j.text}
                upvote={() => this.handleVote(j.id, 1)}
                downvote={() => this.handleVote(j.id, -1)}
              />
            ))}
          </div>
        </div>
      );
    }
  }
  export default JokeList;
  