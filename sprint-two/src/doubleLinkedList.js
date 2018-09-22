var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = new Node(value);
    } else {
      var tempTail = list.tail;
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
      list.tail.previous = tempTail;
    }
    if (list.head === null) {
      list.head = list.tail;
    }
  };

  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = new Node(value);
    } else {
      var tempHead = list.head;
      list.head.previous = new Node(value);
      list.head = list.head.previous;
      list.head.next = tempHead;
    }
    if (list.tail === null) {
      list.tail = list.head;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var tempHead = list.head.value;
      list.head = list.head.next;
      if (list.head === null) {
        list.tail = null;
      } else {
        list.head.previous = null;
      }
      return tempHead;
    } else {
      return null;
    }
  };
  
  list.removeTail = function() {
    if (list.tail !== null) {
      var tempTail = list.tail.value;
      list.tail = list.tail.previous;
      if (list.tail === null) {
        list.head = null;
      } else {
        list.head.next = null;
      }
      return tempTail;
    } else {
      return null;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    var isFound = false;
    while (currentNode !== null) {
      if (typeof target !== 'object') {
        if (currentNode.value === target) {
          isFound = true;
        }
      } else {
        return compareObjects(target, currentNode.value);
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addToTail() is of constant complexity
  .removeHead() is of constant complexity
  .contains() is of linear complexity
 */
