function isPrime(n) {
   if (n <= 1) {  //operation 1
      let resultA = console.log(`${n} is neither prime nor composite number`)
      return resultA;  //operation 1
   }
   for (let i = 2; i < n; i++){  //operation 1
      if (n % i === 0) {  //operation 1
         let resultB = console.log(`${n} is not prime number`)
         return resultB;  //operation 1
      }
   }
   let resultC = console.log(`${n} it prime number`)
   return resultC;  //operation 1
}
isPrime(0);
isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(10);
// Time complexity
// BigO >> T(n) = 1 + 1 + n (1 + 1) + 1 = 2 + 2n + 1 = 2n + 3 => O(n)

// // using the ternary operator
// isPrime(10) ? console.log(true) : console.log(false);
