var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage.get(i))) {
    var bucket = this._storage.get(i);
    bucket.push(k,v);
    this._storage.set(i, bucket);
  } else {
    this._storage.set(i, [k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j] === k) {
      return bucket[j+1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var index = bucket.indexOf(k)
  this._storage.get(i).splice(index, 2);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * insert : O(1)
 * retrieve : O(1)
 * remove : O(1)
 * 
 */
