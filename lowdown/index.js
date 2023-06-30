'use strict';

// YOU KNOW WHAT TO DO //

/**
 *  each: Designed to loop over a collection, Array or Object, and applies the 
 *  action Function to each value in the collection.
 * 
 *  @param {Array or Object} collection: The collection over which to iterate.
 *  @param {Function} action: The Function to be applied to each value in the collection.
 **/

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;


/** 
*  identity: Designed to take any value. It then returns the value unchanged.
*
*  @param {Value} value: The value that is taken in, it can be anything.
*  @return {Value} value: The same value that was taken in, unchanged.
*
**/

function identity(value) {
    return value;
}

module.exports.identity = identity;

/** 
*  typeOf: Designed to take in any value and then evaluate the value, returning a string
*          indicating the data type of the value given.
*
*  @param {Value} value: The value that is taken in, it can be anything.
*  @return {String} string: A string that is the data type of the given value.
*
**/

function typeOf(value) {
    
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
    }

    module.exports.typeOf = typeOf;

/** 
*  first: Designed to take an array and a number and return an empty array if the parameter array is not an array, the first element
*         of the array if number is not given or not a number, and if both parameters are defined- the function will return an array of 
*         elements that will be equal to number.
*
*  @param {Array} array: An array to iterate over.
*  @param {Number} number: A number to determine how many elements to return.
*  @return {Array} array: If the array parameter is not an array, return the empty array [].
*  @return {Array[0]} a single element: If parameter number is not given or not a number, return just the first element of the array.
*  @return {Array} array: Return an array of elements that will be equal to number.
*
**/

//init first to a function that takes an array 
function first(array, number) {
    //if an array is not an array or number is less than 0
    if (!Array.isArray(array) || number < 0) {
      return [];
    } else if (!number || number === NaN) {
      return array[0];
    }
   //if number exists
   if (number) {
       array.splice(number);
     }
    return array;
  }

  module.exports.first = first;

/** 
*  last: Designed to take an array and a number and return an empty array if the parameter array is not an array, the last element
*         of the array if number is not given or not a number, and if both parameters are defined- the function will return an array of 
*         elements that will be equal to number.
*
*   @param {Array} array: An array to iterate over.
*   @param {Number} number: A number to determine how many elements to return.
*   @return {Array} array: If the array parameter is not an array, return the empty array [].
*   @return {Array[0]} a single element: If parameter number is not given or not a number, return just the last element of the array.
*   @return {Array} array: Return an array of elements that will be equal to number.
*
**/

//init first to a function that takes an array 
function last(array, number) {
    //if an array is not an array or number is less than 0
    if (!Array.isArray(array) || number < 0) {
      return [];
    //if number does not exist or if number is typeof not a number  
    } else if (!number || number === NaN) {
      return array[array.length - 1];
    //if number is greater than array.length 
    } else if (number > array.length) {
      return array;
    }
   //if number exists
   if (number) {
    //I have no idea why this works-
    array.splice(array[array.length - 1], number - 1);
     }
    //return the array
    return array;
    }

 module.exports.last = last;  
  
  /** 
  * indexOf: Designed to take a number value and an array and return the first index of the array 
  *          that matches the given number. If the number does not match an existing index within 
  *          the array, returns -1 instead.
  * 
  *   @param {Array} array: An array to iterate over.
  *   @param {Number} number: A number value to check against the array indexes.
  *   @return {Value} value: Return the index of array that is the first occurrance of value.
  *   @return {Value} value: Return -1 if the value is not within the array.
  * 
  */
  
  //I: an array, a value
  //O: return the index of array that is the first occurance of value
  //C: do not use indexOf
  //E: if value is not in array- return -1;
  
  function indexOf(array, value) {
  
    //init storVal to the val of an empty array
    let storVal = []; 
    //loop through the array to get all values
    for (let i = 0; i < array.length; i++) {
    //loop through all values of storVal
    for (let j = 0; j < array.length; j++) {
      //if an array value is strictly equal to value, but value is not one of the values within [j]
      if (value === array[i] && value !== storVal[j]) {
        //push value to storVal
        storVal.push(value);
        //return value
        return i;
      }
    }
    }
    //return -1 if value is not in array
    return -1;
  }
  
  module.exports.indexOf = indexOf; 

  /** 
  * contains: Designed to take an array and another value of any type. It then determines if any of
  *           the array's elements are equal to the given value. If the array contains the value, it
  *           will return true. If it does not, it will return false. 
  * 
  *   @param {Array} array: The array to iterate over.
  *   @param {Value} value: The value that is taken in, it can be anything.
  *   @return {Boolean} Return true if the array contains the value.
  *   @return {Boolean} Otherwise, return false.
  * 
  */
  
  function contains(array, value) {
      return _.indexOf(array, value) > -1 ? true: false;
  }

  module.exports.contains = contains; 

  /** 
  * unique: Designed to take an array and return a new array that has removed all elements within the array that 
  *         are duplicates.
  * 
  *   @param {Array} array: An array to iterate over.
  *   @return {Array} array: Return a new array of all elements from the array with all duplicate elements removed.
  * 
  */
  
 function unique(array) {
    var uniqueArr = [...new Set(array)];
    return uniqueArr;
  }

  module.exports.unique = unique; 
  
  /** 
  * filter: Designed to take in an array and a function. The function will be called for each element of the array.
  *         For each loop the function will take the element, index, and the array itself as arguments. After testing, 
  *         it will return a new array of elements for which the callback function returned true.
  * 
  *   @param {Array} array: An array to iterate over.
  *   @param {Function} function: A callback function to test each element of array.
  *   @return {Array} array: Return a new array of elements for which the callback function returned true.
  * 
  */
  
  //I: an array, a function with arguments element, index, array
  //O: return new array of elements that returned true when the function was called
  
  function filter(array, func) {
    //init storElem to an array literal
    let storElem = [];
    for (var index = 0; index < array.length; index++) {
      let element = array[index]
      if (func(element, index, array) === true && func(element, index, array) !== undefined) {
        storElem.push(element);
      }
    }
    return storElem;
  }

  module.exports.filter = filter; 
  
  /** 
  * reject: Designed to take in an array and a function. The function will be called for each element of the array.
  *         For each loop the function will take the element, index, and the array itself as arguments. After testing, 
  *         it will return a new array of elements for which the callback function returned false.
  * 
  *   @param {Array} array: An array to iterate over.
  *   @param {Function} function: A callback function to test each element of array.
  *   @return {Array} Return a new array of elements for which the callback function returned false.
  * 
  */
  
  function reject(array, func) {
    //init storElem to an array literal
    let storElem = [];
    for (var index = 0; index < array.length; index++) {
      let element = array[index]
      if (func(element, index, array) !== true && func(element, index, array) !== undefined) {
        storElem.push(element);
      }
    }
    return storElem;
  }
  
  module.exports.reject = reject; 
  
  /** 
  * partition: Designed to take in an array and a function. The function will be called for each element of the array.
  *            For each loop the function will take the element, key, and the array itself as arguments. After testing, 
  *            it will return a new array made up of two sub arrays: one that contains all values for which the function returned
  *            something truthy and another that contains all values for which the function returned falsy.
  * 
  *   @param {Array} array: An array to iterate over.
  *   @param {Function} function: A callback function to test each element in the array.
  *   @return {Array} array: Return a new array made up of two sub arrays: one that contains all values for which the function returned
  *   something truthy and another that contains all values for which the function returned falsy.
  * 
  */
  
  function partition(array, func) {
    let truthy = [];
    let falsey = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            truthy.push(array[i]);
        } else {
             falsey.push(array[i]);
        }
    }
    return [truthy , falsey];
  }

  module.exports.partition = partition; 
  
  /** 
  *  map: Designed to take in a collection and a function. The function will be called for each element of the collection.
  *       For each loop the function will take arguments that differ depending on whether or not the collection is an array
  *       or object. If the collection is a array, the arguments will be the element, it's index, and the collection itself. 
  *       If the collection is an object, the arguments will be the value, it's key, and the collection itself. After testing 
  *       it will return a new array of each return value of the function call on the collection's elements.
  * 
  *   @param {Array or Object} collection: The collection to iterate over.
  *   @param {Function} function: A callback function to test each element in the collection.
  * Objectives:
  *   @return {Array} array: Return a new array of each return value of the function call on the collection's elements.
  * 
  */
  
  function map(collection, func) {
  
    //init result to an array literal
    let result = [];
  
    //use a conditional to sort collection into objects and arrays 
    if (Array.isArray(collection) === true) { //if collection is an array
        //create a for loop to iterate through the array
        for (let i = 0; i < collection.length; i++) {
          //if col. is array, call func with the element, index, and the col. Push the result into result
          result.push(func(collection[i], i, collection));
        }
    //else if it is an object
    } else { 
      //create a for in loop to iterate through the object
      for (let key in collection) {
      //if col. is object, call func with the value, it's key, and the col.
          result.push(func(collection[key], key, collection));
      }
    }
    //return the result array
    return result;
  }

  module.exports.map = map; 
  
  /** 
  *  pluck: Designed to take an array of objects to iterate over and a string that is a property being searched
  *           for within the array. It will return an array containing the value of property for every element in the array.
  * 
  *   @param {Array} array: An array of objects to iterate over.
  *   @param {String} string: A string that is the property being queried.
  *   @return {Array} array: Return an array containing the value of property for every element in the array.
  * 
  */
  
  //I: an array of objects, a property (key of a key/value pair)
  //O: return an array containing the value of property for every element in the array.
  
  function pluck(arrayObj, propKey) {
      var newarr = arrayObj.map(function(arr){
          return arr[propKey];
      });
      return newarr;
  }

  module.exports.pluck = pluck; 
  
  /** 
  *  every: Designed to take in a collection to iterate over and a callback function to test each element in the collection. 
  *         The function will be called for each element of the collection. For each loop the function will take arguments 
  *         that differ depending on whether or not the collection is an array or object. If the collection is a array, the
  *         arguments will be the element, it's index, and the collection itself. If the collection is an object, the arguments 
  *         will be the value, it's key, and the collection itself. If the return value of calling the function for every element
  *         is true, return true. If even one of them resturns false, return false. If a function is not provided, return true 
  *         if every element is truthy, otherwise return false.
  * 
  *   @param {Array or Object} collection: The collection to iterate over.
  *   @param {Function} function: A callback function to test each element in the collection. 
  *   @return {Boolean} boolean: If the return value of calling the function for every element is true, return true.
  *   @return {Boolean} boolean: If even one of them returns false, return false.
  *   @return {Boolean} boolean: If the function is not provided, return true if every element is truthy, otherwise return false.
  * 
  */
  
  function every(collection, func) {
    let check = func || _.identity;
    if (collection.length === 0) {
        return true;
    }    
    return _.reduce(collection,  (prev, next) => {
        if (!prev) {
            return false;
        } else {
            return check(next) ? true : false;
        }
    }, true);
  };

  module.exports.every = every; 
  
  /** 
  *  some: Designed to take in a collection to iterate over and a callback function to test each element in the collection. 
  *        The function will be called for each element of the collection. For each loop the function will take arguments 
  *        that differ depending on whether or not the collection is an array or object. If the collection is a array, the
  *        arguments will be the element, it's index, and the collection itself. If the collection is an object, the arguments 
  *        will be the value, it's key, and the collection itself. If the return value of calling the function for at least 
  *        one element is true, return true. If it returns false for all elements, return false. If the function is not 
  *        provided, return true if at least one element is truthy, otherwise return false.
  * 
  *   @param {Array or Object} collection: The collection to iterate over.
  *   @param {Function} function: A callback function to test each element in the collection. 
  *   @return {Boolean} boolean: If the return value of calling the function for at least one element is true, return true.
  *   @return {Boolean} boolean: If it returns false for all elements, return false.
  *   @return {Boolean} boolean: If the function is not provided, return true if at least one element is truthy, otherwise return false.
  * 
  */
  
  function some(collection, func) { 
  
    //init result to an array literal
     let result = [];
    //false counter
     let falseCount = 0;
     //create a boolean flag, set to true
     let resultCheck = true;
     
     //if function does not exist
     if (!func) {
       //loop through the array
       for (let k = 0; k < collection.length; k++) {
         //if a value within it is truthy
         if (collection[k] == true) {
           //return true
           return true;
           //else
         } else {
           //return false
           return false;
         }
       }
     }
       
     //use a conditional to sort collection into objects and arrays 
     if (Array.isArray(collection) === true) { //if collection is an array
         //create a for loop to iterate through the array
         for (let i = 0; i < collection.length; i++) {
           //if col. is array, call func with the element, index, and the col. Push the result into result
           result.push(func(collection[i], i, collection));
         }
     //else if it is an object
     } else { 
       //create a for in loop to iterate through the object
       for (let key in collection) {
       //if col. is object, call func with the value, it's key, and the col.
           result.push(func(collection[key], key, collection));
       }
     }
     
     //loop through result
     for (let j = 0; j < result.length; j++) {
       //if any value of result is false
       if (result[j] === false) {
         //increase falseCount by 1
         falseCount += 1;
       }
       //if falseCount is strictly equal to the length of the result array
       if (falseCount === result.length) {
         //switch resultCheck to false
         resultCheck = false;
       }
     }      
       //return resultCheck
       return resultCheck;
  }

  module.exports.some = some; 
  
  /** 
  *  reduce: Takes in an array of objects, a function to test each element of the array, and optionally 
  *          a seed value. It calls the fuction for every element in collection passing the arguments:
  *          previous result, element, index. On the first value- either seed of the first element of the
  *          array is used as a seed value, depending on whether seed exists. Use the return value of the
  *          function as the "previous result" for the next iteration. After the last iteration, return 
  *          the return value of the final function call.
  * 
  *   @param {Array} array: An array of objects to iterate over.
  *   @param {Function} function: A callback function to test each element in the array of objects.
  *   @param {Seed} seed: An optional seed value to provide for the first function call's 'previous result'.
  *   @return {Value} value: A value returned after the final function call, that is the result of all elements being
  *   tested and then used as the 'previous result' parameter for the next call.
  * 
  */

 function reduce(array, func, seed){
    // let array = [1, 2, 3, 4];
    /*
    let func = function(accumulator, current){ // accumulator = 1  current = 2
    // code to accumulate value
    return accumulator + current; // 1 + 3
    }   
     */
    // let seed;
    let result;
    // determine if seed was not passed in
    if (seed === undefined){
        // use first element of array as seed
        result = array[0]; // result = 1
        for (let i = 1; i < array.length; i++){ 
            // reassign result to func invocation
            result = func(result, array[i], i, array);
            
        }
    } else { // else it was
        result = seed; // result = 0
        for (let i = 0; i < array.length; i++){ // 
            // reassign result to func invocation
            result = func(result, array[i], i, array);
        }
    }
    return result;
  }

  module.exports.reduce = reduce; 

  /** _.extend: Takes in at least two objects, possibly more. Copies properties from the the second object to 
   *            the first object. If more objects are passed in, their properties are also passed to the first
   *            object, in the order they are passed in. Then, the updated first object is returned.
  *   @param {Object} object: An object.
  *   @param {Object} object: An object.
  *   @param {Object} object: Optionally, it can take more object parameters.
  *   @return {Object} object: Return an updated first object that now has the properties of all objects passed into 
  *   the function.
  *
  */
  
function extend(obj) {
    _.each(arguments, function(extendObj) {
        for (var key in extendObj)
            obj[key] = extendObj[key];
    });
    return obj;
  };

  module.exports.extend = extend; 
