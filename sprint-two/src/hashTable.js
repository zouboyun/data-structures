

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._hashFunction = window.getIndexBelowMaxForKey;
};

HashTable.prototype.insert = function(k, v) {
  var index = this._hashFunction(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = this._hashFunction(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = this._hashFunction(k, this._limit);
  this._storage.each(function(value, i, array) {
    array.splice(index, 1);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
  .insert() has constant complexity
  .retrieve() has constant complexity
  .remove() has linear complexity
 */

/* ALLOWS MULTIPLE PAIR STORAGE @ SINGLE INDEX */
// HashTable.prototype.insert = function(k, v) {
//   var index = this._hashFunction(k, this._limit);
//   var existingTuples = this._storage.get(index);
//   var newTuple = [k, v];
//   if (existingTuples !== undefined || existingTuples.length === 0) {
//     existingTuples.push(newTuple);
//   } else {
//     existingTuples = [newTuple];
//   }
//   this._storage.set(index, existingTuples);
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = this._hashFunction(k, this._limit);
//   var existingTuples = this._storage.get(index);
//   if (existingTuples !== undefined || existingTuples.length === 0) {
//     for (var i = 0; i < existingTuples.length; i++) {
//       if (existingTuples[i][0] === k) {
//         return existingTuples[i][1];
//       }
//     }
//   }
// };

// HashTable.prototype.remove = function(k) {
//   var index = this._hashFunction(k, this._limit);
//   this._storage.each(function(value, i, array) {
//     for (var i = 0; i < array[index].length; i++) {
//       if (array[index][i][0] === k) {
//         array[index].splice(i, 1);
//       }
//     }
//   });
// };