// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 * 
 * BREAK DOWN IOCE for each function. 
 * PSEUDOCODE
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 * 
 * I: a random string
 * O: a number corresponding to its length.
 * C
 * E
 */

function length(string) {
    // YOUR CODE BELOW HERE //
    // return a number corresponding to the length of any given string.      
    return string.length;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 * 
 * I a random string
 * O a second string transcribed into lowercase
 * C 
 * E
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // create a new var to hold the lowercase string 
    var lowerString = "";
    // using a method (TBD) translate the received string and save it as the new string
    lowerString = string.toLowerCase();
    // return the new string
    return lowerString;
    // YOUR CODE ABOVE HERE //
}
console.log(toLowerCase("Banana"));

/**
 * Given an input String, return a new String forced to uppercase.
 * I receive a random string
 * O return a new string in all lowercase
 * C 
 * E
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
  
    // initialize a new var to the return of the uppercase func.   
    let newUpper = string.toUpperCase();
    // return the new string value
  return newUpper;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
I: a random string, presumably including spaces and varied cases
O: a new string that replaces empty spaces with a hyphen and forces all letters into lowercase (research dash-case)
C
E 

*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// make a new string and assign it the value of the old string with lowercase method applied
var dashString = string.toLowerCase();

// find and replace all empty spaces with a hyphen in the new string
//   after research using only replace only changes the first instance, but the syntax below creates a "regular expression" and the gi after makes it case insensitive and the g...something else?
dashString = dashString.replace(/ /gi, "-");

// return the final new string
return dashString;
    // YOUR CODE ABOVE HERE //
}
// console.log(toDashCase("Wow huh, WUUUHHH"));

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * 
 * I: 2 strings -- one a single character, and one possibly longer
 * O: a boolean 
 * C: case insensitive
 * E
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // declare a bool to return later
    let isMatching = false;

    // check if the char matches the first letter of string
    if (char.toLowerCase() === string[0].toLowerCase()){
        // ...if so, return true
        isMatching = true;
    } else {
        // else is false
        isMatching = false;
    }
    return isMatching;
    // YOUR CODE ABOVE HERE //
}
// check with various permutations
// console.log(beginsWith("Style", "k"));

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?

IOCE: as before but focuses on final char of string 
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // declare a bool to return later
    let isMatching = false;

    // check if the char matches the first letter of string
    if (char.toLowerCase() === string[string.length-1].toLowerCase()){
        // ...if so, return true
        isMatching = true;
    } else {
        // else is false
        isMatching = false;
    }
    return isMatching;
    // YOUR CODE ABOVE HERE //
}
// checking the code with arguments
// console.log(endsWith("staB", "b"));

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?

I: two strings
O: one string that combines the inputs
C: seems to ask for the + operator
E

*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create new string var for output initialized to the value of both strings together
    let strings = stringOne + stringTwo;
    // return the new string
    return strings;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *     in an Array called args.
 * 
 * I: in the parameters, two strings, but seemingly in practice an array with an unknown number of strings
 * O: One string joining all elements of the array
 * C: the arg array as given 
 * E
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // create a new string to hold the joined array, ommit commas
    let longString = args.join("");
    // return the joined array as a single string
    return longString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 * 
 * I: receives 2 random strings
 * O: return the longer string
 * C
 * E: both are the same length?
 * 
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Check the length of each string against the other
    if (stringOne.length > stringTwo.length){
        return stringOne;
        // otherwise return  the other
    } else if (stringOne.length < stringTwo.length) {
        return stringTwo;        
        // else if they're equal return both are equal
    } else {
        return "equal";
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// check the relative "numeric" value of each string (position in alphabet)
if(stringOne < stringTwo){
    // if stringOne is less return 1
    return 1;
    // is stringOne is greater...
} else if (stringOne > stringTwo){
    // return neg 1
    return -1;
    // else return 0
} else {
    return 0;
}
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * 
 * I 2 strings
 * O 1 number ranging from -1 to 1 
 * C
 * E
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// check the relative "numeric" value of each string (position in alphabet)
if(stringOne > stringTwo){
    // if stringOne is greater return 1
    return 1;
} else if (stringOne < stringTwo){
    return -1;
} else {
    return 0;
}

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}