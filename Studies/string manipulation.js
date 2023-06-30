/* *
 *  0. STRING MANIPULATION
 * 
 *  JavaScript strings are primitive data types that can contain any characters provided they are wrapped within single
 *  or double quotes, or backticks when creating a string via a template literal. Strings store data as text, and much 
 *  like arrays- they have zero-based indexes. When manipulating a string there are a wide variety of methods that can 
 *  be used. These methods help users to make changes with the string values, finding indexes of a particular character, 
 *  or converting a string to lower/ upper case etc. Also of note is that two operators can also be used to specifically
 *  concatenate a string. While working with strings - it is worth noting that in JavaScript- 'a' is less than 'z'. This
 *  is because letters and characters do not follow alphabetical order but lexicographical order, and comparisons are
 *  measuring the Unicode value of the compared values.
 * 
 * */

/* *
 *  1. With operators
 * 
 *  Manipulating a string with operators is possible, but is limited. While the Addition Operator (+) and the Addition 
 *  Assignement Operator(+=) can both be used to alter a string, the same is NOT true of the Subtraction Operator (-) 
 *  and the Subtraction Assignment Operator (-=). While it is possible to concatenate a string, and in fact- there is 
 *  a string method that also concatenates a string, substracting or performing other operations on a string will lead
 *  to JavaScript assessing that the two operands are not numbers, and then returning NaN as a result. If the string 
 *  can be converted to a Number to make the substraction work, JavaScript will choose to convert the string to a 
 *  number and then return the result of the two numbers post subtraction (ex: compare '2' + '3' = '23' when using 
 *  addition to '3' - 2 = 1 when using subtraction).
 * 
 * */
     // Using the Addition Operator (+):

      let halfString = 'I really needed '; 
      let otherHalf = 'to be put back together again';

      let youCompleteMe = halfString + otherHalf + '. Thanks for your help!'; // using the + operator, we can add variables containing strings or the strings themselves
      console.log(youCompleteMe) // =>'I really need to be put back together again. Thanks for your help!' is logged to the console

     // Using the Addition Assignment Operator(+=):

      let noContext = 'I visited Ashley in the hospital'
      let addingContext = ', she works there as a doctor.'

      noContext += addingContext; // here we use the += to assign the string in addingContext to the already existing string in noContext
      console.log(noContext) // => 'I visited Ashley in the hospital, she works there as a doctor.' is logged to the console

/* *
 *  2. With string methods
 * 
 *  There are several methods that can be used to manipulate strings, some of them include .slice(), .concat(), .charAt(), .substring(), 
 *  .replace and .replaceAll(), .toUpperCase(), and .toLowerCase(). There are 3 methods for extracting a part of a string: .slice(), 
 *  .substring(), and .substr() - while substr is not strictly depreciated, it is considered a legacy function and substring should be 
 *  used in its place when possible. The big difference between the two metods is that while substr only replaces the first match and
 *  requires specifying the string to be replaced- the replaceAll() method allows you to specify a regular expression instead of a 
 *  string to be replaced - and can be used to replace all instances of the match. The method toUpperCase() simply converts a string 
 *  to upper case while a string can be converted to lower case with toLowerCase(). Similarly to the concatenation operator (+), concat() 
 *  joins two or more strings together. The charAt() method returns a character at a specified index (position) in a string. And if we 
 *  wanted to convert a string to an array, we can do so with the split() method. 
 * 
 * */
     // Manipulating Strings With .slice():

      let pizza = 'Pepperoni';

      let pizzaSliced = pizza.slice(0, 6); // when slicing, we specify the starting and end indexes- though the end index is optional. No end index? The slice will end at the last index of the string
      console.log(pizzaSliced) // => 'Pepper' is logged to the console

     // Manipulating Strings With .concat():

     let pizzaception = pizza.concat(pizza.concat(pizza));
     console.log(pizzaception); // => 'PepperoniPepperoniPepperoni' is logged to console

     // Manipulating Strings With .substring():

     let whatsWrong = pizza.substring(4, 6) + pizza.substring(5, 7) + pizza.substring(5, 6); // with substring(), we specify start and end indexes of the string and can pull these values as many times as we like
     console.log(whatsWrong); // => 'error' is logged to console
     console.log(pizza); // // => still 'Pepperoni', note: slice is non-destructive, it does not modify the orignal array

     // Manipulating Strings With .replaceAll():

     let regExtraCheesePizza = pizza.replaceAll(/[a-zA-Z]/g, 'CHEESE!'); // here we use replaceAll to replace all upper and lower case letters and replace them with 'CHEESE!' 
     console.log(regExtraCheesePizza) // => 'CHEESE!CHEESE!CHEESE!CHEESE!CHEESE!CHEESE!CHEESE!CHEESE!CHEESE!' is logged to the console

     // Mainpulating Strings With .toUpperCase() and .toLowerCase():

     let thingsAreLoookingUp = whatsWrong.toUpperCase(); // force all letters of whatsWrong to upper case
     console.log(thingsAreLoookingUp) // => 'ERROR' is logged to the console

     let easyOnThePepper = pizzaSliced.toLowerCase(); // force all letters of pizzaSliced to lower case
     console.log(easyOnThePepper) // => 'pepper' is logged to the console