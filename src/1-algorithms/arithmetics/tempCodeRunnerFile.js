// applying iterative
// function fibonacci(n) {
//    let fib = [0, 1]; //operation 1
//    for (let i = 2; i < n; i++){ //operation 1
//       fib[i] = fib[i - 1] + fib[i - 2]; //operation 1
//    }
//    return fib; //operation 1
// }
// console.log(fibonacci(2)); //[0, 1]
// console.log(fibonacci(3)); //[0, 1, 1]
// console.log(fibonacci(7)); //[0, 1, 1, 2, 3, 5, 8]
// // Time complexity
// // BigO >> T(n) = 1 + n (1 + 1) + 1 = 1 + 2n + 1 = 2n + 2 => O(n)