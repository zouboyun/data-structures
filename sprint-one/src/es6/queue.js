class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  enqueue(value) {
    for (var i = this.count - 1; i >=0; i--) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[0] = value;
    this.count++;
  }

  dequeue() {
    if (this.count > 0) {
      var result = this.storage[this.count - 1];
      this.count--;
      return result;
    }
  }

  size() {
    return this.count;
  }
}
