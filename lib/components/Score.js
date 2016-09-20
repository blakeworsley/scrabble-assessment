import React, {Component} from 'react';

export default class Score extends Component {
  render(){
    const { score } = this.props
    return(
      <section>
        <h1>{score}</h1>
      </section>
    )
  }
}
