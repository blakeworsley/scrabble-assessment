import React, { Component } from 'react';

export default class Multiplier extends Component {
  render() {
    const { handleMultiplier, multiplier } = this.props;
    return (
      <section>
        <input
          onChange={handleMultiplier}
          value={multiplier}
          placeholder="input word here"
        />
      </section>
    )
  }
}
