var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // get information of current tail if any
    // var currTail = new Node(list.tail);
    // update the tail property of list
    // add a node to the list
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
 */
