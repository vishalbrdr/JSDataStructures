# Singly Linked List Implementation in JavaScript

This repository contains a JavaScript implementation of a Singly Linked List.

## Overview

The implementation consists of two classes:

### Node Class

The `Node` class represents a single node in the linked list.

### Singly Linked List Class

The `SinglyLinkedList` class represents the linked list structure and includes the following methods:

#### `push(val)`

Adds a new node with the given value at the end of the list.

Example:

```javascript
// Create a Singly Linked List
const myList = new SinglyLinkedList();

// Push elements to the list
myList.push(10);
myList.push(20);
myList.push(30);

// Output the list
console.log(myList); // Output: SinglyLinkedList { length: 3, head: Node { val: 10, next: Node { val: 20, next: Node { val: 30, next: null } } }, tail: Node { val: 30, next: null } }

// Pop an element from the list
console.log(myList.pop()); // Output: Node { val: 30, next: null }

// Shift an element from the list
console.log(myList.shift()); // Output: Node { val: 10, next: Node { val: 20, next: null } }

// Unshift an element to the list
myList.unshift(5);
console.log(myList); // Output: SinglyLinkedList { length: 2, head: Node { val: 5, next: Node { val: 20, next: null } }, tail: Node { val: 20, next: null } }

// Get an element at a specific index
console.log(myList.get(1)); // Output: Node { val: 20, next: null }
```
