import React, { Component } from 'react';
import WordInput from './WordInput';
import Score from './Score';
import ScoreGame from './ScoreGame';
import ScoreButton from './ScoreButton';
import Multiplier from './Multiplier';

class Application extends Component {
  constructor() {
    super();
    this.ScoreGame = new ScoreGame();
    this.state = {
      word: '',
      score: null,
      multiplier: 1
    };
  }

  handleInput(e) {
    const input = e.target.value;
    this.setState({ word: input });
  }

  handleMultiplier(e) {
    const input = e.target.value;
    this.setState({ multiplier: input });
  }

  handleScore() {
    let userScore = this.ScoreGame.scoreWord(
      this.state.word, this.state.multiplier
    );
    this.setState({ score: userScore });
  }

  render(){
    return (
      <section>
        <h1>Scrabble Assessment</h1>
        <Score score={this.state.score} />
        <WordInput handleInput={this.handleInput.bind(this)} />
        <ScoreButton handleScore={this.handleScore.bind(this)} />
        <Multiplier handleMultiplier={this.handleMultiplier.bind(this)}
          multiplier={this.state.multiplier}
        />
      </section>
    )
  }
}

module.exports = Application;
