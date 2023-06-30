// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

//I: one array
//O: console log of all array values
//C: must loop forward

//for function printArrayValues with one param, array
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //print each value of the array to the console
  array.forEach(value => console.log(value));
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

//I: one array
//O: console log of all array values
//C: must loop in reverse

//for function printArrayValuesInReverse with one param, array
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //print each value of the array to the console in reverse
  array.reverse().forEach(value => console.log(value));
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

//I: an object
//O: return an array containing the object's keys

//for function getObjectKeys with one param, object
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  //init keyArr to an arr literal
  let keyArr = [];

  //for variable key in object
  for (let key in object) {
   //push all keys of the key/value pairs to keyArr
   keyArr.push(key);
  }
  //return keyArr
  return keyArr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

//I: an object
//O: print all the object's keys

//for function printObjectKeys with one param, object
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  //for variable key in object
  for (let key in object) {
   //push all keys of the key/value pairs to keyArr
   console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

//I: an object
//O: return an Array containing the Object's values

//for function getObjectValues with one param, object
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //

  //init keyArr to an arr literal
  let keyArr = [];

  //for variable key in object
  for (let key in object) {
   //push all values of the key/value pairs to keyArr
   keyArr.push(object[key]);
  }
  //return keyArr
  return keyArr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

//I: an object
//O: loop over the object and print its values

//for function printObjectValues with one param, object
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
 
  //for variable key in object
  for (let key in object) {
   //print all values of the key/value pairs to console
   console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
} 

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

//I: an object
//O: return the number of key/value pairs stored within that Object

//for function getObjectLength with one param, object
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //init count var to 0
  let count = 0;
  
  //for variable key in object
  for (let key in object) {
   //for each loop with a key value pair
   if (object[key]) {
     //increase count by one
     count++;
   }
  }
  //return count
  return count;
  // YOUR CODE ABOVE HERE //
} 

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

//I: object
//O: all values console logged
//C: values should be in reverse order

//for function printObjectValuesInReverse one param, object
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
//init var flipKeys to the value of all the keys of object reversed
let flipKeys = Object.keys(object).reverse();
//in flipKeys, for each key/value pair
 flipKeys.forEach(key => { 
   //console log every value of the key/value pairs
   console.log(object[key])
  });
 }
 
  // YOUR CODE ABOVE HERE //


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
