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
    A dynamically typed language is a programming language where variables can hold values of any type 
    and the type is checked at runtime. This means that you don't have to specify what type of data a variable 
    will hold when you declare it.
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

// debugger;
test_a = " " + 3;
console.log("a::", test_a); // " 2"
console.log("a:-", typeof test_a); // " 2"
console.log("Length of a is", test_a.length); // 1

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

// Werid JS functionality::
/*
    The == operator is used to compare two operands. If the operands are of different types, JavaScript converts the operands then applies strict comparison.
    If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.
    In the below example, a and b are two objects. Even though they have the same properties with the same values, they are not the same object in memory.
*/
const a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";
console.log("a==c >>", a == c); // true
console.log("b==c >>", b == c); // true
console.log("a==b >>", a == b); // false
