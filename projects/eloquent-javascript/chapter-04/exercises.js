////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: Write a range function with a start and end
//O: returns an array containing all the numbers from start up to (and including) end.

function range(start, stop, step=1){

  let numbers = [];
     if (step == 0) return
     if (start === stop) return [];
     if (start > stop && step > 0) step *= -1
     if (step < 0){
        for (let num = start; num >= stop; num += step){                
           numbers.push(num);
     }
        return numbers;
     }
     for (let num = start; num <= stop; num += step){ 
        numbers.push(num);
     }
     return numbers;
  }
  
  function sum(arr){
     if (arr == undefined) return
     result = 0;
     for (let i = 0; i < arr.length; i++){
     result += arr[i];
     }
     return result
  }


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: write a sum function that takes an array of numbers 
//O: returns the sum of these numbers

function sum(arr) {
  //init variable sumOf to 0
  let sumOf = 0
  //create a for loop to go over all vals of arr
  for (let i = 0; i < arr.length; i++) {
      //reassign sumOf to the value of itself plus all array values
      sumOf += arr[i];
  }
  //return sumOf
  return sumOf;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: takes an array as argument 
//O: produces a new array that has the same elements in the inverse order.

function reverseArray(arr) {
  //init arrCopy to the values of arr
  let arrCopy = [...arr];
  //return the copy reversed
  return arrCopy.reverse();

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: takes in an array
//O: reverses it in place

function reverseArrayInPlace(arr) {
  return arr.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: one param, array
//O: return an object that is a list

function arrayToList(array) {
  let rest = null;
    for (let i = array.length - 1; i >= 0; i--) {
      rest = { value: array[i], rest: rest };
    }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: take an object that is a list
//O: return an array created from that list

function listToArray(list, output=[]) {
//base
if (list.rest === null) {
  output.push(list.value);
  return output;
}
//recursion
output.push(list.value)
return listToArray(list.rest, output)
}

/*

//invoke listToArray(listOne)
  //BASE // FALSE
  //RECURSION
      //[].push(10) => [10]
        //BASE // FALSE
        //RECURSION
          //[10].push(20) => [10, 20]
            //BASE // TRUE

*/

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: takes an element and a list
//0: creates a new list that adds the element to the front of the input list,
prepend = (value, rest) => {
  let list = {
   value:value,
    rest:rest,
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: which takes a list and a number 
//O: and returns the element at the given position in the list (with zero referring to the first element) 
//E: or undefined when there is no such element

function nth(list, position){
	if(listToArray(list).length - 1 < position || position < 0){
		return undefined;
	}
	if(position){
		return nth(list.rest, position - 1);
    }
	return list.value;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: takes two values 
//O: returns true only if they are the same value or are objects with the same properties, 
//   where the values of the properties are equal when compared with a recursive call to deepEqual

function deepEqual(first, second) {
  if (typeof first !== 'object' && typeof second !== 'object') {
      return first === second;
   }
  if (typeof first !== 'object' || typeof second !== 'object') {
      return false;
   }
 let keyFirst = Object.keys(first);
 let keySecond = Object.keys(second);
  if (keyFirst.length !== keySecond.length) {
      return false;
  }
  for (let i = 0; i < keyFirst.length; i++) {
    if (!keySecond.includes(keyFirst[i]) || !deepEqual(first[keyFirst[i]], second[keySecond[i]])) {
       return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
