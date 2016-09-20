import React, { Component } from 'react';
import ScoreGame from './ScoreGame';
import WordInput from './WordInput';
import Multiplier from './Multiplier';
import SubmitButton from './SubmitButton';
import ClearButton from './ClearButton';
import DisplayScore from './DisplayScore';

export default class Application extends Component {
  constructor(){
    super();
    this.ScoreGame = new ScoreGame();
    this.state = {
      word: '',
      multiplier: 1,
      score: ''
    };
  }

  handleWordInput(e) {
    this.setState({ word: e.target.value });
  }

  handleMultiplierInput(e) {
    this.setState({ multiplier: e.target.value });
  }

  handleScoreWord(){
    let userScore = this.ScoreGame.scoreWord(
      this.state.word, this.state.multiplier
    );
    this.setState({ score: userScore });
  }

  handleClearInputs(){
    this.setState({ multiplier: 1, word: '', score: '' });
  }

  render(){
    return(
      <section>
        <DisplayScore
          word={this.state.word}
          score={this.state.score}
          multiplier={this.state.multiplier}
        />
        <WordInput
          handleWordInput={this.handleWordInput.bind(this)}
        />
        <Multiplier
          handleMultiplierInput={this.handleMultiplierInput.bind(this)}
        />
        <SubmitButton
          handleScoreWord={this.handleScoreWord.bind(this)}
        />
        <ClearButton
          handleClearInputs={this.handleClearInputs.bind(this)}
        />
      </section>
    )
  }
}
