describe('doubleLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property('head');
    expect(doubleLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeHead", "removeTail", and "contains"', function() {
    expect(doubleLinkedList.addToTail).to.be.a('function');
    expect(doubleLinkedList.addToHead).to.be.a('function');
    expect(doubleLinkedList.removeHead).to.be.a('function');
    expect(doubleLinkedList.removeTail).to.be.a('function');
    expect(doubleLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function() {
    doubleLinkedList.addToHead(4);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.addToHead(5);
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doubleLinkedList.addToHead(4);
    doubleLinkedList.addToHead(5);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.removeHead()).to.equal(4);
  });
  
  it('should return the value of the former tail when removeTail is called', function() {
    doubleLinkedList.addToHead(4);
    expect(doubleLinkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.contains(4)).to.equal(true);
    expect(doubleLinkedList.contains(5)).to.equal(true);
    expect(doubleLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doubleLinkedList
  it('should return null if removeHead is called on an empty list', function() {
    doubleLinkedList.addToTail(1);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.removeHead()).to.equal(null);
  });

  it('should return head and tail references to null after last node is removed', function() {
    doubleLinkedList.addToTail(1);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head).to.equal(null);
    expect(doubleLinkedList.tail).to.equal(null);
  });
  
  it('should accept and work with all primitive inputs for addToTail', function() {
    doubleLinkedList.addToTail('abc');
    expect(doubleLinkedList.tail.value).to.equal('abc');
    doubleLinkedList.addToTail(false);
    expect(doubleLinkedList.tail.value).to.equal(false);
    doubleLinkedList.addToTail(undefined);
    expect(doubleLinkedList.tail.value).to.equal(undefined);
  });
  
  it('should accept and work with all collection inputs for contains', function() {
    doubleLinkedList.addToTail(['a', 'b', 'c']);
    expect(doubleLinkedList.contains(['a', 'b', 'c'])).to.be.true;
  });

  // add tests to assess presence of previous property on nodes
  it('should place previous property to nodes added to head and tail', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(6);
    expect(doubleLinkedList.tail.previous.value).to.equal(4);
    doubleLinkedList.addToHead(3);
    doubleLinkedList.addToHead(7);
    expect(doubleLinkedList.head.next.previous.value).to.equal(7);
  });

});
