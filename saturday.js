// const user = {name: "priyank"};
// user.name = "your name";
// console.log(user)
 

//  const fetchData = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("roidon")
//         },2000)
//     })
//  }


//  fetchData().then((value)=>{
//     console.log(value);
//  }).catch((err)=>{
//     console.log("error");
//  })
 
//callback hell
// function fetchData(callback) {
//     // Simulate an asynchronous API call
//     setTimeout(() => {
//         callback("Data from API");
//     }, 1000);
// }

// function processData(data, callback) {
//     // Simulate processing data
//     setTimeout(() => {
//         callback(`Processed: ${data}`);
//     }, 1000);
// }

// function saveData(data, callback) {
//     // Simulate saving data
//     setTimeout(() => {
//         callback(`Saved: ${data}`);
//     }, 1000);
// }

// // Callback hell
// fetchData((data) => {
//     processData(data, (processedData) => {
//         saveData(processedData, (savedData) => {
//             console.log(savedData);
//         });
//     });
// });


// let P1 = Promise.resolve(23);
// let p2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res(33)
        
//     }, 2000);
// })
// let p3=Promise.reject(43)

// Promise.any([P1,p2,p3]).then((res)=>console.log(res,"res")).catch((err)=>console.log(err,"err"))
// async function fetchData(){
//     try{
//         let a = await P1;
//         console.log(a,"1st");
//         let b = await p2;
//         console.log(b,"2st");
//         let c = await p3;
//         console.log(c,"3st");

//     }catch(err){
//         console.log(err,"error in catch");

//     }

// } 
// fetchData()


const timeoutId = setTimeout(() => {
    console.log('This will not run');
}, 5000);

clearTimeout(timeoutId); // Cancels the timeout