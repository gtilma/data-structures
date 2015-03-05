var Stack = function() {
  this.length = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
};
Stack.prototype.pop = function () {
  var result = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  result && this.length--;
  return result;
};
Stack.prototype.size = function () {
  return this.length;
};
