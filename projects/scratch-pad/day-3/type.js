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
 */

//create function isArray with one param, value
function isArray(value) {
    // YOUR CODE BELOW HERE //

  //test if value is an array, if true return true, if false return false
  return Array.isArray(value) === true ? true : false; 
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */

//I: one param, value
//O: return false if value is an array is true OR if value is null OR if value is an instanceof Date OR if value's type is not object. return true if it is an object

//function isObject with one param value
function isObject(value) {
    // YOUR CODE BELOW HERE //

  //return false if value is an array is true OR if value is null OR if value is an instanceof Date OR if value's type is not object
    return Array.isArray(value) === true || value === null || value instanceof Date || typeof value !== 'object' ? false : true;
  
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

  //if value is null OR if value is an instanceof Date OR if value's type is not object or array
      return value === null || value instanceof Date || typeof value !== ('object' || 'array') ? false : true;
    
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

let type = '';

if (typeof value === 'string') {
 type = 'string';
} else  if (typeof value === 'number'){
 type = 'number';
} else if (typeof value === 'boolean'){
 type = 'boolean';
} else if (typeof value === 'function') {
 type = 'function';
} else if (value === null) {
 type = 'null';
} else if (typeof value === 'undefined') {
 type = 'undefined';
} else if (typeof value === 'object') {
   if (Array.isArray(value) === true) {
      type = 'array';
   } else if (value instanceof Date) {
     type = 'date';
   } else {
     type = 'object';
   }
}
  
return type;  
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
