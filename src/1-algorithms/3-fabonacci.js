function fabonacci(n) {
   let fib = [0, 1];
   for (let i = 2; i < n; i++){
      fib[i] = fib[i - 1] + fib[i - 2];
   }
   return fib;
}
console.log(fabonacci(2)); //[0, 1]
console.log(fabonacci(3)); //[0, 1, 1]
console.log(fabonacci(7)); //[0, 1, 1, 2, 3, 5, 8]