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
  return !!this.graph[node];
};

Graph.prototype.removeNode = function(node){
  var target = this.graph[node];
  if (target.edges[0]) {
    for (var i = 0; i < target.edges.length; i++) {
      var link = target.edges[i];
      this.removeEdge(link, node);
    }
  }
  delete this.graph[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edgeList = this.graph[fromNode].edges;
  for (var i = 0; i < edgeList.length; i++) {
    if (edgeList[i] === toNode) {
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
  var curGraph = this.graph;
  
  var unlink = function (node1, node2){
    for (var i = 0; i < curGraph[node1].edges.length; i++) {
      if (curGraph[node1].edges[i] === node2) {
        var beginning = curGraph[node1].edges.slice(0,i);
        var end = curGraph[node1].edges.slice(i+1);
        curGraph[node1].edges = beginning.concat(end);
      }
    }  
  }

  unlink(fromNode,toNode);
  unlink(toNode,fromNode);
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.graph) {
    cb(this.graph[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode() : O(1);
 * contains() : O(1);
 * removeNode(): O(N);
 * hasEdge() : O(N);
 * addEdge() : O(1)
 * removeEdge() : O(N)
 * forEach() : O(N)
 *
 *
 */



