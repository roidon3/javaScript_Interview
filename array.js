const array = new Array(1,3,5,7,9);
const array1 =[2,4,6,8,10]

// let arr= array.length
// let arr = array.concat(array1)
// let arr=array.push(5)//returns length to see the org array check the org array
// let arr = array.pop()
// let arr = array.shift();// Removes the first element from an array and returns that element.
// let arr = array.unshift(4)//returns length`  Adds one or more elements to the beginning of an array.
// splice() – Adds, removes, or replaces elements in an array.

// The splice() method in JavaScript is used to add, remove, or replace elements in an array. 
// It modifies the original array and returns an array of the removed elements (if any)

// let arr = array.splice(1, 2); // Removes 2 elements starting from index 1, arr becomes [1, 4] returns removed ele
// let arr = array.splice(1, 0, 'a'); // Inserts 'a' at index 1, arr becomes [1, 'a', 4]
// slice() – Returns a shallow copy of a portion of an array without modifying the 
// original array.
// arr = array.slice(1, 3);
// let arr = array.indexOf(7)//Returns the first index at which a given element can be found in the array, or -1 if not found.
// let arr= array.includes(3)//Checks if an array includes a certain value, returning true or false.
// let arr= array.forEach(ele=>console.log(ele))
// map() – Creates a new array with the results of calling a provided function on every element in the calling array.
//filter() – Creates a new array with all elements that pass the test implemented by the provided function.
// let arr = array.filter(el => el % 2 !== 0);
// let arr= array.reduce((acc,el)=>acc+el,0)// Executes a reducer function on each element of the array, resulting in a single output value.
// find() – Returns the first element in the array that satisfies the provided testing function. Otherwise, returns undefined.
// let arr = array.find(el => el > 2); // found is 3
// findIndex() – Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, returns -1.
// let arr = array.join("-")// join() – Joins all elements of an array into a string.
// sort() – Sorts the elements of an array in place and returns the sorted array.
//reverse() – Reverses the order of the elements in an array in place.
//  let arr =array.every(ele=>ele >0)//every() – Tests whether all elements in the array pass the test implemented by the provided function.//ret boolean
//some() – Tests whether at least one element in the array passes the test implemented by the provided function.//ret boolean
// console.log(arr);
// console.log(array.indexOf(7))


                                        //Map in js
//  In JavaScript, a Map is a collection of key-value pairs where both keys and values can be of any data type. 
//  Unlike regular objects, Map allows any type of key (e.g., objects, functions, or primitive types). 
//  Here's an overview of how you can use a Map in JavaScript:

// Basic Operations on a Map
// Creating a Map:
// let map = new Map();

// Adding elements to the Map (set method):
// map.set('key1', 'value1');    // String key
// map.set(2, 'value2');         // Number key
// map.set(true, 'value3');      // Boolean key
// map.set({ a: 1 }, 'value4');  // Object key


// Accessing elements from the Map (get method):
// console.log(map.get('key1'));  // Output: 'value1'
// console.log(map.get(2));       // Output: 'value2'
// console.log(map.get(true));    // Output: 'value3'


// Checking if a key exists (has method):
// console.log(map.has('key1'));  // Output: true
// console.log(map.has('nonexistent'));  // Output: false


// Removing an element from the Map (delete method):
// map.delete('key1');  // Removes the key 'key1' and its value
// console.log(map.has('key1'));  // Output: false


// Getting the size of the Map:
// console.log(map.size);  // Output: 3 (after deletion, assuming you added 4 initially)


// Iterating over a Map:

// Iterating over keys and values
// for (let [key, value] of map) {
//     console.log(`${key} = ${value}`);
//   }

// Iterating over keys and values
// for (let [key, value] of map) {
//     console.log(`${key} = ${value}`);
//   }

// Clearing the Map (clear method):
// map.clear();  // Removes all key-value pairs
// console.log(map.size);  // Output: 0

  
  

// Differences between Map and a regular object:
// Keys can be of any type in Map, whereas in an object, keys are implicitly converted to strings (except for symbols).
// Map maintains insertion order, whereas object keys do not guarantee order.
// Size is easily retrieved in Map using .size, while for objects, you need to calculate it manually.



                                                        //Set in js
// let set = new Set();
// let set = new Set([1, 2, 3, 4, 4]); // The duplicate 4 will be ignored
// console.log(set); // Output: Set { 1, 2, 3, 4 }
// set.add(5);
// set.add(1); // Duplicate, won't be added again
// set.add('Hello');
// set.add({ name: 'John' });
// console.log(set.has(5));  // Output: true
// console.log(set.has(10)); // Output: false
// set.delete(5);
// console.log(set.has(5));  // Output: false
// console.log(set.size);  // Output: number of unique values in the set
// set.clear();
// console.log(set.size);  // Output: 0
// for (let value of set) {
//     console.log(value);
//   }
//   for (let value of set) {
//     console.log(value);
//   }

  
//   Converting between Sets and Arrays
//   Convert Set to Array
// let arr = [...set];
// console.log(arr);  // Output: [1, 3]


// Convert Array to Set (to remove duplicates):
// let arr = [1, 2, 2, 3, 4, 4];
// let uniqueSet = new Set(arr);
// console.log(uniqueSet);  // Output: Set { 1, 2, 3, 4 }


// Oh, you want a roast? Well, let’s dive in!

// You’re over here asking how to turn arrays into objects and vice versa like you’re about to crack the code to the universe—spoiler alert: JavaScript is doing all the heavy lifting for you! It's like you’re preparing for a coding competition with exactly one contestant, and yet, somehow, still looking for hints.

// And that first question—"What’s wrong with my code?"—had me questioning if you were serious about finding bugs or if you were just messing around. You want the first non-repeating element but forgot to return the actual element? That's like ordering pizza and eating the box. Come on, you're better than this!

// And now, here you are asking about arrays and objects like they’re some exotic creatures, but at this point, JavaScript probably deserves a restraining order. How many times are you gonna make it convert stuff for you before you finally memorize the syntax?

// But hey, credit where it’s due. You’ve been working with React, Redux, PrimeReact, Next.js, and all these other fancy libraries. Yet, somehow, every time you touch arrays, they look at you like, "Really? This guy again?"

// But no worries, you've got this! Maybe by the time you master arrays, JavaScript will have evolved to do it telepathically.






