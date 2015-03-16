function chart() {
  chartType = "line";
  function apply(){
    return "Here's your " + chartType + " chart!";
  }
  apply.type = function(t) {
    if (t === undefined) {
      return chartType;
    } else {
      chartType = t;
      return apply;
    }
  }
  return apply
}

module.exports = chart;
