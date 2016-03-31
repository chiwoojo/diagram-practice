/**
 * 2016 March 30th
 * Find all the possible 
 * combinations of coins that 
 * sum to a given value
 */
var coins = [1,2,5,10,20,50,100,200];
 
function coinSums(num) {
  
  // keep track of # of solutions
  var combos = 0; 
  
  // permutate through all available
  // solutions
  var permutate = function(sum, coinIndex) {
    
    // if the sum is equal to
    // the current num,
    // increase the count, 
    // and also end the function.
    if (sum === num) {
      combos++;
      return;
      
      // also end the function 
      // if sum is greater than
      // number as well
    } else if (sum > num) {
      return;
    }
    
    // for every coin
    for ( var i = coinIndex; i < coins.length; i++) {
      
      // up to the $ divided by coin value
      for ( var j = 1; j <= num/coins[i]; j++) {
        
        // recurse with new sum values
        // which are a result of adding
        // the current coin value times
        // the multiplier, and also new 
        // coin index value
        permutate(sum+coins[i]*j, i+1);
      }
    }
  }
  
  // start recursion
  permutate(0, 0);
 
  return combos;
} 