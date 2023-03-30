function constTC() {
   a = 5; //operation 1
   b = 10; //operation 2
   return(a + b) //operation 3
}
let constResult = constTC();
console.log(`The const result = ${constResult}`)

function linearTC(n) {
   let add = 0; // operation 1
   for (let i = 1; i <= n; i++){
      add += i; //operation 5, due to value of n = 5
   }
   return add; //operation 1
}
let linearResult = linearTC(5);
console.log(`The linear result = ${linearResult}`);

//explanation Big(O)
//input size is 5
// operation size is 7
//it is linear time complexity O(n)

function quadraticTC(n) {
   let add = 0; // operation 1
   for (let i = 1; i <= n; i++) {
      for (j = 1; j <= i; j++){
         add += j;
      }
   }
   return add; //operation 1
}
let quadraticResult = linearTC(5);
console.log(`The quadratic result = ${quadraticResult}`);

function cubicTC(n) {
   let add = 0; // operation 1
   for (let i = 1; i <= n; i++) {
      for (j = 1; j <= i; j++){
         for (k = 0; k <= j; k++) {
            add += k;
         }
      }
   }
   return add; //operation 1
}
let cubicResult = linearTC(5);
console.log(`The quadratic result = ${cubicResult}`);