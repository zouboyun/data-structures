var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (typeof target !== 'object') {
    if (this.value === target) {
      return true;
    }
  }
  if (Array.isArray(target) || target instanceof Object) {
    if (compareObjects(target, this.value)) {
      return true;
    }
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    var self = this;
    this.parent.children.forEach(function(child, index) {
      if (child.value === self.value) {
        return self.parent.children.splice(index, 1);
      }
    })
  }
};

treeMethods.traverse = function(func) {
  func(this.value);
  this.children.forEach(function(child) {
    child.traverse(func);
  })
};


/*
 * Complexity: What is the time complexity of the above functions?
  .addChild() is of constant complexity
  .contains() is of linear complexity
 */
