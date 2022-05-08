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
}

module.exports = { Node, LinkedList };
