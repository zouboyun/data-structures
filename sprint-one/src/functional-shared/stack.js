var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.count = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  for (var i = this.count - 1; i >= 0; i--) {
    this[i + 1] = this[i];
  }
  this[0] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var result = this[0];
    for (var i = 0; i < this.count; i++) {
      this[i] = this[i + 1];
    }
    this.count--;
    return result;
  }
};

stackMethods.size = function() {
  return this.count;
};


