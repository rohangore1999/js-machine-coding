// https://leetcode.com/problems/design-linked-list/description/

let Node = function (val) {
  this.val = val;
  this.next = null;
};

/**
 * Initialize your data structure here.
 */
let MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */

MyLinkedList.prototype.get = function (index) {
  if (this.size === 0 || index > this.size - 1 || index < 0) return -1;
  let cur = this.head;

  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
  return this;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new Node(val);
  if (index > this.size) return;
  if (index <= 0) {
    return this.addAtHead(val);
  }
  if (index === this.size) {
    return this.addAtTail(val);
  }

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }

  let temp = cur.next;
  cur.next = newNode;
  newNode.next = temp;

  this.size++;
  return this;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return this;
  }

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }

  let temp = cur.next;
  cur.next = cur.next.next || null;
  temp.next = null;

  if (!cur.next) {
    this.tail = cur;
  }

  this.size--;
  return this;
};

var obj = new MyLinkedList();
obj.addAtHead(3);
obj.addAtHead(2);
obj.addAtHead(1);

console.log(obj.get(0));
console.log(obj.get(1));
console.log(obj.get(2));

console.log("deleting at pos 2");
obj.deleteAtIndex(2);

console.log("getting 2th position.. it will give -1 as we have deleted last");
console.log(obj.get(2));

console.log(obj.head);

obj.addAtIndex(1, 100);

console.log(obj.head);
