class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class singlyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.length) return undefined;
    if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    let lastItem = this.head;
    let secondLastItem = this.head;
    while (lastItem.next) {
      secondLastItem = lastItem;
      lastItem = lastItem.next;
    }
    this.length--;
    secondLastItem.next = null;
    this.tail = secondLastItem;
    return lastItem;
  }
  shift() {
    if (!this.length) return undefined;

    const current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;

    return current;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }
}
