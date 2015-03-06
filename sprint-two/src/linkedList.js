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
  //O(1)
  list.removeHead = function(){
    var old = list.head;
    list.head = list.head.next;
    return old.value;
  };
  //O(1)

  list.contains = function(target){
    // check to see if list is empty 
    if (list.head === null) {
      return false;
    }
    //create searching var
    var checker = list.head;
    //if the checker is not null
    
    while (checker) {
      if (checker.value === target) {
        return true;
      } else {
        checker = checker.next;
      }
    }
    return false;
  };
  //O(N)

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
 */
