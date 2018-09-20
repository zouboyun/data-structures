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
      return tempHead;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var isFound = false;
    while(currentNode !== null) {
      if (currentNode.value === target) {
        isFound = true;
      }
      currentNode = currentNode.next;
    }
    return isFound;
  };

  return list;
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
