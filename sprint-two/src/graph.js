

var Graph = function(){
  this.graph = {};
};

Graph.prototype.addNode = function(node){
  var tempNode = {};
  tempNode.value = node;
  tempNode.edges = [];
  this.graph[node] = tempNode;
};

Graph.prototype.contains = function(node){
  for (var key in this.graph) {
    if (this.graph[key].value === node) {
      return true;
    }
    continue;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  // get the node we want to delete
  var target = this.graph[node];
  // check for edges
  if (target.edges[0]) {
    for (var i = 0; i < target.edges.length; i++) {
      // call removeEdge on each value
    }
  }
  delete this.graph[node];

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  
  for( var i = 0;i < this.graph[fromNode].edges.length; i++){
    if(this.graph[fromNode].edges[i] === toNode){
      return true;
    }
  }
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.graph[fromNode].edges.push(toNode);
  this.graph[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){

};

Graph.prototype.forEachNode = function(cb){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



