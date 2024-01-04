# Note taking

## Arrow-normal-funtion-this.js

<details>
<summary>Traditional Function</summary>

- Defining function in traditional way:
  ```js
  function sum(a, b) {
    return a + b;
  }
  ```

</details>

<details>
<summary>Arrow Function</summary>

- Arrow Function was introduced in ECMAScript 2015(ES6 version).

  ```js
  let sum = (a, b) => {
    return a + b;
  };

  // implicit return value:
  let sum = (a, b) => a + b;

  // returning objects:
  let sum = (a, b) => ({ num1: a, num2: b });
  ```

</details>

**We can shorten our code if we use arrow function:**

```js
document.addEventListener("click", function () {
  console.log("Click");
});

// shorten code
document.addEventListener("click", () => console.log("Click"));
```

### Where `this` keyword is used

- `this` keyword is used to refer to the keys within the object if accessed by it's method.

  ```js
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
        console.log(this); // refers to address object
      }, 100);
    },
    // to implement this same as arrow function within traditional function
    test3() {
      var self = this;
      setTimeout(function () {
        console.log(self);
      }, 100);
    },
  };

  address.test(); // {city: "kathmandu", test: ƒ, test1: ƒ, test2: ƒ, test3: ƒ}
  address.test1(); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
  address.test2(); // {city: "kathmandu", test: ƒ, test1: ƒ, test2: ƒ, test3: ƒ}
  address.test3(); // {city: "kathmandu", test: ƒ, test1: ƒ, test2: ƒ, test3: ƒ}
  ```

- Here, method `test` uses `this` keyword to refer to keys within the `address` object.
- Before ES6, use use `var self= this` and then use the `self` variable to refer to address object as shown in example above.
- You will learn the difference of using `this` keyword in traditional function and arrow function in below example.

Difference of using `this` keyword in arrow function vs traditional function:

```js
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

let favPerson = new Person("Bob");
console.log(this); // returns window object in V8 and {} in node
console.log(this.name); // undefined
favPerson.printNameArrow(); // Bob
favPerson.printNameFunction(); // undefined
```

- In first console, `this` indicates to the main/anonymous funtion which returns window object in browser and empty object in node.
- In second console, `this.name` is undefined as `name` key is not found in an object returns by browser or in an empty object returned by node environment.
- `favPerson.printNameArrow()` consoles `bob` because `this` keyword is used within arrow function. Arrow function doesn't create it's context therefore `this` here refers to favPerson instance of class person.
- `favPerson.printNameFunction()` consoles `undefined` because traditional fucntion creates it's own context and try to search `name` key within it's context.
