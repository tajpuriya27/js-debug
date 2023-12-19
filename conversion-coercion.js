// Type conversion in js
/*
    Conversion is the process of converting one type of value to another type of value explicitly.
    Developers do this by using the built-in functions in JavaScript.
*/
var varToConvert = 5;
console.log("First--", typeof varToConvert);
varToConvert = "5";
console.log("Second--", typeof varToConvert);
varToConvert = true;
console.log("Third--", typeof varToConvert);

// Type coercion in js
/* 
    Coercion is the process of converting one type of value to another type of value implicitly.
    This happens quite often in JavaScript because it is a dynamically typed language.
*/
const valuel = "5";
const value2 = 9;
let sum = valuel + value2; // 59
console.log(`Coercison1-- ${sum}`, typeof sum);

mul = valuel * value2; // 45
console.log(`Coercison2-- ${mul}`, typeof mul);

// true is converted to 1 and false is converted to 0 implicitly when used with a number
console.log("3 + true", 3 + true); // 4
console.log("3 + false", 3 + false); // 3
console.log("3 - true", 3 - true); // 2
console.log("3 - false", 3 - false); // 3
console.log("3 * true", 3 * true); // 3
console.log("3 * false", 3 * false); // 0
console.log("3 - true", 3 / true); // 3
console.log("3 - false", 3 / false); // Infinity

a = " " + 3;
console.log("a::", a); // " 2"
console.log("a:-", typeof a); // " 2"
console.log("Length of a is", a.length); // 1

// Equality operator
/*
    The equality operator (==) checks whether the two operands are equal, returning a Boolean result.
    The equality operator performs type coercion if the two operands are not of the same type.
*/
console.log(1 == 1); // true

// 1 is converted to "1" and then compared with "1"
console.log(1 == "1"); // true

// 1 is converted to true and "1" is converted to true
console.log(1 == true); // true

// 0 is converted to false and false is converted to false
console.log("0 == false", 0 == false); // true

/* The reason for this is that NaN stands for "Not a Number" and is used to represent the result of a mathematical operation 
that doesn't make sense. Since it represents an undefined or unrepresentable value, it wouldn't make sense for it to be equal 
to anything, even another NaN.
*/
console.log("NaN == NaN", NaN == NaN); // false

console.log("false == false:", false == false); // true

console.log("undefined == ''", undefined == ""); // false

console.log("undefined == ' '", undefined == " "); // false

// Strict equality operator
/*
    The strict equality operator (===) checks whether the two operands are equal, returning a Boolean result.
    The strict equality operator does not perform type coercion.
*/
console.log(1 === 1); // true
console.log(1 === "1"); // false
console.log(1 === true); // false
console.log(0 === false); // false
console.log(NaN === NaN); // false
