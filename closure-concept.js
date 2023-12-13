/*
- Closure is almost same as scope. Inner function has access to outer function scope. But closure is more than that.
- Closure is a function that has access to its outer function scope even after the outer function has returned.
*/

/ ********** Simple scope Concept ********** /;
const globarVariable = "I am global variable";
function outerFunction() {
  const outerVariable = "I am outer variable";
  function innerFunction() {
    const innerVariable = "I am inner variable";
    console.log(innerVariable);
    console.log(outerVariable);
    console.log(globarVariable);
  }
  innerFunction();
}
outerFunction();
// => I am inner variable
// => I am outer variable
// => I am global variable

/ ********** CLOSURE Concept 1 ********** /;
function getGreeter() {
  console.log("getGreeter is running");
  let name = "Hustler";
  console.log("getGreeter is finishing");
  return function () {
    console.log("Hi", name);
  };
}
let greeter = getGreeter(); // => getGreeter is running // => getGreeter is finishing
greeter(); // => Hi Hustler

/ ********** CLOSURE Concept 2 ********** /;
function callCount() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let returnedFunction = callCount();

returnedFunction();
returnedFunction();
let finalCount = returnedFunction();
console.log(finalCount); // => 3
