describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add values to a set when type of value is not string', function() {
    set.add(1);
    set.add(true);
    set.add([1, 2, 3]);
    set.add({'a': undefined});
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains([1, 2, 3])).to.equal(true);
    expect(set.contains({'a': undefined})).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should remove values from a set when type of value is not string', function() {
    set.add([1, 2, 3]);
    set.add({'a': undefined});
    set.remove([1, 2, 3]);
    set.remove({'a': undefined});
    expect(set.contains([1, 2, 3])).to.equal(false);
    expect(set.contains({'a': undefined})).to.equal(false);
  });

});
