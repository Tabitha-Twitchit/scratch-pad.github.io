// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 * 
 * REALLY WATCH THE OUTPUT: return a function means return a function!

I string or num
O a function that incorporates the base argument and another variable within it
C
E 

*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
//  VERSION 2
    let testValInjection = function(testVal){
    if(base > testVal === true){
        console.log("executed");
    }
}
return testValInjection;

// VERSION 1
//     return function(testVal){if(base > testVal === true){
//         console.log("executed");
//     }
// }

    
// Assuming I need to keep everything in here...
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 * 
 * examples from alex:
 * 
 * var uppercase = modifyStrings(['alex', 'francis'], function(string){
    return string.toUpperCase();
}); // ['ALEX', 'FRANCIS']

var addedExclamation = modifyStrings(['alex', 'francis'], function(string){
    return string + "!";
}); // ['alex!', 'francis!']
 * 
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 *  * examples from alex:
var beginsWithA = allStringsPass(['alex', 'aaron'], function(str){
    return str[0] === 'a';
}); // true (because all strings begin with A)

var fiveOrMoreLetters = allStringsPass(['alex', 'francis', 'aaron'], function(str){
    return str.length > 4;
}); // false (because alex's length is less than 5)
 * 
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}