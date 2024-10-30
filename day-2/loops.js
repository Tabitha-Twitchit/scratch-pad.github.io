// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
I an array of unknown contents
O the values of the array

*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (let i =0; i < array.length ; i++){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (let i = array.length -1; i >= 0; i--){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 I an object
 O an array of the objects keys
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Create an array to store the keys
  let outputArray = [] ;
  // make a loop through the object (do they need to be converted to strings?)
for (let key in object){
  outputArray.push(key);
}
  // return the array 
return outputArray;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for( let key in object){
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let outputArray = [] ;

  for (let key in object){
    outputArray.push(object[key]);
  }
    // return the array 
  return outputArray;  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for(let key in object){
    console.log(object[key]);
  }  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // non looping solution using Object.keys method.
  let propertyCount = Object.keys(object).length;

// Looping solution with a count incrementing per key
// let propertyCount = 0;

// loop thru the object
// for (key in object){
  // increment the count per object
  // propertyCount++
// }
// return th count var

return propertyCount;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
// I: an object
// O all values given in reverse order
// C the loop itself must happen in reverse

function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
// YOUR CODE BELOW HERE //
//   create an array to store the values of our object so that it can be reversed
let valArray = Object.values(object);
//   check the contents are being referenced properly
  // console.log(valArray);
  
//   loop through the array backwards
for (let i = valArray.length -1; i >= 0 ; i--){
//   print the array elements corresponding to object values in reverse order
  console.log(valArray[i]);
}
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}