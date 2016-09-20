import React, { Component } from 'react';

export default class SubmitButton extends Component {
  render(){
    const { handleScoreWord, word } = this.props;
    return(
      <section>
        <button
          onClick={handleScoreWord}
          disabled={!word}
        >
        Submit Word
        </button>
      </section>
    )
  }
}
