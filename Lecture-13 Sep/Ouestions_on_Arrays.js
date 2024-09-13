
// How do you create an array in JavaScript?
// You can create an array by using square brackets `[]` or the `Array` constructor.

let numbers = [1, 2, 3, 4, 5];  // Using square brackets
let moreNumbers = new Array(6, 7, 8);  // Using Array constructor


// How do you access elements in an array
// You can access an element in an array by referring to its index. The index starts from 0.

let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);  // Output: apple
console.log(fruits[1]);  // Output: banana


// How do you change an element in an array?
// You can modify an element in an array by assigning a new value to its index.

let fruits = ["apple", "banana", "mango"];
fruits[1] = "orange";  // Changing banana to orange


// How do you add elements to an array?
// You can add elements using methods like `push()` (to add at the end) or `unshift()` (to add at the beginning).

let fruits = ["apple", "banana"];
fruits.push("mango");  // Adds "mango" at the end
fruits.unshift("orange");  // Adds "orange" at the beginning
console.log(fruits);  // Output: ["orange", "apple", "banana", "mango"]


// How do you remove elements from an array?
// You can remove elements using methods like `pop()` (removes from the end) or `shift()` (removes from the beginning).

let fruits = ["apple", "banana", "mango"];
fruits.pop();  // Removes "mango" from the end
fruits.shift();  // Removes "apple" from the beginning
console.log(fruits);  // Output: ["banana"]


// How do you find the length of an array?
// You can find the length of an array using the `length` property.

let fruits = ["apple", "banana", "mango"];
console.log(fruits.length);  // Output: 3




// - `push()` – Adds elements to the end
// - `pop()` – Removes the last element
// - `shift()` – Removes the first element
// - `unshift()` – Adds elements to the beginning


