const linearSearch = (myArray, tValue) => {
  for (const i in myArray) {
     if (myArray[i] === tValue) {
        return (myArray.indexOf([i]));
     }
  }
   return -1;
};
const myArray = [1, 4, 3, 9, 5, 6, 10, 8, 9];
const tValue = 110;
const result = linearSearch(myArray, tValue);
console.log(`${tValue} is found`);

// Time complexity
// BigO >> T(n) = 1 + n (1 + 1) + 1 = 1 + 2n + 1 = 2n + 2 => O(n)