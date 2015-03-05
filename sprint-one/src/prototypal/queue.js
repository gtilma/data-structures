var Queue = function() {
  var storage = Object.create(queueMethods);
  storage.oldest = 0;
  storage.newest = 0;
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.newest] = value;
  this.newest++;
};
queueMethods.dequeue = function () {
  var result = this[this.oldest];
  delete this[this.oldest];
  result && this.oldest++;
  return result;
};
queueMethods.size = function () {
  return this.newest - this.oldest;
};
