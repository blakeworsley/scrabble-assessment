import React, { Component } from 'react';

export default class WordInput extends Component {
  render(){
    const { handleWordInput, word } = this.props;
    return(
      <section>
        <input
          onChange={handleWordInput}
          placeholder="Enter Word Here"
        />
      </section>
    )
  }
}
