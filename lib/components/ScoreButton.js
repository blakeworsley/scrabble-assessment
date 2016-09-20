import React, {Component} from 'react';

export default class ScoreButton extends Component {
  render(){
    const { handleScore } = this.props
    return(
      <section>
        <button onClick={handleScore}
        >Get Score</button>
      </section>
    )
  }
}
