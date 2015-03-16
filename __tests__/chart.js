jest.dontMock('../dist/chart');

describe('chart', function() {
  var chart = require('../dist/chart');
  beforeEach( function(){
    myBarChart = chart();
  } );

  it('chart type is line as default', function() {
    expect( myBarChart.type() ).toBe('line');
  });
});

describe('bar chart', function() {
  var chart = require('../dist/chart'),
      myBarChart;

  beforeEach( function(){
    myBarChart = chart().type('bar');
  } );

  it('chart type to equal bar', function() {
    expect( myBarChart.type() ).toBe('bar');
  });

  it('chart description to equal Here\'\s your bar chart!', function(){
    expect(myBarChart() ).toBe("Here's your bar chart!")
  });
});
