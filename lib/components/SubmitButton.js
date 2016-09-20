import React, { Component } from 'react';

export default class SubmitButton extends Component {
  render(){
    const { handleScoreWord } = this.props;
    return(
      <section>
        <button
          onClick={handleScoreWord}
        >
        Submit Word
        </button>
      </section>
    )
  }
}
