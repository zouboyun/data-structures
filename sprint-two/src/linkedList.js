var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = new Node(value);    
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
    if (list.head === null) {
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var tempHead = list.head.value;
      list.head = list.head.next;
      if (list.head === null) {
        list.tail = null;
      }
      return tempHead;
    } else {
      return null;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var isFound = false;
    while(currentNode !== null) {
      if (typeof target !== 'object') {
        if (currentNode.value === target) {
          isFound = true;
        }
      } else {
        return compareObjects(target,currentNode.value);
      }
      currentNode = currentNode.next;
    }
    return isFound;
  };
  return list;
};

var compareObjects = function(collection, target) {
  if (typeof collection !== typeof target) {
    return false;
  } else if (Array.isArray(collection) && Array.isArray(target)) {
    if (collection.length !== target.length) {
      return false;
    } else {
      var same = true;
      collection.forEach(function(d, i) {
        if (d !== target[i]) { same = false; }
      });
      return same;
    }
  } else if (collection instanceof Object && target instanceof Object) {
    if (Object.keys(collection).length !== Object.keys(target).length) {
      return false;
    } else {
      var same = true;
      for (var key in collection) {
        if (collection[key] !== target[key]) { same = false; }
      }
      return same;
    }
  } else {
    return false;  
  }
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addToTail() is of constant complexity
  .removeHead() is of constant complexity
  .contains() is of linear complexity
 */
