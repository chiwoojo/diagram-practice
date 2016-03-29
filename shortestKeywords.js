/**
 *  Find the shortest distance between
 *  2 keywords provided,
 *  within the description also provided.
 *  Return the sub-string that contains the 2 keywords
 *  with 3 word padding on each side.
 *  @param  {String} red  first word
 *  @param  {String} lego second word
 *  @param  {String} desc the sentence
 *  @return {String}      string with 3 word padding
 *  that contains the shortest distance between 2 words
 */
function shortestKeywords(red, lego, desc) {
  let redOccurence = [];
  let legoOccurence = [];
  const padding = 3;

  // keep track of indexes of
  // minimum distances
  let minDistIndex = {
    red: 0,
    lego: desc.length,
  }

  // make array while erasing whitespace
  desc = desc.split(' ');

  // create occurences
  for (let i = 0; i < desc.length; i++) {
    if (desc[i] === red) {
      redOccurence.push(i);
    }
    if (desc[i] === lego) {
      legoOccurence.push(i);
    }
  }

  // find the shortest distance between words
  redOccurence.forEach(function(redIndex) {
    legoOccurence.forEach(function(legoIndex) {
      let absoluteDist = Math.abs(legoIndex - redIndex);
      let currentMin = Math.abs(minDistIndex.lego - minDistIndex.red);
      if (absoluteDist < currentMin) {
        minDistIndex.lego = legoIndex;
        minDistIndex.red = redIndex;
      }
    })
  });


  return minDistIndex.red < minDistIndex.lego ?
    desc.slice(minDistIndex.red - padding, minDistIndex.lego + padding + 1).join(' ') :
    desc.slice(minDistIndex.lego - padding, minDistIndex.red + padding + 1).join(' ');
  //return str with padding and not array
}