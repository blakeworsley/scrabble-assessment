import React, { Component } from 'react';
import scoreWord from './ScoreGame';

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      word: '',
      previousWords: []
    };
  }

  // handleScore() {
  //   let score = scoreWord(this.state.word);
  // }

  handleSubmit() {

    this.setState({
      word: '',
      previousWords: this.state.previousWords.concat(this.state.word),
    });
  }

  render(){
    const { word } = this.state
    return(
      <section>
        <h1>{word}</h1>
        <h2>Score: {scoreWord(word)}</h2>

        <input
          className="word-input"
          placeholder="enter word here"
          value={word}
          onChange={(e) => this.setState({ word: e.target.value })}
        />
        <button
          onClick={() => this.setState({word: ''})}
        >Clear</button>
        <button
          onClick={() => this.handleSubmit()}
        >Submit</button>
      </section>
    )
  }
}
