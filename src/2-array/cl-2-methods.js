// const arr = [55, 3, 4, 'Mango', 3];
// arr.push(5);
// console.log(arr);
// arr.pop(5);
// console.log(arr);

let fruits = ['Mango', 'Apple', 'Banana', 'Black Berry'];
let othersFruits = ['Pineapple'];

//sorting
fruits.sort();
console.log(fruits);

//find using index
const arrPosition = fruits.indexOf('Banana');
console.log(`Index No = ${arrPosition}`);

//slicing
const newFruits = fruits.slice(1);
console.log(newFruits);

//concating
const arrConcat = fruits.concat(othersFruits);
console.log(`Concating is ${arrConcat} `)
