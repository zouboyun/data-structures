var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (var i = size - 1; i >= 0; i--) {
      storage[i+1] = storage[i];
    }
    storage[0] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var result = storage[size-1];
      size--;
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
