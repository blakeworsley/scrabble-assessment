import React, { Component } from 'react';

export default class Multiplier extends Component {
  render(){
    const { handleMultiplierInput, multiplier } = this.props;
    return(
      <section>
        <input
          onChange={ handleMultiplierInput }
          type="number"
          placeholder="Default Multiplier is 1"
        />
      </section>
    )
  }
}
