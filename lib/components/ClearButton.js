import React, { Component } from 'react';

export default class ClearButton extends Component {
  render(){
    const { handleClearInputs, word } = this.props;
    return(
      <section>
        <button
          onClick={handleClearInputs}
          disabled={!word}
        >
        Clear Inputs
        </button>
      </section>
    )
  }
}
