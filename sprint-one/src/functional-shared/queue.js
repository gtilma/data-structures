var Queue = function(){
  var storage = {};
  storage.oldest = 0;
  storage.newest = 0;

  extend(storage, queueMethods);
  return storage;
};


var queueMethods = {};

queueMethods.enqueue = function(value){
  var key = this.newest
  this[key] = value;
  this.newest++;
};
queueMethods.dequeue = function(){
  var result = this.oldest;
  this[result] && this.oldest++;
  return this[result];

};
queueMethods.size = function(){
    return this.newest - this.oldest;
};






///~~~~~~
var extend = function(origin, extension){
  for (var key in extension){
    origin[key] = extension[key];
  }
};
