var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
  .addChild() is of constant complexity
  .contains() is of linear complexity
 */
