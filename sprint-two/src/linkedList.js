var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);

    // get the node at tail 
    // create new node 
    // make old tail point to new node

    // if only 1 node added. point head to node aswell
  };
  //O(1)
  list.removeHead = function(){
    //get head's next node.
    //make head point to next node
    //delete old head node

  };
  //O(1)

  list.contains = function(target){

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
