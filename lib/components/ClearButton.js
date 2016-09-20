import React, { Component } from 'react';

export default class ClearButton extends Component {
  render(){
    const { handleClearInputs } = this.props;
    return(
      <section>
        <button
          onClick={handleClearInputs}
        >
        Clear Inputs
        </button>
      </section>
    )
  }
}
