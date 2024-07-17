// Defination of BST Node
class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
}

BST.prototype.insert = function (key) {
  // create BSTNode from the key
  let newNode = new BSTNode(key);

  if (!this.root) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};

// function to call recursively
BST.prototype.insertNode = function (node, newNode) {
  // node as root, newNode as newNode

  if (newNode.key < node.key) {
    // go left
    if (!node.left) {
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    if (!node.right) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
};

BST.prototype.printNode = function () {
  if (!this.root) return;

  console.log("\n Pre order traversal [Left - Root - Right]: \n");
  this.preOrderTraverse(this.root);

  console.log("\n In order traversal [Left - Root - Right]: \n");
  this.inOrderTraverse(this.root);

  console.log("\n Post order traversal [Left - Root - Right]: \n");
  this.postOrderTraverse(this.root);
};

BST.prototype.preOrderTraverse = function (node) {
  if (node) {
    console.log(node.key);
    this.preOrderTraverse(node.left);
    this.preOrderTraverse(node.right);
  }
};

BST.prototype.inOrderTraverse = function (node) {
  if (node) {
    this.inOrderTraverse(node.left);
    console.log(node.key);
    this.inOrderTraverse(node.right);
  }
};

BST.prototype.postOrderTraverse = function (node) {
  if (node) {
    this.postOrderTraverse(node.left);
    this.postOrderTraverse(node.right);
    console.log(node.key);
  }
};

BST.prototype.delete = function (key) {
  this.root = this.deleteNode(this.root, key); // this will return the updated root at once after all the deletion operation performed
  /**
   * eg: if we delete 4, then this.root will get 15 only by in that 15 the 4 will not be present as this.deleteNode will handle the deletion and return the
   * maintained structure.
   */
};

BST.prototype.deleteNode = function (node, key) {
  if (key < node.key) {
    // move to left subtree
    node.left = this.deleteNode(node.left, key);
  } else if (key > node.key) {
    // move to right subtree
    node.right = this.deleteNode(node.right, key);
  } else {
    // if key found :-
    // a: if leaf node(no child), directly delete by returing null
    if (!node.left && !node.right) {
      return null;
    } else if (!node.left) {
      // b: if one child, no left; replace key with right node
      return node.right;
    } else if (!node.right) {
      // b: if one child, no right; replace key with left node
      return node.left;
    } else {
      // both child are present
      // inorder - successor: replace minimum from right subtree // OR we can replace maximum from left subtree (inorder predeccessor)
      let tempNode = this.findMinNode(node.right); // OR let tempNode = this.findMaxNode(node.left);

      // replace the key to be deleted with mini node from right
      node.key = tempNode.key;

      // delete the duplicate node which we replaced from right subtree
      node.right = this.deleteNode(node.right, tempNode.key);
    }
  }

  return node;
};

BST.prototype.findMinNode = function (node) {
  while (node.left) {
    // run till left node exist
    node = node.left;
  }

  // return the left node
  return node;
};

BST.prototype.findMaxNode = function (node) {
  while (node.right) {
    node = node.right;
  }

  return node;
};

BST.prototype.DFS = function () {
  let value = [];
  let stack = [this.root];

  while (stack.length) {
    let node = stack.pop();

    value.push(node.key);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return value;
};

BST.prototype.BFS = function () {
  let values = [];
  let queue = [this.root];

  while (queue.length) {
    // process the node
    let node = queue.shift();

    values.push(node.key);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return values;
};

let bst = new BST();
bst.insert(15);
bst.insert(9);
bst.insert(4);
bst.insert(12);
bst.insert(19);
bst.insert(18);
bst.insert(30);

/**
 *              15
 *          9        19
 *        4  12    18  30
 */

console.log("Printing Nodes");
bst.printNode();

console.log("Deleting node 4");
bst.delete(4);

console.log("After Deleting node 4");
bst.printNode();

console.log("\n DFS \n");
console.log(bst.DFS());

console.log("\n BFS \n");
console.log(bst.BFS());
