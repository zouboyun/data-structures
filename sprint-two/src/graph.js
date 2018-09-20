

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (key === String(node)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let connectedNodes = this.nodes[String(node)];
  let self = this;
  connectedNodes.forEach(function(connectedNode) {
    let index = self.nodes[String(connectedNode)].indexOf(node);
    self.nodes[String(connectedNode)].splice(index,1);
  });  
  delete this.nodes[String(node)];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[String(fromNode)].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[String(fromNode)].push(toNode);
  this.nodes[String(toNode)].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let indexFromNode = this.nodes[String(fromNode)].indexOf(toNode);
  let indexToNode = this.nodes[String(toNode)].indexOf(fromNode);
  if (indexFromNode > -1) {
    this.nodes[String(fromNode)].splice(indexFromNode,1);
  }
  if (indexToNode > -1) {
    this.nodes[String(toNode)].splice(indexToNode,1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addNode() is of constant complexity
  .contains() is of linear complexity
  .removeNode() is of linear complexity
  .addEdge() is of constant complexity
  .hasEdge() is of linear complexity
  .removeEdge() is of linear complexity
  .forEachNode() is of linear complexity
 */


