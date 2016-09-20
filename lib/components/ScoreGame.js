class ScoreGame {
  constructor() {
    this.letters = {
      A: 1, B: 3, C: 3, D: 2,
      E: 1, F: 4, G: 2, H: 4,
      I: 1, J: 8, K: 5, L: 1,
      M: 3, N: 1, O: 1, P: 3,
      Q: 10, R: 1, S: 1, T: 1,
      U: 1, V: 4, W: 4, X: 8,
      Y: 4, Z: 10
    }
  }

  scoreWord(userWord, multiplier = 1) {
    let word = userWord.toUpperCase().split('');
    let tempArr = [];
    if (word.length) {
      for (var i = 0; i < word.length; i++) {
        if(this.letters[word[i]]){
          tempArr.push(this.letters[word[i]]);
        }
      }
      return (tempArr.reduce((a, b) => {return a + b;}) * multiplier);
    }
    return 0;
  }
}
[A, , 2, C, E]
[A,C,E]
this.letters[word[i]]
this.letters. = 1 

module.exports = ScoreGame;
