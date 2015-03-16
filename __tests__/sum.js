jest.dontMock('../dist/sum');

describe('sum', function() {
  var sum = require('../dist/sum');

  it('adds 1 + 2 + 3 to equal 6', function() {
    expect( sum(1, 2, 3) ).toBe(6);
  });

  it('adds 1 + 2 + 3 + 4 + 5 to equal 15', function() {
    expect( sum(1, 2, 3, 4, 5) ).toBe(15);
  });

});
