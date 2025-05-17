//longest consicutive ones

function longestOnes(){
    let arr=[1,2,1,1,2,2,1,1,1,1,1,13]
    let count =0;
    let maxCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            count++
            maxCount = Math.max(maxCount,count)
        }else{
            count=0
        }
    }
    return maxCount

}
// console.log(longestOnes());

//  Check if an array is sorted in ascending order
function ascend(){
    let arr=[1,2,3,4,5]
    for(let i=1;i<arr.length;i++){//i=1 because we are using i-1 else it'll go to -1 out of bound
        if(arr[i]<arr[i-1]){return false}
    }
return true
}
// console.log(ascend())

//rotatae an array
function rotate(){
    let arr=[1,2,3,4,5]
   let k=3;
     k=k%arr.length;
    return [...arr.slice(-k),...arr.slice(0,-k)]
}
// console.log(rotate());

//lonest consuctive sequense
function longestSequence(){
    const arr=[1,2,3,50,10]
    let set = new Set(arr)
    let longest=0;
    for(let num=0;num<arr.length;num++){
        if(!set.has(num-1)){
            let currNum= num
            let currentSeq= 1;
            while(set.has(currNum+1)){
                currNum++
                currentSeq++
            }
            longest=Math.max(currNum,currentSeq)
        }
     

    }
 
    return longest

}
// console.log(longestSequence());

//1. Find the First Missing Positive Integer
//3. Find All Triplets That Sum to Zero
// Find all pairs in an array that sum up to a given target
// . Find the Missing Number in an Array
// 4. Longest Subarray with Sum K
// Problem: Given an array and a target sum K, find the longest subarray with sum exactly K.

// 6. Product of Array Except Self
// Problem: Given an array, return an array where each index has the product of all numbers except itself.
// Example:

// js
// Copy
// Edit
// Input: [1, 2, 3, 4]  
// Output: [24, 12, 8, 6] 
// . Maximum Subarray (Kadane’s Algorithm)
// Sort Colors (Dutch National Flag Algorithm)
// Find Majority Element (More than N/2 times) boore moyers voting algo

// Three Sum (Find Triplets with Sum = 0)

// Input: [-1,0,1,2,-1,-4]  
// Output: [[-1,-1,2],[-1,0,1]]  


// Subarray with a Given Sum (Sliding Window)

// Input: [1, 4, 20, 3, 10, 5], Sum = 33
// Output: [2,4] (Indexes)

// Find the Longest Subarray with Sum Zero

// Input: [1, 2, -2, 4, -4]
// Output: 4 (subarray: [2, -2, 4, -4])


// let arr = [1, 4, 20, 3, 10, 5];
// let sum = 33;
// Expected Output: [20, 3, 10]


function findSubarrays(arr, target) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === target) {
                result.push(arr.slice(i, j + 1));
            }
        }
    }
    return result;
}

// console.log(findSubarrays([1, 2, 3, 4, 5], 5));  
// Output: [ [2, 3], [5] ]



function isSubset(arr1, arr2) {
    return arr2.every(num => arr1.includes(num));
}

// console.log(isSubset([1, 2, 3, 4, 5], [2, 3])); // Output: true
// console.log(isSubset([1, 2, 3, 4, 5], [6]));   // Output: false


function swapAdjacent(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length - 1; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap adjacent characters
    }
    return arr.join("");
}

// console.log(swapAdjacent("abcdef")); // "badcfe"
// console.log(swapAdjacent("abcde"));  // "badce"


// Check If Two Strings are Isomorphic

function groupAnagrams(words) {
    let map = {};

    for (let word of words) {
        let sorted = word.split("").sort().join("");
        if (!map[sorted]) map[sorted] = [];
        map[sorted].push(word);
    }

    return Object.values(map);
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


let people = [
    { name: "Alice", age: 25, city: "Sydney" },
    { name: "Bob", age: 30, city: "Melbourne" },
    { name: "Charlie", age: 22, city: "Sydney" },
    { name: "David", age: 28, city: "Melbourne" },
    { name: "Eve", age: 35, city: "Sydney" }
];

let group = people.reduce((acc, person) => {
    // If the city key doesn't exist, initialize it as an empty array
    let obj = person.city
    if (!acc[obj]) {
        acc[obj] = [];
    }
    // Push the current person into the corresponding city array
    acc[obj].push(person);
    return acc;
}, {});
// console.log(group,"group");

function fff(){
 let str="roidon";
 return str[str.length-1] +str.slice(1,-1) +str[0]

}
// console.log(fff());

// Remove Duplicates from a String
// Find the Most Frequent Character in a String
// . Swap Adjacent Characters
// 2. Count Vowels and Consonants
// 3. Find the First Non-Repeating Character
// 3. Find the First Non-Repeating Character  console.log(reverseWords("JavaScript is awesome")); // "awesome is JavaScript"
//convert fiest letter capital
// 7. Find the Longest Word in a Sentence
// 8. Remove a Specific Character from a String
// console.log(runLengthEncode("aaabbcddd")); // "a3b2c1d3"
// 1. Check if a String is a Rotation of Another
function isRotation(s1, s2) {
    return s1.length === s2.length && (s1 + s1).includes(s2);
}

// console.log(isRotation("abcd", "dabc")); // true
// console.log(isRotation("abcd", "bcda")); // true
// console.log(isRotation("abcd", "dbca")); // false

// 2. Find the Longest Common Prefix
// Check If Two Strings are Isomorphic

// console.log(areIsomorphic("egg", "add")); // true
// console.log(areIsomorphic("foo", "bar")); // false
// console.log(areIsomorphic("paper", "title")); // true


// 4. Reverse Every Word in a Sentence
function reverseEachWord(sentence) {
    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

// console.log(reverseEachWord("Hello World")); // "olleH dlroW"
// console.log(reverseEachWord("JavaScript is fun")); // "tpircSavaJ si nuf"


// 7. Group Anagrams


// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


// Can Array Be Sorted by Swapping At Most One Pair?
//Find the Longest Consecutive Sequence
//find missing no in sequence //[1,2,3,5]//4

const revStr =()=>{
    let str="ro$#i$do%^n";
    let stack =[];
    for(i of str){
        if(/[a-zA-Z]/.test(i)){
            stack.push(i)
        }
    }
    let result = ""

    for(i of str){
        if(/[a-zA-Z]/.test(i)){
            result+=stack.pop()

        
        }else{
            result+=i

        }
    }
    return  result

}
// console.log(revStr());

// function bbb(){
//     let str = "im roidon from managlore"
//     return str.split(" ").map((ele)=>ele[0].toLocaleUpperCase() + ele.slice(1)).join(" ")
// }
// console.log(bbb());


// function closure(){
//     let count =0
//     return function(){
//         return count++
//     }
// }
// let closFun = closure()
// console.log(closFun())
// console.log(closFun())
// console.log(closFun())


// console.log(foo);       // Line 1  undefined
// console.log(bar());     // Line 2 //20
// console.log(baz);       // Line 3 //ref error
// foo = 10;
// console.log(foo);       // Line 4 10
// function bar() {
//   return 20;
// }
// var foo = 30;
// let baz = 40;


// //HOC 
// withAuth.js
// export default withAuth(alert)

//shallow copy
// let obj1 = {name:"roidon",country:{state:"karnataka",city:"managlore"}}
// let obj2= JSON.parse(JSON.stringify(obj1))
// obj1.country.state="kerala"
// console.log(obj1,"obj1")
// console.log(obj2,"obj2")

// console.log(1 + "1"); // ? "11"
// console.log(1 - "1"); // ? 0
// console.log("2" * "2"); // ? 4
// console.log("10" - 5); // ? 5
// console.log(10/"2") //NAN "10"/2

// console.log(0 == false); // ? true
// console.log(0 === false); // ? false
// console.log("" == false); // ? true
// console.log("" === false); // ? false

// console.log("Start");

// setTimeout(() => {
//     console.log("Middle");
// }, 0);

// console.log("End");



// for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }
//2 2  

// input => const employees = [
//     { name: 'Alice', role: 'Software Engineer' },
//     { name: 'Bob', role: 'Designer' },
//     { name: 'Charlie', role: 'Software Engineer' },
//     { name: 'David', role: 'Product Manager' },
//   ];

// output => {
//  Designer: 1
//  Product Manager: 1
//  Software Engineer: 2
// }

const employees = [
    { name: 'Alice', role: 'Software Engineer' },
    { name: 'Bob', role: 'Designer' },
    { name: 'Charlie', role: 'Software Engineer' },
    { name: 'David', role: 'Product Manager' },
  ];

  let employeeCount = employees?.reduce((acc,item)=>{
   if(!acc[item.role]){
    acc[item.role]=[]
   }
   acc[item.role].push(item)


    //  acc[item.role] = acc[item.role] ? acc[item.role] + 1 : 1;
    // acc[item.role] = (acc[item.role] ||0)+ 1;
   
     return acc
    
  },{})
  console.log(employeeCount,"employeeCount");



//   1️⃣ Create a Blinking Text Component
// 👉 Implement a React component that blinks (toggles visibility every second).
// 📌 Hint: Use useState, useEffect, and setInterval().

// 2️⃣ Auto-Increment Counter with Start/Stop
// 👉 Build a counter that starts from 0 and increments every second when "Start" is clicked. It should pause when "Stop" is clicked.

// 📌 Bonus: Reset the counter when clicking "Reset".

// 3️⃣ Display Words One by One from an Array
// 👉 Given ["React", "is", "awesome!"], show words one by one every second, looping infinitely.

// 📌 Hint: Use useState with an index and % array.length for looping.

// 4️⃣ Countdown Timer
// 👉 Accept a number (e.g., 10), then count down to 0.
// 📌 Stop when it reaches 0. Add "Pause" and "Resume" buttons.

// 5️⃣ Show and Hide Element Every 3 Seconds
// 👉 A box should appear and disappear every 3 seconds.

// 📌 Hint: Use setInterval() and useState to toggle visibility.

// 6️⃣ Click to Start a Progress Bar
// 👉 A progress bar (0% → 100%) should fill gradually over 5 seconds after clicking "Start".

// 📌 Hint: Use useState for progress and setInterval() to increment it.

// 7️⃣ Button Click Cycle (Red → Green → Blue)
// 👉 Clicking a button changes its background color in a cycle (red → green → blue → red...).

// 📌 Hint: Use an array of colors and cycle through them using useState.

// 8️⃣ Typing Effect Animation
// 👉 Given "Hello, world!", show one letter at a time, like a typing effect.

// 📌 Hint: Use useState, useEffect, and setTimeout().

