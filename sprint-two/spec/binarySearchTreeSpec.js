describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", "depthFirstLog", "breadthFirstLog", "minDepth" and "maxDepth"', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
    expect(binarySearchTree.breadthFirstLog).to.be.a('function');
    expect(binarySearchTree.minDepth).to.be.a('function');
    expect(binarySearchTree.maxDepth).to.be.a('function');
  });

  it('should calculate correct minDepth and maxDepth after insertion', function() {
    binarySearchTree.insert(6);
    expect(binarySearchTree.minDepth()).to.equal(2);
    expect(binarySearchTree.maxDepth()).to.equal(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(13);
    binarySearchTree.insert(15);
    expect(binarySearchTree.minDepth()).to.equal(3);
    expect(binarySearchTree.maxDepth()).to.equal(4);
  });

  it('should rebalance when maxDepth is larger than minDepth * 2', function() {
    binarySearchTree.insert(6);
    expect(binarySearchTree.minDepth()).to.equal(2);
    expect(binarySearchTree.maxDepth()).to.equal(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(15);
    expect(binarySearchTree.minDepth()).to.equal(3);
    expect(binarySearchTree.maxDepth()).to.equal(3);
    binarySearchTree.insert(10);
    expect(binarySearchTree.minDepth()).to.equal(3);
    expect(binarySearchTree.maxDepth()).to.equal(4);
    binarySearchTree.insert(11);
    binarySearchTree.insert(12);
    binarySearchTree.insert(13);
    expect(binarySearchTree.minDepth()).to.equal(4);
    expect(binarySearchTree.maxDepth()).to.equal(7);
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3]);
  });
});
