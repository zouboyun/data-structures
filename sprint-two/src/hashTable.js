

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._hashFunction = window.getIndexBelowMaxForKey;
};

HashTable.prototype.insert = function(k, v) {
  var index = this._hashFunction(k, this._limit);
  this._storage.set(index,v);
};

HashTable.prototype.retrieve = function(k) {
  var index = this._hashFunction(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = this._hashFunction(k, this._limit);
  this._storage.each(function(value,i,array) {
    array.splice(index,1);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
  .insert() has constant complexity
  .retrieve() has constant complexity
  .remove() has linear complexity
 */


