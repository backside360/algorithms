function money(m, n) {
  var arr = n.split(" ");
  arr.sort(function(a, b) {
    return b - a;
  });
  function arrSum(arr) {
    return arr.reduce(function(sum, current) {
      return sum + current;
    }, 0);
  }
  for (i = 0; i < arr.length; i++) {
    if (arrSum(arr.slice(0, i++)) > arrSum(arr.slice(i++))) {
      return i;
    }
  }
}

console.log(money("5", "1 2 3 4 5"));
