var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var node = new Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }

  if(this.children[0]){
    for(var i = 0; i < this.children.length; i++){
      if (this.children[i].contains(target)) {
        return true;
      }
      continue;
    }
  }
  return false;

};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild : O(1)
 * contains : O(N)
 *
 */



///~~~~~~~~~~~~~~
var extend = function(object1, object2){
  for( var key in object2){
    object1[key] = object2[key];
  }
  return object1;
}
///~~~~~~~~~~~~~~
