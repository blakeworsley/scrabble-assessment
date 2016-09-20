import React, { Component } from 'react';
import WordInput from './WordInput';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
    };
  }

  render(){
    return (
      <section>yo</section>
    )
    // <WordInput word={this.state.word}/>
  }
}
