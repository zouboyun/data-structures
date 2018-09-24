var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.methods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
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
  if (this.maxDepth()  > this.minDepth() * 2) {
    this.rebalance();
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
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

BinarySearchTree.methods.breadthFirstLog = function(func, arr) {
  var childrenArr = [];
  if (arr === undefined) {
    var arr = [this];
  }
  arr.forEach(function(leaf) {
    func(leaf.value);
    if (leaf.left !== null) {
      childrenArr.push(leaf.left);
    }
    if (leaf.right !== null) {
      childrenArr.push(leaf.right);
    }
  });
  if (childrenArr.length > 0) {
    this.breadthFirstLog(func, childrenArr);
  }
};

BinarySearchTree.methods.minDepth = function() {
  if (this === null) {
    return 0;
  } else if (this.left === null && this.right === null) {
    return 1;
  } else if (this.left === null) {
    return this.right.minDepth() + 1;
  } else if (this.right === null) {
    return this.left.minDepth() + 1;
  }
  return Math.min(this.left.minDepth() + 1, this.right.minDepth() + 1);
};

BinarySearchTree.methods.maxDepth = function() {
  if (this === null) {
    return 0;
  } else if (this.left === null && this.right === null) {
    return 1;
  } else if (this.left === null) {
    return this.right.maxDepth() + 1;
  } else if (this.right === null) {
    return this.left.maxDepth() + 1;
  }
  return Math.max(this.left.maxDepth() + 1, this.right.maxDepth() + 1);
};

BinarySearchTree.methods.rebalance = function() {
  // push all the nodes into an arr
  var allNodeValues = [];
  this.breadthFirstLog(function(value) {
    allNodeValues.push(value);
  });
  
  // select a new root and re-insert everything based on the new root
  var newRoot = allNodeValues[Math.floor(allNodeValues.length / 2)];
  this.value = newRoot;
  this.left = null;
  this.right = null;
  var self = this;
  allNodeValues.forEach(nodeValue => {
    if (nodeValue !== newRoot) {
      self.insert(nodeValue);
    }
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
  .insert() is O(logN)
  .contains() is O(logN)
  .depthFirstLog() is O(N)
 */
