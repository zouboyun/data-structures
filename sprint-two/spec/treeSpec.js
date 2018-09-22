describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should have parent property for each node', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.parent).to.equal(null);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should work with all primitive data types as input for addChild and contains', function() {
    tree.addChild('a');
    tree.addChild(true);
    tree.children[0].addChild(undefined);
    tree.children[1].addChild(8);
    expect(tree.contains('a')).to.equal(true);
    expect(tree.contains('b')).to.equal(false);
    expect(tree.contains(true)).to.equal(true);
    expect(tree.contains(undefined)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  it('should work with all collection data types as input for addChild and contains', function() {
    tree.addChild([5]);
    tree.addChild({'a': 5});
    tree.children[0].addChild(['a', 'b', 'c']);
    expect(tree.contains([5])).to.equal(true);
    expect(tree.contains([5, 6])).to.equal(false);
    expect(tree.contains({'a': 5})).to.equal(true);
    expect(tree.contains({'a': 5, 'b': 0})).to.equal(false);
    expect(tree.contains(['a', 'b', 'c'])).to.equal(true);
  });

  it('should remove the node from its parent in both directions', function() {
    tree.addChild(5);
    tree.addChild('hi');
    tree.children[0].addChild(true);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
    tree.children[0].children[0].removeFromParent();
    expect(tree.children[0].contains(true)).to.equal(false);
  });

  it('should accept a callback and apply it on each node\'s value', function() {
    tree.addChild(5);
    tree.addChild('hi');
    tree.children[0].addChild(true);
    var arr = [];
    var callbackFunc = function(value) {
      arr.push(value);
    }
    tree.traverse(callbackFunc);
    // debugger;
    expect(arr).to.eql([undefined, 5, true, 'hi']);
  });

});
