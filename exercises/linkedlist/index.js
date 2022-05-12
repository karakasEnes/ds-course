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
    return this.getAt(0);
  }

  getLast() {
    // let curNode = this.head;

    // while (curNode.next !== null) {
    //   curNode = curNode.next;
    // }

    // return curNode ? curNode : null;

    return this.getAt(this.size() - 1);
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

  insertLast(data) {
    const insertNode = new Node(data, null);
    if (!this.head) {
      this.head = insertNode;
      return;
    }

    const lastNode = this.getLast();
    lastNode.next = insertNode;
  }

  getAt(wantedIndex) {
    let node = this.head;
    for (let count = 0; count < wantedIndex; count++) {
      if (!node) {
        return null;
      }
      node = node.next;
    }
    return node;
  }

  removeAt(removeIndex) {
    if (!this.head) {
      return null;
    }

    if (removeIndex === 0) {
      this.head = this.head.next;
      return;
    }

    const prvNode = this.getAt(removeIndex - 1);
    if (!prvNode || !prvNode.next) return;
    prvNode.next = prvNode.next.next;
  }

  insertAt(data, insertIndex) {
    // if list is empty
    if (!this.head) {
      this.head = new Node(data, null);
      return;
    }

    // if insertIndex is 0
    if (insertIndex === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let prvNode = this.getAt(insertIndex - 1);

    //out bound! and insert last
    if (!prvNode || !prvNode.next) {
      let lastNode = this.getLast();
      lastNode.next = new Node(data, null);
      return;
    }

    //insert middle
    if (prvNode.next.next) {
      prvNode.next = new Node(data, prvNode.next);
      return;
    }
  }

  forEach(fn) {
    if (!this.head) return;

    let curNode = this.head;
    let curIndex = 0;
    while (curNode) {
      fn(curNode, curIndex);
      curIndex++;
      curNode = curNode.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = this.head.next;
    }
  }
}

module.exports = { Node, LinkedList };
