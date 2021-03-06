describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should return null if removeHead is called on an empty list', function() {
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.removeHead()).to.equal(null);
  });

  it('should return head and tail references to null after last node is removed', function() {
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });
  
  it('should accept and work with all primitive inputs for addToTail', function() {
    linkedList.addToTail('abc');
    expect(linkedList.tail.value).to.equal('abc');
    linkedList.addToTail(false);
    expect(linkedList.tail.value).to.equal(false);
    linkedList.addToTail(undefined);
    expect(linkedList.tail.value).to.equal(undefined);
  });
  
  it('should accept and work with all collection inputs for contains', function() {
    linkedList.addToTail(['a', 'b', 'c']);
    expect(linkedList.contains(['a', 'b', 'c'])).to.be.true;
  });

});
