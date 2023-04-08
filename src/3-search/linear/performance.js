//Storing Length in a variable
function linearSearch_1(myArray, item) {
   let len = myArray.length;
   for (let i = 0; i < len; i++){
      if (myArray[i] === item) {
         return true;
      }
   }
   return false;
}

//Clalculating length again and again
function linearSearch_0(myArray, item) {
   for (let i = 0; i < myArray.length; i++){
      if (myArray[i] === item) {
         return true;
      }
   }
   return false;
}
let myArray = [3, 2, 10, 4, 6];
const item = 6;
//linear_search_2
let start = performance.now() 
console.log(linearSearch_0(myArray, item));
let end = performance.now()
console.log(`Performance: ${end-start}ms`)

//linear_search_1
let start_1 = performance.now() 
console.log(linearSearch_1(myArray, item));
let end_1 = performance.now()
console.log(`Performance: ${end_1-start_1}ms`)