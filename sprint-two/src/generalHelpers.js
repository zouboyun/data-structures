var compareObjects = function(collection, target) {
  if (typeof collection !== typeof target) {
    return false;
  } else if (Array.isArray(collection) && Array.isArray(target)) {
    if (collection.length !== target.length) {
      return false;
    } else {
      var same = true;
      collection.forEach(function(d, i) {
        if (d !== target[i]) { same = false; }
      });
      return same;
    }
  } else if (collection instanceof Object && target instanceof Object) {
    if (Object.keys(collection).length !== Object.keys(target).length) {
      return false;
    } else {
      var same = true;
      for (var key in collection) {
        if (collection[key] !== target[key]) { same = false; }
      }
      return same;
    }
  } else {
    return false;  
  }
};