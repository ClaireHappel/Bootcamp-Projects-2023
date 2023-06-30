/* *
 *  0. OPERATORS
 *    
 *  There are several different operator types used within expressions in order to evaluate, alter, 
 *  or assign values within programs. If an entire javascript file is a car, and the expressions 
 *  inside it are the critical parts needed to create the car itself- the operators are the gears, 
 *  belts and pistons that allow for the components of the vehicle to operate intended instead of 
 *  malfunctioning. Operators help expressions (aka units of code) to resolve to a value. Some 
 *  types of operators present within javascript are assignment operators, arithmetic operators, 
 *  comparison operators, logical operators, unary operators, and ternary operators.
 *  
 * */

/* *
 *  1. Assignment operators
 * 
 *  The simple assignment operator is the equal sign (=) which is used to assign the right hand 
 *  operand to the left hand operand ( in the case of let x = 1 for example, 1 is the right hand 
 *  operand being assigned the the left operand x ). The simple assignment operator can be used with 
 *  a multitude of other operators in order to assign a value while also performing another action 
 *  to the value being assigned. Take for example sum += 1. The arithmetic addition operator + with 
 *  the simple assignment operator = creates a new operator called the addition assignment operator. 
 * 
 * */
     // Simple Assignment Operator (=):
       
       // assigning petNumber to the value of 2 with the equal sign
       let petNumber = 2;

     //Addition Assignment Operator (+=): 
       
       let sum = 0;
       sum += 1; // => sum incremented by one and reassigned from zero to the new value.
       console.log(sum); // => 1 is logged to the console

     //Subtraction Assignment Operator (-=):

       let subtract = 4;
       subtract -= 2; // => subtract decremented by two and reassigned to the new value
       console.log(subtract); // => 2 is logged to the console

     //Multiplication Assignment Operator (*=):

       let multiply = 2;
       multiply *= 2; // multiply is multiplied by 2 and the value is reassigned
       console.log(multiply); // => 4 is logged to the console 

     //Division Assignment Operator (/=):

       let divide = 10;
       divide /= 2; // => divide is divided by 2 and the value is reassigned
       console.log(divide); // => 5 is logged to the console 

     //Remainder Assignment	Operator (%=):
       
       let remainder = 20;
       remainder %= 2; // => 20/2 produces a remainder of 0. 0 is than reassigned to remainder	
       console.log(remainder); // => 0 is logged to the console

     //Exponentiation Assignment Operator (**=):

       let exponential = 3;
       exponential **= 3; // => 3 * 3 * 3 produces the value 27, which is reassigned to exoponential
       console.log(exponential) // => 27 is looged to the console

/* *
 *  2. Arithmetic operators
 *  
 *  Arithmetic operators work with numbers or variables that represent numbers. They will evaluate to a number 
 *  value which will then be returned. They can work with both whole numbers (for example: 2, 463287, 86) or numbers
 *  that have a decimal point (for example: 4.5, 34.0000344, or .098). Both are floating point values instead of integers.
 *  Arithmetic operators, as implied by their name- involve arithmetic concepts such as adding, subtracting, dividing,
 *  or multiplying. One way that Javascript differs from standard arithmetic found in a classroom is the way that it 
 *  handles division. If the number 0 is divided by 0, it will return NaN. If a positive number is divided by 0, 
 *  it will return infinity. On the other hand, a negative number divided by 0 will return negative infinity. 
 *  Similarly, odd things can happen when using floating point numbers with arithmetic operators (for example, 
 *  0.1 + 0.2 does not equal 0.3, but instead 0.30000000000000004). This is due to limitations within the language
 *  itself that was previously touched on in data types, and thus not an error, but instead a quirk of many 
 *  programming languages. 
 * 
 * */
     // Addition Operator (+):
       
       let addThis = 10;
       let withThis = 5; // we will use this number for all our arithmetic operators

       let thisIsAddition = addThis + withThis; // the addition operator will add 10 and 5
       console.log(thisIsAddition) // => 15 is logged to the console

     // Subtraction Operator (-):

       let subtractFrom = 45;

       let subtractedFrom45 = subtractFrom - withThis;
       console.log(subtractedFrom45); // => 40 is logged to the console

     // Multiplication Operator (*):
      
      let multiplyThisOneTwoTimes = 1;

      let multipliedTwice = multiplyThisOneTwoTimes * withThis * withThis; // the multiplication operator will multiply 1 by 5 and then multiply by 5 again
      console.log(multipliedTwice); // => 25 is logged to the console

     // Division Operator (/):

      let divideMe = 100;

      let aNumberDivided = divideMe / withThis; // the division operator will divide 100/5
      console.log(aNumberDivided); // => 20 is logged to the console


     // Exponentiation Operator (**):
      
      let exp = 3;

      let exponentialPower = exp ** withThis; // the exponentiation operator will multiply 3 by 3 five times
      console.log(exponentialPower); // 243 is logged to the console


     // Modulus Operator or Division Remainder Operator (%):
      
      let divideMeRepeatedly = 2000;

      let remainderAfterDivision = divideMeRepeatedly % 2; // 2000 is divided by 2 until it can no longer be divided, then the remainder is recorded
      console.log(remainderAfterDivision); // 0 is logged to the console

     // Increment (++): => can be either prefix or postfix, this will be touched on in unary operators

      let oneNum = 1;

      oneNum++; // oneNum is incremented by one
      console.log(oneNum); // => 2 is logged to the console

     // Decrement (--): => can be either prefix or postfix, this will be touched on in unary operators

      let twoNum = 2;

      twoNum--; // twoNum is decremented by one
      console.log(twoNum); // => 1 is logged to the console

/* *
 *  3. Comparison operators
 *  
 *  Comparison operators compare their operands to assess whether the comparison is true or false, returning the boolean
 *  value. Different data types are assessed in different ways. While numbers are evaluated simarly to how they would 
 *  be in a standard math class (for example, 2 > 4 would return a false result since 2 is not greater than 4), strings 
 *  are compared based on their Unicode values, which places letters down the alphabet at a higher instead of lower value. 
 *  If two data types being compared are not of the same type, Javascript will attempt to convert them during the comparison
 *  process, which can cause odd values. The strict equality and strict inequality operators however, will not perform 
 *  type conversion- instead strictly comparing for the exact specified value. 
 *  
 * */
     // Greater Than (>):

      if (5 > 2) { // if five is greater than two
       console.log('greater than'); // => 'greater than' is logged to the console
      }

     // Greater Than or Equal to (>=):

      if (4 >= 4) { // if four is greater than or equal to four
       console.log('greater than or equal to'); // => 'greater than or equal to' is logged to the console
      }

     // Less Than (<):

      if (6 < 9) { // if six is less than nine
       console.log('less than'); // => 'less than' is logged to the console
      }

     // Less Than or Equal to (<=):

      if (5 <= 5) { // if five is less than or equal to five
       console.log('less than or equal to'); // => 'less than or equal to' is logged to the console
      }

     // Strict Comparison (=== OR !==):

        // Strictly Equal to (===):

        if (8 === 8) { // strict comparison will also take types into account, so 8 must also be a number for the comparison to be truthy
          console.log('is strictly equal to'); // => 'is strictly equal to' is logged to the console
        }

        // Strictly Not Equal to (!==):

        if ('3' !== 3) { // the bang operator will flip the result of a normal strict comparison, returning true for the opposite result 
          console.log('is not strictly equal to'); // => 'is not strictly equal to' is logged to the console
        }

        if ('a' !== 'A') { // lowercase letters and uppercase letters have a different unicode value and thus, are not equal to each other
          console.log('is also not strictly equal to'); // => 'is also not strictly equal to' is logged to the console
        }

     // Non Strict Comparison (== OR !=):

       // Equal to (==):
         
        if ('7' == 7) { // because Javascript performs a type conversion in non-strict comparisons, different datas types can equal each other
         console.log('is equal to'); // => 'is equal to' is logged to the console
        }

       // Not Equal to (!=):

       if (5 != '6') { 
        console.log('is not equal to'); // => 'is not equal to' is logged to the console
       }

       if ('a' != 'A') { // even with a loose comparison, a and A are not equal- as the unicode values remain the same
        console.log('is also not equal to'); // => 'is also not equal to' is logged to the console
       } 

/* *
 *  4. Logical operators
 *  
 *  The three logical operates are && (also known as the logical AND operator), || (also known as the logical OR operator),
 *  and ! (also known as the logical NOT operator or bang). All three are typically used to combine boolean values and 
 *  generally speaking, return one as well. However, it is worth noting that in addition to evaluating from left to right, 
 *  || and && are both capable of short-circuiting. What does short circuiting do exactly? In the case of the || operator- 
 *  the operator will return the first truthy value, but if no values are truthy, it will return the last, falsey value. 
 *  In the case of the && operator- it will return the first falsy value, and if none are falsy, it return the last, truthy 
 *  value. The logical NOT operator also has its own unique use cases- it can be used on a variable to provide its logical 
 *  opposite, or if use twice (!!) can coherce a variable from truthy to boolean true, or from falsey to boolean false.
 * 
 * */
     //Logical AND:

     //note: falsey values in javascript include: false , 0 , -0 , 0n , "" , null , undefined , and NaN
     console.log("" && "Red");    // => "" is returned as a falsey value
     console.log("Blue" && 'Red' && false); // => false is returned as a falsey value
     console.log("Blue" && "Red"); // => "Red" is returned since no values are falsey
     
     // Logical OR:

     //note: values are truthy unless they are defined as falsey 
     console.log("" || true || "Red"); // => true is returned as a value since "" is falsey
     console.log("Blue" || "Red"); // => "Blue" is returned because a string value is always considered to be true
     console.log(false || -0 || null); // => null is returned since no values are truthy

     // logical NOT:

     //init real to the value of true
     let real = true;

     console.log(!real); // => false is returned since the logical opposite of real is a falsey value;
     console.log(!undefined); // => true is returned since the logical opposite of undefined is a truthy value
     console.log(!!"Red"); // => returns a true boolean since Red is truthy
     console.log(!!null); // => returns a false boolean since null is falsey

/* *
 *  5. Unary operators
 *
 *  Unary operators are operators that perform an action on an individual operand. there are some operators that fall under
 *  other categories such as arithmetic and logical operators that are unary operators as well. Unary Plus and Unary Minus
 *  will attempt a type conversion if the value being operated on is not a number.
 * 
 * */
     // Unary Plus (+x):

       let six = '6';
       console.log(+six) // => attempts to convert the string '6' into a number and succeeds, returning the number 6

     // Unary Minus	(-x):

       let eight = 8;
       console.log(-eight) // => since eight is already a number, the minus operator simply converts 8 to a negative, returning -8

     // Increment Operator (++x or x++):

        // Prefix (++x):
           //the prefix increment returns the value of a variable after it has been incremented.
        // Postfix (x++):
           //the postfix increment returns the value of a variable before it has been incremented.

           // lets show this by incrementing x
            let x = 2;

            //   3 + (3  *  4) => remember that multiplication is prioritized, leading to 3 + 12 = 15 as oppose to 6 * 4 = 24   
            //   |    |     |    
            x = ++x + x++ * x;
            //   |    |     |_ because x++ has changed 3 to 4, x is now 4. 
            //   |    |  
            //   |    |_ x++ will first return the value 3 before incrementation, it then increments 3 to 4 (but we do not see that change in this value)
            //   |
            //   |_ ++x will increment 2 to 3, because this is prefix and not postfix, the incrementation occurs before the value is returned
  
           console.log(x) // => 15 is logged to the console

     // Decrement Operator (--x or x--):

        // Prefix (--x):
           //the prefix decrement returns the value of a variable after it has been decremented.
        // Postfix (x--):
           //the postfix decrement returns the value of a variable before it has been decremented.

           // lets show this by decrementing y
           let y = 4;

            //   3 + (3  *  2) => remember that multiplication is prioritized, leading to 3 + 6 = 9 as oppose to 6 * 2 = 12  
            //   |    |     |    
            y = --y + y-- * y;
            //   |    |     |_ because y-- has changed 3 to 2, y is now 2. 
            //   |    |  
            //   |    |_ y-- will first return the value 3 before decrementation, it then decrements 3 to 2 (but we do not see that change in this value)
            //   |
            //   |_ --y will decrement 4 to 3, because this is prefix and not postfix, the decrementation occurs before the value is returned
       
           console.log(y); // => 9 is logged to the console
       
     // Bang Operator (!):

       if (!false) { // because the bang operator can be used on a single value, it is considered a unary operator
        console.log('bang!'); // => 'bang!' will be logged to the console
       }

     // typeof:

       //the typeof operator returns a string indicating the type of the operand's value.
       console.log(typeof 'this string?'); // => 'string' is logged to console
       console.log(typeof 777); // => 'number' is logged to console
       console.log(typeof NaN); // => 'number' is logged to console
       console.log(typeof true); // => 'boolean' is logged to console
       console.log(typeof Symbol('this')); // => 'symbol' is logged to console
       console.log(typeof BigInt(75765765465345324576987656756754563)); // => 'bigint' is logged to console
       console.log(typeof ((x) => x + y)); // => 'function' is logged to console
       console.log(typeof undefined); // => 'undefined' is logged to console
     
       //of particular note is the many things that will return 'object'
       console.log(typeof {key: 'value'}); // => 'object' is logged to console
       console.log(typeof null); // => 'object' is logged to console, why null is logged as an object is discussed in data types
       console.log(typeof ['elements', 'of', 'an', 'array']); // => 'object' is logged to console as arrays are   
       console.log(typeof (new Date())); // => 'object' is logged to console since the Date object is a built-in object in JavaScript that stores the date and time

     // delete:	

       // Used on an Object:

       let oneDelete = {
        name: 'One',
        deleteThis: 'plz'
       };
     
       delete oneDelete.deleteThis; // deletes a key/value pair
       console.log(oneDelete); // => { name: 'One' } is logged to the console
    
       // Used on an Array:

       let arrOneDelete = ['delete me', 'not me!'];

       delete arrOneDelete['delete me']; // delete only removes the value at a location, not the location itself- which is why we tend to use array methods like splice() instead
       console.log(arrOneDelete); // => [ <1 empty item>, 'not me!' ] is logged to the console
   
     // void	

      let aValue = void 'this'; // void will evaluate the given expression and then return undefined
      console.log(aValue); // => undefined is logged to the console

/* *
 *  6. Ternary operator
 * 
 *  There is only one operator that takes three operands- the ternary operator. The ternary operator is 
 *  very similar to an if/else conditional chain, and is often used in place of an if/else because of its
 *  brevity. Its three operands are: a condition that ends with a question mark (?), then an expression that
 *  executes if truthy ended with a colon (:), and a final expression to execute if the condition is falsy. It
 *  is preferable for readability if the conditional logic is short, but it is not ideal in situations that 
 *  would require extended logic and thus, nested ternary operators.
 * 
 *  It should be noted when using a function that explictly requires 'return' to be written, return should 
 *  syntactically be placed prior to the initial conditon of the ternary operator. This is because the 
 *  ternary operator evaluates to an expression and expressions can't contain a return statement.
 * 
 * */
     // Ternary operator:

     let ternary = true;

     //this line of code is highly readable and takes up only one line- and is a reusable function! this is where the ternary operator excels.
     let boolTest = (boolean) => boolean === true ? 'The ternary operator is very useful!' : 'Ternary operator? What\'s that?';

     console.log(boolTest(ternary)); // => 'The ternary operator is very useful!' is logged to the console