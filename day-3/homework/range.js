// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 * 
 * I 2 ints
 * O 1 array with all ints between, including the original two
 * C
 * E
 * 
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // establish the container for our output
    var outputArray = [];

    // check the relationship between the two received ints (greater or less, for the purpose of loop direction)
    if(start < end ){
        // set i at the start and work up until end
        for (let i = start; i <= end; i++){
            // add each int along the way to the array
          outputArray.push(i);
        }
    // check the opposite case
    } else if (start > end){
        // set i at our start (higher number!) and decrement down to end
        for (let i = start; i >= end; i--){
            // add those nums to our array
          console.log("Got in start lesser")  
          outputArray.push(i);
        }
    }
// check the array before it goes out
console.log(outputArray);
// send it out
return outputArray;    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}