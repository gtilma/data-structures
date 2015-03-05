var Queue = function() {
  this.storage = {};
  this.oldest = 0;
  this.newest = 0;
};

Queue.prototype.enqueue = function(val){
  this.storage[this.newest] = val;
  this.newest++;
}
Queue.prototype.dequeue = function(){
  var result = this.storage[this.oldest];
  delete this.storage[this.oldest];
  result && this.oldest++;
  return result;
}
Queue.prototype.size = function(){
  return this.newest - this.oldest;
}
