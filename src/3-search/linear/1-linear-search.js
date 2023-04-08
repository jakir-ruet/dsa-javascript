function linearSearch(myArray, item) {
   for (let i = 0; i < myArray.length; i++){
      if (myArray[i] === item) {
         return true;
      }
   }
   return false;
}
let myArray = [3, 2, 10, 4, 6];
const item = 12;
console.log(linearSearch(myArray, item));

// Time complexity
// BigO >> T(n) = 1 + n (1 + 1) + 1 = 1 + 2n + 1 = 2n + 2 => O(n)

// const linearSearch = (myList, item) => {
//   for (const [i, element] of myList.entries()) {
//     if (element === item) {
//       return i
//     }
//   }
// };
// let myList = [2, 5, 2, 6, 8, 9, 4];
// const item = 6;
// console.log(`idx no is ${linearSearch(myList, item)}`);



