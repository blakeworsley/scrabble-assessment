const assert = require('chai').assert;
const scoreWord = require('../lib/components/ScoreGame');

describe('our test bundle', function() {
  it('should work', function(){
    assert.isFunction(scoreWord);
  });
  it('returns a score of 8 for the word hello', function(){
    var score = scoreWord('hello');
    assert.equal(score, 8);
  });
  it('should return 0 if scoreWord is given an empty string or null', function(){
    var score = scoreWord('');
    assert.equal(score, 0);
  });
  it('should remove any whitespace before or after any given word', function(){
    var score = scoreWord('   h e l lo ');
    assert.equal(score, 8);
  });
  it('should not count number if entered into the input', function(){
    var score = scoreWord('  232 h e 34l l34o ');
    assert.equal(score, 8);
  });
  it('should take a second argument that multiplies the score', function(){
    var score = scoreWord('hel12893921lo', 2);
    assert.equal(score, 16);
  });
});
