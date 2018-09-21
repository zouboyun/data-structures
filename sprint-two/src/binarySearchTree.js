var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.methods);
  bst.value = value;
  bst.left = null; // fix it later
  bst.right = null; // fix it later
  return bst;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
  // search for the spot to insert
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.methods.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (target < this.value) {
    if (this.left !== null) {
      return this.left.contains(target);
    } else {
      return false;
    }
  } else if (target > this.value) {
    if (this.right !== null) {
      return this.right.contains(target);
    } else {
      return false;
    }
  }
};

BinarySearchTree.methods.depthFirstLog = function(func) {
  // debugger;
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
