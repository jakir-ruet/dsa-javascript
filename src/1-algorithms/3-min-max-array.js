const myArray = [4, 5, 1, 7, 2, 6, 3, 8];

let minimum = Infinity; // Operation 1
let maximum = -Infinity;  // Operation 1

for (let num of myArray) {
   if (num < minimum) // Operation 1
      minimum = num; // Operation 1
   
   if (num > maximum) // Operation 1
      maximum = num;  // Operation 1
}
console.log(`Min value ${minimum}`);
console.log(`Max value ${maximum}`);

function minValue() {
   let minimum = Infinity; // Operation 1
   for (let num of myArray) {
      if (num < minimum) { // Operation 1
         minimum = num; // Operation 1
      }
   }
   return minimum; // Operation 1
}
// Time Complexity
// BigO >> T(n) = 1 + n (1 + 1) + 1 = 1 + 2n + 1 = 2n + 2 => O(n)
console.log(`Min value using fn ${minimum}`)