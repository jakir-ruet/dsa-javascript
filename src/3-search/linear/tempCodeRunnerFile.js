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