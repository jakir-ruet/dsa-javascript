class SinglyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   // checking whether empty
   isEmpty() {
      return this.length === 0;
   }
   // inserting new node, where head and tail equal
   push(nValue) {
      let newNode = {
         value: nValue,
         next: null
      }
      if (this.isEmpty()) { // as the head & tail is equal
         this.head === this.tail;
      }
      else {
         this.head = newNode;
         this.tail = null;
      }
      this.length++;
   }

}

let myList = new SinglyLinkedList();
console.log(myList);
console.log(myList.isEmpty());
myList.push(5);
console.log(myList);
myList.push(10);
console.log(myList);
myList.push(15);
console.log(myList);
myList.push(20);
console.log(myList);






// class Node{
//    constructor(value) {
//       this.value = value;
//       this.next = null;
//    }
// }
// class LinkedList{
//    constructor() {
//       this.head = null;
//       this.size = 0;
//    }
//    isEmpty() {
//       return this.size === 0;
//    }
//    getSize() {
//       return this.size;
//    }
// }
// let list = new LinkedList();
// console.log(`This empty? ${list.isEmpty()}`);
// console.log(`Size ${list.getSize()}`)