const arr = [2, 1, 4, 5, 'Jakir'];
console.log(arr);

//or
const arrOne = new Array(4, 5, 3, 2, 'Jakir');
console.log(arrOne);

// function and other object in an array
const funcObject = [
   { 'name': 'Jakir' },
   [4, 5, 7, 3],
   function inArray() {
      console.log('Taking from innner array of function')
   }
];
// console.log(funcObject);
console.log(funcObject[0].name)
console.log(funcObject[1])
console.log(funcObject[2])