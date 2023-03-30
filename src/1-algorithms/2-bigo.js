//It is more convenient due to less time complexity
//it not depend the number of input
function linearTC(n) {
   let add = 0; // operation 1
   add = n * (n + 1) / 2;
   return add; //operation 1
}
let linearResult = linearTC(5);
console.log(`The linear result = ${linearResult}`);

//explanation Big(O)
//input size is 4
// operation size is 6
//it is linear time complexity O(n)