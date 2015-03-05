var Stack = function() {
  //prototypal link to stack methods 
  var storage = Object.create(stackMethods);
  storage.length = 0;
  return storage;
};

var stackMethods = {};

stackMethods.push = function (value){
  var key = this.length;
  this[key] = value;
  this.length++;

}

stackMethods.pop = function(){
  var key = this.length;
  var result = this[key-1];
  delete this[key];
  result && this.length--;
  return result;
}

stackMethods.size = function(){
  return this.length;
}




