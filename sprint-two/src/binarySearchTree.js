var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.methods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value){
  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value); 
    }
  } else if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.methods.contains = function(value){
  if(this.value === value){
    return true;
  }
  if(this.value > value){
    if(this.left){
      return this.left.contains(value);
    }
  } else {
    if(this.right){
      return this.right.contains(value);
    }
  }
  return false;
};

BinarySearchTree.methods.depthFirstLog = function(cb){
  cb(this.value);
  this.left && this.left.depthFirstLog(cb);
  this.right && this.right.depthFirstLog(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
