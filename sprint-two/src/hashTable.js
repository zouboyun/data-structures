var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
  this._hashFunction = window.getIndexBelowMaxForKey;
};

/* ALLOWS MULTIPLE PAIR STORAGE @ SINGLE INDEX */
HashTable.prototype.insert = function(k, v) {
  var index = this._hashFunction(k, this._limit);
  this._count ++;
  var existingTuples = this._storage.get(index);
  var newTuple = [k, v];
  if (existingTuples !== undefined) {
    var matches = false;
    existingTuples.forEach(function(tuple) {
      if (tuple[0] === k) { 
        tuple[1] = v;
        matches = true;
      }
    });
    if (!matches) {
      existingTuples.push(newTuple);
    }
  } else {
    existingTuples = [newTuple];
  }
  this._storage.set(index, existingTuples);

  if (this._count/this._limit > 0.75) {
    this._limit *= 2;
    this.rehash();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = this._hashFunction(k, this._limit);
  var existingTuples = this._storage.get(index);
  if (existingTuples !== undefined) {
    for (var i = 0; i < existingTuples.length; i++) {
      if (existingTuples[i][0] === k) {
        return existingTuples[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = this._hashFunction(k, this._limit);
  this._count --;
  this._storage.each(function(value, i, array) {
    for (var i = 0; i < array[index].length; i++) {
      if (array[index][i][0] === k) {
        array[index].splice(i, 1);
      }
    }
  });
  
  if (this._count/this._limit < 0.25) {
    this._limit = Math.ceil(this._limit/2);
    this.rehash();
  }
};

HashTable.prototype.rehash = function() {
  var oldStorage = [];
  this._storage.each(function(value, i, array) {
    array.forEach(function(bucket) {
      bucket.forEach(function(tuple) {
        oldStorage.push(tuple);
      });
    });
  });
  this._storage = LimitedArray(this._limit);
  var self = this;
  oldStorage.forEach(function(tuple) {
    self._count --;
    self.insert(tuple[0],tuple[1]);
  });
};


// HashTable.prototype.insert = function(k, v) {
//   var index = this._hashFunction(k, this._limit);
//   this._count ++;
//   this._storage.set(index, v);
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = this._hashFunction(k, this._limit);
//   return this._storage.get(index);
// };

// HashTable.prototype.remove = function(k) {
//   var index = this._hashFunction(k, this._limit);
//   this._count --;
//   this._storage.each(function(value, i, array) {
//     array.splice(index, 1);
//   });
// };



/*
 * Complexity: What is the time complexity of the above functions?
  .insert() has constant complexity
  .retrieve() has constant complexity
  .remove() has linear complexity
 */

