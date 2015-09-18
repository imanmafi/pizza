describe('Pizza', function() {

  var testPizza;

  beforeEach(function() {
    testPizza = Object.create(Pizza);
  });

  it('sets the pizza diameter property', function() {
    testPizza.setDiameter(13);
    expect(testPizza.diameter).to.equal(13);
  });

  it('sets the pizza topping property', function() {
    testPizza.setTopping("pepperoni");
    expect(testPizza.topping).to.equal("pepperoni");
  });

  it('returns the correct number of slices for an x-large pizza', function() {
    testPizza.setDiameter(16);
    expect(testPizza.slices()).to.equal(16);
  });

  it('returns the correct number of slices for a large pizza', function() {
    testPizza.setDiameter(14);
    expect(testPizza.slices()).to.equal(12);
  });

  it('returns the correct number of slices for a medium pizza', function() {
    testPizza.setDiameter(12);
    expect(testPizza.slices()).to.equal(8);
  });

  it('returns the correct number of slices for a small pizza', function() {
    testPizza.setDiameter(9.5);
    expect(testPizza.slices()).to.equal(6);
  });

  it('returns the correct number of slices for a personal pizza', function() {
    testPizza.setDiameter(6.5);
    expect(testPizza.slices()).to.equal(4);
  });
});
