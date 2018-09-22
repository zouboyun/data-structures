var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.methods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  bst.level = 1;
  return bst;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
      this.left.level = this.level++;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      this.right.level = this.level++;
      if (this.right.level > this.maxDepth) {
        this.maxDepth = this.right.level;
      }
    } else {
      this.right.insert(value);
    }
  }
  
  var max = this.maxDepth();
};

BinarySearchTree.methods.maxDepth = function() {
  var levelNodes = [1,2,4,7,13,19];
  var levelEmpty = [0,0,0,0,1,3];
  this.breadthFirstLog(function() {
    levelNodes[this.level] ++;
  });
  return levelNodes.length;
}

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
  if(childrenArr.length > 0) {
    this.breadthFirstLog(func, childrenArr);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  .insert() is O(logN)
  .contains() is O(logN)
  .depthFirstLog() is O(N)
 */
