let myArray = [4, 5, 7, 3, 8, 9];
// let maxVal = Math.max.apply(null, myArray);
// console.log(`max value of array ${maxVal}`);
// let minVal = Math.min.apply(null, myArray);
// console.log(`min value of array ${minVal}`);
// or
// let maxVal = Math.max(...myArray);
// let minVal = Math.min(...myArray);
// console.log(`max, min value ${maxVal}, ${minVal}`);

// or
let maxVal = myArray.reduce((preVal, curVal) => {
   return Math.max(preVal, curVal)
});
console.log(maxVal);
let minVal = myArray.reduce((preVal, curVal) => {
   return Math.min(preVal, curVal)
});

console.log(minVal);