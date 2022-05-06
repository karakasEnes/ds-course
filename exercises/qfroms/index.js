// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stacktTwo = new Stack();
  }

  _moveFromAtoB() {
    while (this.stackOne.peek()) {
      const popedItem = this.stackOne.pop();
      this.stacktTwo.push(popedItem);
    }
  }

  _moveFromBtoA() {
    while (this.stacktTwo.peek()) {
      const popedItem = this.stacktTwo.pop();
      this.stackOne.push(popedItem);
    }
  }

  add(n) {
    return this.stackOne.push(n);
  }

  peek() {
    //move from a to b
    this._moveFromAtoB();

    //return top element inside B with peek
    const lastItem = this.stacktTwo.peek();

    //move them back position
    this._moveFromBtoA();

    //return lastitem
    return lastItem;
  }

  remove() {
    //move from a to b
    this._moveFromAtoB();

    //remove last item from B
    const removedItem = this.stacktTwo.pop();

    //move things from b to a
    this._moveFromBtoA();

    return removedItem;
  }
}

module.exports = Queue;
