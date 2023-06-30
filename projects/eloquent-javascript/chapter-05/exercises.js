// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: takes in an array of arrays as a parameter
//O: return a single array that has all elements of the original arrays
//C: use the reduce method

function flatten(nestedArr) {
  return nestedArr.reduce((arr1,arr2) => {
    if (Array.isArray(arr2)) {
      return arr1.concat(flatten(arr2))
    } else {
      return arr1.concat(arr2);
    }
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: four params- a value, a test function, an update function, and a body function
//O: no return
//C: must run the test function on the value, and stop if it recieves a false result. then
//   call the body function, to give a current value, then call the update function to create 
//   a new value.

function loop(value, test, update, body){
  let thisVal = value;
  while(test(thisVal)){
      body(thisVal);
      thisVal = update(thisVal); 
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: two params, an array and a predicate function
//0: return true if every value of the array returns true

function every(array, predicateFunc) {
  storArr = [];
  for (let i of array) {
    if (!predicateFunc(i)) {
      storArr.push(true);
    }
  }
  if (storArr.length > 0) {
    return false;
  } else {
    return true;
  }
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


//I: takes in one string param 
//O: write a function that computes the dominant writing direction in a string of text. 

function dominantDirection(string) {

//create var ltr and init to an arr literal
let ltr = [];
//create var rtl and init to an arr literal
let rtl = [];

  //iterate through string with for loop
  for (let i = 0; i < string.length; i++) {
     //create a variable script and assign it to the result of invoking characterScript on the current character's char code
     let script = characterScript(string.charCodeAt(i));

     //determine if script is not equal to null
     if (script != null) {
        if (script.direction === 'ltr') {
          ltr.push(script);
        } else {
          rtl.push(script);
        }
     }
  }
  
  //check the lengths against each other
  if (ltr.length > rtl.length) {
    return 'ltr';
  } else {
    return 'rtl';
  }
}


//   //second solve method
//
//   function dominantDirection(text) {
//   let counted = countBy(text, char => {
//   let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   }).filter(({name}) => name != "none");
//   if (counted.length == 0) return "ltr";
//   return counted.reduce((a, b) => a.count > b.count ? a : b).name;
// }

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
