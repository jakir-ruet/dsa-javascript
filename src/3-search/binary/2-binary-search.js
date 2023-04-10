function binarySearchIterative(myArray, tValue) {
   let iniIdx = 0;
   let midIdx = 0;
   let endIdx = myArray.length - 1;
   while (iniIdx <= endIdx) {
      midIdx = Math.floor((endIdx + iniIdx) / 2);
      if (myArray[midIdx] === tValue) {
         return myArray[midIdx];
      }
      else if (tValue > myArray[midIdx]) {
         iniIdx = midIdx + 1;
      }
      else {
         endIdx = midIdx - 1;
      }
   }
   return 'Not Found'
}

let assArray = [80, 2, 85, 4, 69, 5, 67, 9, 45, 12, 14];
let sortArray = assArray.sort(function (a, b) { return (a - b); });
console.log(sortArray);
let desireValue = 67;
let desireValueIdx = sortArray.indexOf(desireValue);
let result = binarySearchIterative(sortArray, 67);
console.log(`Fond the value ${result} that index ${desireValueIdx}`);