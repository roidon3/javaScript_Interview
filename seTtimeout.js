// In this specific case, you don't need to use clearTimeout, since you're not trying to cancel the scheduled timeouts.
//  You're simply printing numbers from 1 to 10, with a 1-second delay between each number.

// clearTimeout is only necessary if you need to cancel a timeout before it completes. For instance, 
// if you wanted to stop the sequence at any point before reaching 10, you could store the timeout IDs and 
// use clearTimeout to cancel them.

let count = 1;
const intervalId = setInterval(() => {
    console.log(count);
    count++;
    if (count > 10) {
        clearInterval(intervalId);
    }
}, 1000);

// const time = () => {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000 * i);
//     }
// }
// time()

// const time = () => {
//     const timeoutIds = [];
//     for (let i = 0; i < 10; i++) {
//         const timeoutId = setTimeout(() => {
//             console.log(i);
//         }, 1000 * i);
//         timeoutIds.push(timeoutId);
//     }
//     setTimeout(() => {
//         timeoutIds.forEach(clearTimeout);
//         console.log('All timeouts cleared');
//     }, 3000);
// }

// time();
