function head (l) {
    return l[0];
}
function tail(l) {
    return l.slice(1, l.length);
}

function sum() {
    function split(l) {
      return  {'head': head(l), 'tail': tail(l)}
    }
    function argsToArray () {
        return Array.prototype.slice.call(arguments)
    }

    function sumList (l) {
      let {'head': h, 'tail': t} = split(l);
      if (t.length === 0 ) { return h }
      else { return h + sumList(t) }
    }
    return sumList(argsToArray.apply(this,arguments))
}

module.exports = sum;
