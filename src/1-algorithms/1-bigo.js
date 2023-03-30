function addition(n) {
   let add = 0;
   for (let i = 1; i <= n; i++){
      add += i;
   }
   return add;
}
let result = addition(5);
console.log(`The summation = ${result}`);