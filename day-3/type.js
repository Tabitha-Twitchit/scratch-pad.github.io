// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 * 
 * Class notes: Reference the "Type" module in curriculum on op spark. 
 * typeof basically doesn't work on complex data types and null
I: an input which may or may not be an array
O: A boolean value
C: use a special JS method
E 
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // check if the value is an array using the mystery method
    // if true return true
    // else false

    // oh snap, you actually need even less of that than I thought.
    // Because the method automatically returns a bool, and that's the 
    // desired output you can cut down on the bloat
    return Array.isArray(value);
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 * ###Wants to return true if the object contains key value pairs, not just any old object
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // setup an elaborate check for all cases. First positivity, its typof IS an object string. THEN filter out the unwanted with &s
if (typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof Date)){
    return true;
} else {
    return false;
}
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // I think we would just remove the array filter in the if statement? Because arrays are objects
    if (typeof value === "object" && value !== null && !(value instanceof Date)){
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // seems like just a very elaborate if/else statement
    if(typeof value !== "object"){
        return typeof value;
    } else if (Array.isArray(value)){
        return "array";
    } else if (value instanceof Date){
        return "date";
    } else if (value === null){
        return "null";
    } else {
        return "object";
    }
    // I think this actually isn't catching all the cases. I guess undefined sort of returns itself?
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}