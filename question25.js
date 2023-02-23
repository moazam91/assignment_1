//Q. No.25: Answer

//Tests for equality and inequality with strings:
console.log("hello" === "hello"); // true
console.log("hello" !== "world"); // true
console.log("hello" === "Hello"); // false
console.log("hello" !== "HELLO"); // true

//Tests using the lower case function:
console.log("HELLO".toLowerCase() === "hello"); // true
console.log("Hello".toLowerCase() !== "hello"); // false

//Numerical tests:
console.log(10 === 10); // true
console.log(5 !== 10); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(5 <= 10); // true

//Tests using "and" and "or" operators:
console.log(true && true); // true
console.log(true && false); // false
console.log(false || true); // true
console.log(false || false); // false

//Test whether an item is in an array:
const myFruit = ["apple", "banana", "orange"];
console.log(myFruit.includes("apple")); // true
console.log(myFruit.includes("grape")); // false

