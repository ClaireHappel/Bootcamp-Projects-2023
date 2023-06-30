/* *
 *  0. DATA TYPES
 * 
 *  JavaScript is a dynamic programming language that is weakly typed. Dynamic programming languages are a class of high
 *  level programming languages that execute many behaviors at runtime that other languages might perform during compilation.
 *  A programming language is loosely typed, or weakly typed, when it does not require diffrent variables and objects to be
 *  specified by the programmer. This means that variables in JavaScript are not tied to any one value type, and any variable 
 *  is able to be assigned or reassigned as needed to any data type. Addtionally, because it is weakly typed- JavaScript allows
 *  for implicit type conversion. Implicit type conversion is when instead of throwing an error, JavaScript will allow for two 
 *  different data types to be used in an operation and return what it believes the correct result to be (for example, if a
 *  number 3 is added with the string "3", JavaScript will return a 6 after converting the string value). This can cause odd
 *  results, particularly because of the way some of the data types are handled. There are a total of six simple data types 
 *  and three complex data types, and all have unique properties and oddities that set them apart within the language.
 * 
 * */

/* *
 *  1. Number
 * 
 *  Numbers, which are floating point values instead of integers within JavaScript, can be either whole numbers (such as 9, 
 *  398420, or 78) or decimal numbers (such as 56.78, 9.32, or .000016). There are many ways to write a number or even 
 *  transform another data type into a number. Number(value) converts a value to the Number type, or if it is impossible 
 *  to convert- returns NaN. The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, while 
 *  this is highly accurate, it is not limitless in terms of the numbers it can produce- and thus there can be issues with
 *  a value's magnitude and precision which will be discussed further in the operators section of this project.
 * 
 * */ 
      // Variable Set to a Number:
       let thisIsANumber = 4329;

      // Transforming a String to a Number:
       let prestoChango = Number('42');
       console.log(prestoChango); // => 42 is printed to the console

/* *
 *  2. String
 * 
 *  Strings are one of the data types that have indexes (starting at index 0) and a length property, which makes them 
 *  particularly easy to work with and manipulate. String can be created using single or double quotes, which are treated 
 *  identically, or using the backtick character ` in order to create template literals (also called template strings).
 *  A unique property worth noting regarding strings is that in JavaScript- 'a' is less than 'z'. This is because letters 
 *  and characters do not follow alphabetical order but lexicographical order, and comparisons are measuring the Unicode 
 *  value of the compared values.
 * 
 * */
     // Variable Set to a String:
      let whatAString = "what a value!";

     // Transforming a Number to a String:
      let stringifying = String(null); // while some methods like .toString() will return an error trying to turn null or undefined values to a string, String() will convert them.
      console.log(stringifying) // => 'null' is logged to console

/* *
 *  3. Boolean
 * 
 *  There are only two boolean values: true and false. These values are often used in conditionals. The primitive Boolean 
 *  values true and false are distinctly different from the the true and false values of the Boolean object. To avoid any
 *  errors within code- avoid using Boolean() constructor with new to convert a non-boolean value to a boolean value.
 *  Instead, use Boolean as a function or the double bang operator to coherce the value into the primitive boolean.
 * 
 * */
     // Variable Set to a Boolean:
      let thisBoolean = false;

     // Cohercing a Value to a Primitive Boolean Value:
      let changeToBoolean = 43297;
      console.log(!!toBoolean) // 'true' is logged to console

/* *
 *  4. Array
 *   
 *  Arrays store a collection of many different values. They are ordered, and thus have a length and index property similar 
 *  to strings- with the first index starting at 0. They are considered to be objects within JavaScript, and sorting them 
 *  from objects is best done with the Array.isArray() method. JavaScript arrays are not associative arrays. This is because
 *  unlike other objects- the elements in an array are access using index values instead of having strings as indexes. This
 *  is why dot notation can be used in order to access an object but not on arrays, as dot notation is always searching 
 *  for a string value. There are several methods specifically for working with arrays that allow for both destructive and
 *  non-destructive manipulations of data stored within arrays.
 * 
 * */
     // Variable Set to an Array:
      let lookAnArray = ['elements', 'of', 'an', 'array'];

     // Using Array.isArray() to Determine is a Value is an Array:
      console.log(Array.isArray(lookAnArray)) // => 'true' is logged to the console
    
    // How To Access An Array
     
     // bracket notation 
      console.log(lookAnArray[0]) // => 'elements' is logged to the console

     // array methods, such as .push() and .unshift()
       lookAnArray.push('!'); // adds element to the back of the array
       lookAnArray.unshift('Look'); // adds element to the front of the array
       console.log(lookAnArray); // => [ 'Look', 'elements', 'of', 'an', 'array', '!' ] is logged to the console

/* *
 *  5. Object
 * 
 *  Objects are unordered (meaning they do not have a length property, nor indexes) and instead contain a 
 *  collection of key/value pairs. Using typeof we can see that the type object is not limited to objects
 *  alone, and that many other elements are also considered objects. This includes arrays, nulls, and Date. 
 *  Their keys and values can be accessed using dot or bracket notation, or by using a for-in loop - which
 *  will be discussed in loops. 
 * 
 * */
      // How to Look for Specific Objects:

        let thisObj = { not: 'a date, array, or null'}; // => an object
        let thisDate = new Date(); // => a new date
        let imNull = null; // => value set to null
        let isAnArray = [1, 2, 3]; // => an array
   
        function onlyObjects (anObj) {
          if (anObj instanceof Date) { // this condition will check for dates
           return 'No dates!'; 
             } else if (anObj === null) { // this condition will check for null
           return 'Never a null day!';
             } else if (Array.isArray(anObj)) { // this condition will check for arrays
          return 'Thrown in dis-array!';
             } else {
          return 'Is an object.' // if none of the previous values were hit, we have an object
          }
        }
   
        console.log(onlyObjects(thisObj)); // => 'Is an object.' is logged to the console
        console.log(onlyObjects(thisDate)); // => 'No dates!' is logged to the console
        console.log(onlyObjects(imNull)); // => 'Never a null day!' is logged to the console
        console.log(onlyObjects(isAnArray)); // => 'Thrown in dis-array!' is logged to the console

      // How to Access an Object (using previously declared object, thisObj):
        
        // dot notation 
        thisObj.newKey = 'this key';
        // bracket notation 
        thisObj['anotherNewKey'] = 'that key';

        console.log(thisObj); // =>  {
                                  //  not: 'a date, array, or null',
                                  //  newKey: 'this key',
                                  //  anotherNewKey: 'that key'
                                  // }

/* *
 *  6. Function

 *  Unlike other data types, a function can produce a completely new value. Functions can be named, anonymous, or assigned
 *  to a variable. They can be nested just like arrays, but do not contain the length or index properties on an array. Just
 *  like the other data types, they can be returned or passed to another function via arguments. A function can be anonymous,
 *  though this makes it difficult to access the function unless it is inside another function, or even better- assigned as 
 *  another function's return- which can help us to assign the function to a variable. They can also optionally take parameters- 
 *  a function without parameters can be invoked by its name followed by an opened and closed parentheses. All functions will 
 *  have a function body, and then optionally have a return.
 * 
 * */ 
     // Example of a Function: 
     //          ___ function name   ____ parameters that take arguments are located here
     //         |                   |
      function thisFunction(thatParameter) {
        return `You want some return? Cool, let's use this ${thatParameter} I found in the dirt. Five second rule, it should be fine!'`;
      } // |
     //    |___ function return will return a value  

      let thisArgument = 'argument';

     // Example of a Function Call:

      thisFunction(thisArgument);
     // |                     |
     // |__ invoking func     |__ arguments will be passed into the function via parameters

      console.log(thisFunction(thisArgument)); // => 'You want some return? Cool, let's use this argument I found in the dirt. Five second rule, it should be fine!!' is logged to the console


/* *
 *  7. undefined
 * 
 *  Undefined means does not exist or contains nothing, in the sense of this value was stated but was not defined. 
 * 
 * */
     // Checking For an undefined Value:

     let whatTimeIsIt; // => while the variable was created, it was never assigned
     console.log(whatTimeIsIt); // => 'undefined' is logged to the console

     // Locating undefined Values to Assign Value to Them:

     if (whatTimeIsIt === undefined) {  // => checking for the value undefined
     whatTimeIsIt = 'Party Time!'; // => now whatTimeIsIt has been assigned a value of 'Party Time!'
     }
     console.log(whatTimeIsIt); // => 'Party Time!' is logged to the console

/* *
 *  8. null
 * 
 *  Null means does not exist or contains nothing, in the sense that a programmer wanted the value to be nothing- 
 *  as such the value it contains is nothing. It is important to be wary of typeof null, as this returns that the
 *  type of null is an object.
 * 
 * */
     // null is an object by error due to an artifact of early JavaScript where its type tag was similar to objects, leading to the mix up 
     console.log(typeof null); // => 'object' is logged to console
     
        // null can be sorted from other objects by filtering for it specfically
        let newObj = { not: 'null'}; // => a standard object
        let isNull = null; // => a new date

       function nullified (obj) {
         if (obj === null) { // this will sort null from other objects
          return "Null and void!"; 
         } else {
          return "Not null."
         }
       }

        console.log(nullified(newObj)); // => "Not null." is logged to the console
        console.log(nullified(isNull)); // => "Null and void!" is logged to the console    
     
/* *
 *  9. NaN
 * 
 *  Nan is a variable within the global scope. NaN will be returned if: a number conversion  fails (such as using Number() or Math.abs() 
 *  on undefined), a math operation returns something that is not a real number, the number has an indeterminate form (for example, 
 *  Infinity - Infinity), a method or expression has a value coherced to NaN, or when an invalid value is represented as a number. 
 *  NaN is contagious, this means that much like a virus, it spreads from one part of the code to the next, being passed on. The 
 *  place where NaN is first spotted can be far from the place that caused it, making it a high priority to track down if an 
 *  unintentional NaN slips into code. All failures that cause NaN fail silently, without errors. An interesting thing to note 
 *  about NaN is that when compared with any comparison operator, NaN always returns false - even if the comparison involves
 *  comparing NaN to NaN. The proper way to check to see if a number is NaN is via Number.isNan()
 * 
 * */ 
     // NaN Created From A Number Conversion Failure:

      let numberMe = 'hello';
      console.log(Number('numberMe')); // => NaN is logged to the console, since there is no appropriate number for JavaScript to convert 'hello' to
    
     // Checking for NaN:

     if (Number.isNaN(NaN)) { // we are checking to see if the number NaN is NaN- this is possible to check because of NaN's number type
      console.log('NaN of your business!'); // => NaN of your business! is logged to console
     }

/* *
 *  10. Infinity and -Infinity
 * 
 *  There are two values that represent positive Infinity in JavaScript. The first Infinity is a variable in global
 *  scope and a property of the global object. This value is distinctly different from the value that is called 
 *  with Number.POSITIVE_INFINITY. This second value is a data property (and thus the one we are concerned with).
 *  Positive Infinity is the highest number value within JavaScript. Dividing any positive number by POSITIVE_INFINITY 
 *  produces +0, while dividing a negative by POSITIVE_INFINITY results in a -0. Any positive value, including 
 *  POSITIVE_INFINITY itself, equals POSITIVE_INFINITY. 0 or NaN multipied by POSITIVE_INFINITY is NaN. Any 
 *  negative value multiplied by POSITIVE_INFINITY is equal to NEGATIVE_INFINITY. POSITIVE_INFINITY divided by 
 *  any negative value that is not NEGATIVE_INFINITY is NEGATIVE_INFINITY. POSITIVE_INFINITY, divided by any 
 *  positive value except POSITIVE_INFINITY, is POSITIVE_INFINITY. POSITIVE_INFINITY, divided by either NEGATIVE_INFINITY 
 *  or POSITIVE_INFINITY, is NaN. Number.POSITIVE_INFINITY > x is true for any number x that isn't POSITIVE_INFINITY.
 *  
 *  While POSITIVE_INFINITY is the highest possible number, Number.NEGATIVE_INFINITY is the lowest number value within 
 *  JavaScript. Any positive value, including POSITIVE_INFINITY, multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY.
 *  A negative value, including NEGATIVE_INFINITY, multiplied by NEGATIVE_INFINITY is POSITIVE_INFINITY. A positive 
 *  value divided by NEGATIVE_INFINITY is -0. A negative value divided by NEGATIVE_INFINITY is +0. Zero or NaN multiplied
 *  by NEGATIVE_INFINITY is NaN. NEGATIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is POSITIVE_INFINITY.
 *  NEGATIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is NEGATIVE_INFINITY. NEGATIVE_INFINITY, 
 *  divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN. x > Number.NEGATIVE_INFINITY is true for any number 
 *  x that isn't NEGATIVE_INFINITY.
 * 
 * */
     // Using Infinity to Make Numbers More Manageable:

     let tooBig = Number.MAX_VALUE * 2;
     // if the number is too big
     if (tooBig === Number.POSITIVE_INFINITY) {
       //we change it to something much smaller
       tooBig = returnFinite();
      }
     
     // Using -Infinity to Make Numbers More Manageable:
     let tooSmall = -Number.MAX_VALUE * 2;
     //if the number is too small
     if (tooSmall === Number.NEGATIVE_INFINITY) {
       //we change it to something much larger
       tooSmall = returnFinite();
      }

/* *
 *  11. What is the difference between primitive/simple and complex data types?
 * 
 *  Simple, or primitive data types are the lowest type of data, meaning more complex types are formed from these
 *  simple data types. The six different simple data types are: strings, numbers, booleans, undefined, NaN, null. 
 *  All these primitives are static data- that is, that they have a size fixed at the compile time and will be 
 *  stored in a stack. All primitive values are atomic - an atomic action is one that effectively happens all at 
 *  once- think of it as meaning “one at a time”. When that concept meshes with primitives, it similarly is 
 *  indicating that primitives have only one value. Simple data tyes are also immutable. An immutable value is 
 *  one whose content cannot be changed without creating an entirely new value. The last property they all share
 *  is that they are all copied from one variable to the next when assigning or passing. This process is aptly 
 *  called "copy by value". 
 * 
 * */ 
     // Examples of Simple Data Types:

      let stringed = "This is a string value"; // a string
      let numbed = 4038; // a number
      let booled = false; // a boolean

 /* *
 *  Complex values are of an indefinite size and aggregate values. As such they require dynamic memory allocation- 
 *  which means they will be allocated more space in memory over time via the heap where they are stored. There are 
 *  three complex data types: objects, arrays, and functions. Complex data types, unlike simple data types- are
 *  "copy by reference". This means that instead of a copy, variables will simply reference the data they are 
 *  assigned to. 
 * 
 * */
     // Examples of Complex Data Types:

      let arrayed = ['this', 'array']; // an array
      let objected = {
        thisIs: 'an object'  // an object
      };
      let functioned = (summed) => summed + 1; // a function
      
/* *
 *  12. Primitive values are passed to a function BY COPY, complex values are by reference.
 *      What does that mean, and how are they different?
 * 
 *  When using any primitive value- a variable will make a copy of the value they are assigned. If there are 
 *  changes made to the original data- this will not impact the data stored in the variable. In a similar 
 *  vein, changing the variable will have no impact on the original data. 
 * 
 * */
     // Copy by Value:
     
       //number is assigned to a primitive value, 5
        let number = 5;
       //number 2 is copying the value of number
        let number2 = number;
     
       //what happens when we alter the values assigned to both variables?
        number -= 3;
        number2 += 6;
     
       //as their relationship began and ended with the moment of the copying- neither variable are impacted by the operations
        console.log(number); // => 2 is logged to console since 5 - 3 = 11
        console.log(number2); // => 11 is logged to console since 5 + 6 = 11

 /* * 
 *  Complex values will instead copy by reference. This means that variables will not make a copy of the value they
 *  are being assigned to, but instead will make a reference to that data. Any manipulation of variables will effect 
 *  the original data. Any changes to the original data will also effect the variable.
 *    
 * */
     // Copy by Reference:

      //referenceMe is assigned to the complex array value, [1, 2, 3, 'a', 'b', 'c']
       let referenceMe = [1, 2, 3, 'a', 'b', 'c'];

      //we assign refMeUpBaby to the value of referenceMe 
       let refMeUpBaby = referenceMe;

      //what happens when we alter the values assign to both variables?
       referenceMe.unshift(0);
       refMeUpBaby.push('d');

      //since they are both making a reference to the same data, refMeUpBaby can make changes to referenceMe as well
       console.log(referenceMe); // => [ 0,   1,   2,   3, 'a', 'b', 'c', 'd'] is logged to the console





