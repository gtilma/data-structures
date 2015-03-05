var Stack = function() {
  var storage = {};

  storage.length = 0;
  extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function (value) {
  var key = this.length;
  this[key] = value;
  this.length++;
}
stackMethods.pop = function () {
  var key = this.length;
  var result = this[key-1];
  delete this[key];
  result && this.length--;
  return result;
}
stackMethods.size = function () {
  return this.length;
}

var extend = function(origin, extension){
  for (var key in extension){
    origin[key] = extension[key];
  }
};
