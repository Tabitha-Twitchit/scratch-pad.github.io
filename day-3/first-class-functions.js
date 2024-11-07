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
    // VERSION 1
    return function(testVal){
        if(testVal > base){
        //   console.log("executed")
          return true;
        } else {
        //  console.log("is false")
        return false};
    }
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
    
    return function(testVal){
        if(testVal < base){
        //   console.log("executed")
          return true;
        } else {
        //  console.log("is false")
        return false};
    }
    
    
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
    return function(string){
        return string[0].toLowerCase() === startsWith.toLowerCase();
    };  
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * I An ends with character in the initial call and then a string in the callback
 * O A function that compares the last letter of the string and the ends with char
 * C
 * E
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(string){
        return string[string.length -1].toLowerCase() === endsWith.toLowerCase();
    };    
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
I an array of strings, also a function that modifies A STRING (not an array)
O an array of strings with the modification applied
C "Collect the results into some collection" implies the creation of a new array
C And it sounds like we need a loop thru the array to apply the string modifier the each element. 
C The examples from alex indicate using a function expression (saving it as a var), I'm not strictly sure why this is necessary yet.
E

call a function within the array 

 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let outputArray = [];
    // console.log(strings);
    for (let i = 0; i < strings.length; i++ ){
        // in the body of the loop pass the indexed string into modify (thru argument I assume)
     outputArray.push(modify(strings[i]));
    }
    // Outside the for loop return the strings array
    // console.log(outputArray);
    return outputArray;
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * I array of strings and a mystery function (check the test environment!)
 * O return a boolean if the test is passed. (how can I know, hmmm)
 * C
 * E
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
// oh fuck you can just log the function...
// (string){
//     return string[0].toLowerCase() === startsWith.toLowerCase();
// }
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    let results = []
	// console.log(test);
	// begin with the same looping approach as before
	for (let i = 0; i < strings.length ;i++){
		// console.log(strings[i])
		// within the loop run the test func on the indexed string and push it to the results array
		results.push(test(strings[i]));
		}
	console.log(results);
//
	//Create a new func to that all elements in the results array are both identical AND the correct value, true.
	let allEqual = function(arr){
		if(arr.every(v => v === arr[0]) && arr.every( v => v === true)){
			//return bools as appropriate
			return true;
		} else {
			return false;
		}
	}
//log and return the result of the function with our results array passed in
console.log(allEqual(results));
return allEqual(results);
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