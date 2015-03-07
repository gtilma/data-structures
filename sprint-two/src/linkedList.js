var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
    
  };
  
  list.removeHead = function(){
    var old = list.head;
    list.head = list.head.next;
    return old.value;
  };

  list.contains = function(target){
    if (list.head === null) {
      return false;
    }
    var checker = list.head;
    
    while (checker) {
      if (checker.value === target) {
        return true;
      } else {
        checker = checker.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addToTail : O(1)
 * removeHead : O(1)
 * contains : O(N)
 * 
 */
