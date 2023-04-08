
let binarySearch = (arr, val) => {
   let len = arr.length;
   let mid = Math.round(len / 2);
   if (arr[mid] == val) {
      return mid
   }
   else {
      let end = mid + 1
      while (end < len) {
         if (arr[end] == val) {
            return end
         }
      }
      let start = mid - 1;
      while (start > 0) {
         if (arr[start] == val) {
            return start
         }
      }
   }
};

let arr = [3, 5, 2, 8, 3];
let v = binarySearch(arr, 8);
console.log(v);