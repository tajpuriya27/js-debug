// Normal function
function sum(a, b) {
  return a + b;
}

// Arrow function
let sum1 = (a, b) => {
  return a + b;
};

// Same as above arrow function with implicit return value
let sum2 = (a, b) => a + b;

let isPositive = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

document.addEventListener("click", function () {
  console.log("Click");
});

document.addEventListener("click", () => console.log("Click"));

// this keyword in arrow function
class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name);
    }, 100);
  }
}

let person = new Person("Bob");
console.log(this); // undefined
// person.printNameArrow(); // Bob
// person.printNameFunction(); // undefined

// this is not bound to the object in which it is defined
// this refers to the current context.

const address = {
  city: "kathmandu",
  test() {
    console.log(this);
  },
  test1() {
    setTimeout(function () {
      console.log(this); // this refers to the window object
    }, 100);
  },
  test2() {
    setTimeout(() => {
      console.log(this);
    }, 100);
  },
  test3() {
    var self = this;
    setTimeout(function () {
      console.log(self);
    }, 100);
  },
};

// address.test(); // {city: "kathmandu", test: ƒ, test1: ƒ, test2: ƒ, test3: ƒ}
// address.test1(); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// address.test2(); // {city: "kathmandu", test: ƒ, test1: ƒ, test2: ƒ, test3: ƒ}
// address.test3(); // {city: "kathmandu", test: ƒ, test1: ƒ, test2: ƒ, test3: ƒ}

// Arrow function does not have its own this
// this refers to the enclosing context
let arrFunc = () => {
  console.log(this);
};
// arrFunc(); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

function func() {
  var checking = "checking";
  console.log(this);
}
// func(); // has its own this

// let sum101 = (a, b) => ({ num1: a, num2: b });
// console.log(sum101(1, 2));
