/**
 * Tests for shortestKeywords
 */

// Testing library
var expect = chai.expect

// Test
describe('shortestKeywords algorithm', function() {

  var red = 'red';
  var lego = 'lego';

  // bind parameters so I
  // make easier calls later in testing
  shortestKeywords = shortestKeywords.bind(red, lego);

  it('should be a function', function() {
    expect(sortAnagrams).to.be.a('function');
  })

  it('should return empty string if passed empty string', function() {
    expect(shortestKeywords('')).to.equal('');
  })

  it('should return shortest occurence with padding of 3', function() {
    var inputStr = 'a a a a red lego a a a a';
    var gotResult = shortestKeywords(inputStr);
    var answer = 'a a a red lego a a a';
    expect(gotResult).to.equal(expected);
  })

  it('should find the shortest distance between any of the two words', function() {
    var inputStr = 'red a a a a lego red a a lego';
    var gotResult = shortestKeywords(inputStr);
    var answer = 'a a a lego red a a lego'
    expect(gotResult).to.equal(expected);
  })

  it('should return a sub-string with one word with padding, if only one word is found in the sentence', function() {
    var inputStr = 'a lego a z a z a a';
    var gotResult = shortestKeywords(inputStr);
    var answer = 'a lego a z a';
    expect(gotResult).to.equal.(expected);
  })
});