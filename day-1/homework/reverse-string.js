// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 * 
 * I: receive a random string
 * O: a new string with characters in reverse order
 * C:
 * E
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // create a var to hold the new string
    let reverseInput = "";

    // for loop thru the input backwards
    for (let i = input.length - 1; i >= 0;i--){
      // within the loop add each char to the new string (+=)
      reverseInput += input[i];
    }
    // outside thr for loop return the final string
    return reverseInput;
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}