//Boyer-Moore Voting Algorithm
function majorityEle(nums) {
    let canditate = null
    let count = 0;
    for (let num of nums) {
        if (count === 0) {
            canditate = num;
        }
        count += (num === canditate) ? 1 : -1

    }
    return canditate

}
// console.log(majorityEle([1, 2, 3, 2, 2]));


//add propty to obj
let obj=[{name:"roidon",age:25},{name:"maxwell" ,age:33}]
let newobj =[...obj,{name:"smith",age:36}]
// console.log(newobj,"newObj");

//add new obj
// let modifiedObj = newobj.map((ele) => ({ ...ele, skill: "cricket" }));
let modifiedObj = newobj.map((ele) => ({ ...ele, skill:ele?.age <26 ? "cricket" :"football"}));
// console.log(modifiedObj);

//group a obj
let people = [
    { name: "Alice", age: 25, city: "Sydney" },
    { name: "Bob", age: 30, city: "Melbourne" },
    { name: "Charlie", age: 22, city: "Sydney" },
    { name: "David", age: 28, city: "Melbourne" },
    { name: "Eve", age: 35, city: "Sydney" }
];

let groupedByCity = people.reduce((acc, person) => {
    // If the city key doesn't exist, initialize it as an empty array
    let obj = person.city
    if (!acc[obj]) {
        acc[obj] = [];
    }
    // Push the current person into the corresponding city array
    acc[obj].push(person);
    return acc;
}, {});

// console.log(groupedByCity);

const arr=[1,2,3,4,5]
//remove 4
console.log(arr.filter(ele=>ele !==4))

const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(3);
if (index !== -1) {
  numbers.splice(index, 1); // Removes the element at index
}
console.log(numbers); // [1, 2, 4, 5]
//Find the Most Frequent Element in an Array
// Find the First Duplicate in an Array

// What is the difference between Object.freeze() and Object.seal()?
// Object.freeze(obj): Prevents adding, modifying, and deleting properties.
// Object.seal(obj): Prevents adding or deleting properties but allows modifying existing ones.