// // applying iterative
function factorial(n) {
   let result = 1; //operation 1
   for (let i = 2; i <= n; i++) { //operation 1
      result = result * i; //operation 1
   }
   return result; //operation 1
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5));
// Time complexity
// BigO >> T(n) = 1 + n (1 + 1) + 1 = 1 + 2n + 1 = 2n + 2 => O(n)

// applying recursive
function recursiveFactorial(n) {
   if (n === 0) { //operation 1
      return 1; //operation 1
   }
   return n * recursiveFactorial(n - 1); //operation 1
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5));
// Time complexity
// BigO >> T(n) = 1 + n (1) + n(1) = 2n + 1 => O(n)