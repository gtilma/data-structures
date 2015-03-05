var Queue = function(){
  var storage = {};
  storage.objSize = 0;

  extend(storage, queueMethods);
  return storage;
};

var extend = function(origin, extension){
  for (var key in extension){
    origin[key] = extension[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  for (var i = this.objSize; i >= 0; i--){
    this[i + 1] = this[i];
  }
  this[0] = value;
  this.objSize++;
};
queueMethods.dequeue = function(){
  var result = this[this.objSize - 1];
  delete this[this.objSize - 1];
  this.objSize && this.objSize--;
  return result;

};
queueMethods.size = function(){
    return this.objSize;
};
