// Binary Search Algorithm can be implemented in two ways which are discussed below.
// 1. Iterative Method
// 2. Recursive Method > The recursive method follows the divide and conquer approach.
// It always working on sorted data.
// Desired value < middle value, then it will check the smaller parts and vice versa.

// let binarySearchIterative = (arr, val) => {
//    let len = arr.length;
//    let mid = Math.round(len / 2);
//    if (arr[mid] == val) {
//       return mid
//    }
//    else {
//       let end = mid + 1
//       while (end < len) {
//          if (arr[end] == val) {
//             return end
//          }
//       }
//       let start = mid - 1;
//       while (start > 0) {
//          if (arr[start] == val) {
//             return start
//          }
//       }
//    }
// };

// let arr = [3, 5, 2, 8, 3];
// let val = binarySearchIterative(arr, 3);
// // let idx = arr.indexOf(val);
// console.log(`${val} is value found & index is `);


const binarySearchIterative = (myArray, tValue) => {
   let iniIdx = 0;
   let endIdx = myArray.length - 1;
   while (iniIdx <= endIdx) {
      let midIdx = Math.floor((iniIdx + endIdx) / 2);
      if (tValue === myArray[midIdx]) {
         return (
            console.log(`${midIdx} is desire value found`)
         )
      }
      if (tValue > myArray[midIdx]) {
         console.log('searching right side - (desire value greater then min value)');
         iniIdx = midIdx + 1;
      }
      if (tValue < myArray[midIdx]) {
         console.log('searching left side - (desire value lesser then min value)');
         endIdx = midIdx - 1;
      }
      else {
         console.log('Not found in this iteration');
      }
   }
   console.log('idx no of the founded value');
};
let assArray = [4, 6, 7, 3, 8, 9, 1];
let val = 3;
let result = binarySearchIterative(assArray, val);
console.log(result);