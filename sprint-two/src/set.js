var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = LimitedArray(set._limit);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = null;
    return Object.keys(this._storage);
  }
};

setPrototype.contains = function(item) {
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
   .add() is of constant complexity
   .contains() is of constant complexity
   .remove() is of constant complexity
 */
