for (initialization; condition; increment/decrement) {
    // code to execute
  }

  for (let i = 0; i < 5; i++) {
    // console.log("for loop iteration:", i);
  }


  while (condition) {
    // code to execute
  }


  let j = 0;
while (j < 5) {
//   console.log("while loop iteration:", j);
  j++;
}


do {
    // code to execute
  } while (condition);


  let k = 0;
do {
//   console.log("do-while loop iteration:", k);
  k++;
} while (k < 5);


const numbers = [10, 20, 30];
for (const num of numbers) {
//   console.log(num);
}
// Output: 10, 20, 30

const greeting = "Hello";
for (const char of greeting) {
//   console.log(char);
}
// Output: H, e, l, l, o


const map = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of map) {
//   console.log(key, value);
}
// Output: a 1, b 2

const person1 = { name: "Alice", age: 30 };
for (const key in person1) {
//   console.log(`${key}: ${person[key]}`);
}
// Output: name: Alice, age: 30


const arr = [10, 20, 30];
arr.foo = "bar"; // Adding a non-index property
for (const index in arr) {
//   console.log(index); // Includes "0", "1", "2", and "foo"
}
// Output: 0, 1, 2, foo (unexpected!)





const person = { name: "Bob", age: 25 };

// Loop through keys
for (const key of Object.keys(person)) {
//   console.log(key); // "name", "age"
}

// Loop through values
for (const value of Object.values(person)) {
//   console.log(value); // "Bob", 25
}

// Loop through key-value pairs
for (const [key, value] of Object.entries(person)) {
//   console.log(key, value); // "name Bob", "age 25"
}