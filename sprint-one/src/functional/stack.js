var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    for (var i = size - 1; i >= 0; i--) {
      storage[i+1] = storage[i];
    }
    storage[0] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      var result = storage[0];
      for (var i = 0; i < size; i++) {
        storage[i] = storage[i+1];
      }
      size--;
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
