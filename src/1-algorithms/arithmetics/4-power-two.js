function isPwrOfTwo(n) {
   if (n <= 1) {
      let resultA = console.log(`${n} is not divided by 2, due to no reminder is 0`)
      return resultA;
   }
   if (n % 2 === 0) {
      let resultB = console.log(`${n} is divided by 2, due to remainder 0`);
      return resultB;
   }
   else {
      let resultC = console.log(`${n} is not divided by 2, due to no reminder is 0`);
   }
}
isPwrOfTwo(0);
isPwrOfTwo(1);
isPwrOfTwo(2);
isPwrOfTwo(3);
isPwrOfTwo(4);
isPwrOfTwo(5);
isPwrOfTwo(6);
// Time complexity (Input size Reduced by half    > O(logn))
// BigO >> T(n) = O(logn)