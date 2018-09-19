var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.count - 1; i >= 0; i--) {
    this.storage[i + 1] = this.storage[i];
  }
  this.storage[0] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    var result = this.storage[this.count - 1];
    this.count--;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.count;
}
