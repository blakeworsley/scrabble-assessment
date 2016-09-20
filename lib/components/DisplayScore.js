import React, { Component } from 'react';

export default class DisplayScore extends Component {
  render(){
    const { word, multiplier, score } = this.props;
    return(
      <section>
        <h1>
          {word} x {multiplier} = {score}
        </h1>
      </section>
    )
  }
}
