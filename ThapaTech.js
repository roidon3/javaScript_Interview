//1.longest length in string

// const longestStr = (str)=>{
 
//     if(str.trim() ===0){
//         return false;
//     }
//   let  words = str.trim().split(" ").sort((a,b)=> a.length-b.length).reverse();
//     console.log(words);
//     return words[0]

// }
// console.log(longestStr("im roidon from managlore"));

//2.convert first letter of string with capital and add #

// function hastag(str){
//     if(str.trim().length === 0){return false}
//     let words = str.trim().split(" ")
//     return "#" + words.map((ele)=>ele.replace(ele[0],ele[0].toUpperCase())).join("")
// }
// console.log(hastag("roidon the great"))

//3 return the selected char count

// function selectedChar(name,search){
//     if(!name.includes(search)){
//         return false;
//     }
//     let storeVal ={}
//     for (let i of name){
//         storeVal[i] = (storeVal[i] || 0) +1;
//     }
//     return { [search]: storeVal[search] };

// }
// console.log(selectedChar("roidon","r"));

//3 return the selected char count appp 2

// function selectedChar(name, search) {
//     if (!name.includes(search)) {
//         return false;
//     }
//     let count = 0;
//     for (let i of name) {
//         if (i === search) {
//             count++;
//         }
//     }
//     return { [search]: count };
// }

// console.log(selectedChar("roidon", "o"));


//learn reduce

// let arr =[1,2,34]
// let red = arr.reduce((acc,curr)=>acc+curr ,0)
// console.log(red);


// function nnn(){
//     let word ="missippi"
//     let search ="p"
//     return word.split("").reduce((acc,curr)=>{
//         if(curr === search){
//             acc++
//         }
//         return acc
//     },0)
// }
// console.log(nnn());

//4.identify the traingale

//5.array sort
// let arr=[10,3,4,1,2]
// console.log(arr.sort((a,b)=>a-b));

//6.palindrome
//7.to find max ele in array

// function findMax(arr){
//     return Math.max(arr)

// }
// console.log(findMax([1,4,5,99]));

// function flatenObject(obj,parent){
//         const finalObj={}
//         const generateFlatObject = (obj,parent)=>{
//             for(let key in obj){
//                 const newprent = parent + key ;
//                 const value=obj[key];
//                 if(typeof value === "object"){
//                     generateFlatObject(value,newprent+".")
        
//                 }
                
//             }
    
//         }
//         generateFlatObject(obj,parent)
//         return finalObj
//     }
    // let obj =  {
    //     A: "12",
    //     B: 23,
    //     C: {
    //       P: 23,
    //       O: {
    //          L: 56
    //       },
    //       Q: [1, 2]
    //      }   
    //   }
//     console.log(flatenObject(obj," "))