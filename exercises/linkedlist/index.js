// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let current = this.head;
    while (current) {
      counter++;
      current = current.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let curNode = this.head;

    while (curNode.next !== null) {
      curNode = curNode.next;
    }

    return curNode ? curNode : null;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;

    //long solution
    // const secondNode = this.head.next;

    // if (!secondNode) {
    //   this.head = null;
    // } else {
    //   this.head = secondNode;
    // }

    //better solution
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;

    //if only 1 node in list
    if (!this.head.next) {
      this.head = null;
      return;
    }

    // if only 2 node in list?

    // other cases!

    let prevNode = this.head;
    let curNode = this.head.next;

    while (curNode.next) {
      prevNode = curNode;
      curNode = curNode.next;
    }

    prevNode.next = null;
  }
}

module.exports = { Node, LinkedList };
