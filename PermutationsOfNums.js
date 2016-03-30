 /**
 *  Finds all the permutations of a
 *  number mapped to letters. For
 *  example:
 *  1213 =>
 *    1,2,1 3 === BCN
 *    1,2,1,2 === BCBD
 *    1,2 1,3 === BVD
 *    1 2,1 3 === MN
 *    1 2,1,3 === MBD
 *    return ['BCN', 'BCBD', 'BVD', 'MN', 'MBD']
 *  @param {String} input string number
 *  @return {array} array of all
 *  permutate-mapped numbers
 */
function findPermu(str) {

  // save results
  var result = [];

  // edge case: if str as a whole
  // exists in the alphabet,
  // push that letter into the result
  // right away. The recursion won't
  // take care of it.
  if (alphabet[parseInt(str)]) {
    result.push(alphabet[parseInt(str)]);
  }

  // recursionnnnn
  function subFindPermu(st, po) {

    // for each character at and after 'po' index
    for (var i = po; i < st.length; i++) {

      // the new string will have a comma
      // added to new string at position 'i'.
      // the idea is that the comma will keep
      // getting added to substring as well as
      // to the whole string until char runs out
      var newNum = addComma(i, st);

      // if the new string exists. It will become
      // null if it has run out of position to add
      // commas to.
      if (newNum) {

        // arrayified it baby! Basically get rid of all the commas
        // and separate the numbers
        var arrayfied = newNum.split(',').map(function(strNum) {
          return parseInt(strNum);
        });

        // keep track of the built word
        var wordified = '';

        // keep track if a number greater than
        // 25 (more than alphabet) or less than 0
        // has come up.
        var outOfBounds = false;

        // for each of numbers in the array
        arrayfied.forEach(function(num) {

          // if the alphabet for the number
          // doesn't exist, it is outofbounds.
          if (!alphabet[num]) {
            outOfBounds = true;
          }

          // if it hasn't gone outofbounds,
          // keep adding to the built word
          if (!outOfBounds) {
            wordified += alphabet[num];
          }

        });

        // at the end of the loop, if
        // every letter is inbounds
        // save built string into results
        if (!outOfBounds) {
          result.push(wordified);
        }

        // recurse with the substring
        // that comes after comma has been added!
        subFindPermu(newNum, i+2);
      }
    }
  }

  // start the recursion!
  subFindPermu(str, 0);
  
  return result;
}

/**
 *  Adds comma after a
 *  character in a string
 *  by the index
 *  @param {number} index
 *  after which comma should
 *  be added
 *  @param {String} str string
 *  to be modified
 *  @return {String} modified string
 *          {null} if index is out of
 *          bounds
 */
function addComma(index, str) {
  if ( index < 0 || ( str.length - 1 <= index ) ) {
    return null;
  }
  var firstPart = str.substring(0, index + 1);
  var secondPart = str.substring(index + 1, str.length);
  return firstPart + ',' + secondPart;
}

var alphabet = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'G',
  7: 'H',
  8: 'I',
  9: 'J',
  10: 'K',
  11: 'L',
  12: 'M',
  13: 'N',
  14: 'O',
  15: 'P',
  16: 'Q',
  17: 'R',
  18: 'S',
  19: 'T',
  20: 'U',
  21: 'V',
  22: 'W',
  23: 'X',
  24: 'Y',
  25: 'Z'
}