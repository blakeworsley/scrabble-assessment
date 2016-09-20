import React, { Component } from 'react';
import ScoreGame from './ScoreGame'

export default class Application extends Component {
  constructor() {
    super();
    this.scoreGame = new ScoreGame();
    this.state = {
      word: '',
      multiplier: 1,
      score: ''
    };
  }

  handleWord(e){
    this.setState({ word: e.target.value });
    this.handleScore(e.target.value, this.state.multiplier);
  }

  handleMultiplier(e){
    this.setState({ multiplier: e.target.value });
    this.handleScore(this.state.word, e.target.value);
  }

  handleScore(word, multiplier) {
    let userScore = this.scoreGame.scoreWord(word, multiplier);
    this.setState({ score: userScore });
  }

  render(){
    const { score, multiplier } = this.state;
    return(
      <section>
        <h1>{score}</h1>
        <input
          className="word-input"
          placeholder="Word here"
          onChange={(e) => this.handleWord(e)}
        />
        <input
          className="multiplier-input"
          placeholder="Multiplier here"
          type="number"
          value={multiplier}
          onChange={(e) => this.handleMultiplier(e)}
        />
      </section>
    );
  }

}
