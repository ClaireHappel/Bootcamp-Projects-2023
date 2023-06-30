// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

//I: input base which could be string or number
//O: return function that tests whether given value is greater than the base

//for function createGreaterThanFilter with one param, base
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a func with one param, val that does the following
    return (function(val) {
   //if the typeof base is a number AND the second val is greater than the first
   if (typeof base === 'number' && base < val){
     //return true
     return true;
   //else if the typeof base is a string AND the second val is greater than the first
  } else if (typeof base === 'string' && base < val){
    //return true
    return true;
    //if base is greater than the new value
    } else {
     //return false
     return false;
    }
  
});
  
     // YOUR CODE ABOVE HERE //
}




/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */

//I: input base which could be string or number
//O: return function that tests whether given value is less than the base

function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
  
    //init greaterThan to the value of a func with one param, val
    return (function(val) {
   //if the typeof base is a number AND the second val is less than the first
   if (typeof base === 'number' && base > val){
     //return true
     return true;
   //else if the typeof base is a string AND the second val is less than the first
  } else if (typeof base === 'string' && base > val){
    //return true
    return true;
    //if base is less than the new value
    } else {
     //return false
     return false;
    }
    
  });
    
       // YOUR CODE ABOVE HERE //
  }

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */

//I: takes on parameter called startsWith, a single letter as a string
//O: ouput is a function that tests whether a given string starts with the startsWith char
//E: make sure that you include all variants of uppercase and lowercase values for string and endwith

function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //

//return function string that tests if string starts with startWith, whether capitalized or lowercase
  return function(string) { if (string.startsWith(startsWith) || string.startsWith(startsWith.toUpperCase()) || (string.startsWith(startsWith.toLowerCase()))) {
      //if it is, return true
      return true
      //if it is not
    } else {
      //return false
      return false;
    }
  // YOUR CODE ABOVE HERE /
  }                         
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */

//I: takes on parameter called endsWith, a single letter as a string
//O: ouput is a function that tests whether a given string starts with the startsWith char
//E: make sure that you include all variants of uppercase and lowercase values for string and endwith

function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //

//return function string that tests if string ends with endsWith, whether capitalized or lowercase
 return function(string) { if (string.endsWith(endsWith) || string.endsWith(endsWith.toUpperCase()) || (string.endsWith(endsWith.toLowerCase()))) {
  //if it is, return true
   return true
  //if it is not
  } else {
  //return false
   return false;
  }
    // YOUR CODE ABOVE HERE //
 }
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //

//init variable result, set to an object literal
let result = [];

//loop over the entire array of strings
for (let i = 0; i < strings.length; i++) {
  //take all the strings and as they are tested, push them into result array
  result.push(modify(strings[i]));
}

//return result
return result;  
  
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
 */

function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //

//init variable result, set to an object literal
let result = [];
//init countTrue to 0
let countTrue = 0;


//loop over the entire array of strings
for (let i = 0; i < strings.length; i++) {
  //take all the strings and as they are tested, push them into result array
  result.push(test(strings[i]));

  //then, if the strings tested return a result of true
  if (test(strings[i]) === true) {
    //increase countTrue by 1
    countTrue += 1;
  //else if the tested strings return a false result
  } else {
    //increase countTrue by 0
    countTrue += 0;
  }

}

//if countTrue is equal to number of values sent to result (aka its length)
 if (countTrue === result.length) {
   //return true
   return true;
   //else
 } else {
   //return false
   return false;
 }

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
