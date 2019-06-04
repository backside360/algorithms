// суммирует все элементы переданного массива
const arrSum = arr => arr.reduce((sum, current) => sum + current, 0);

function reduce(arr, callback, defaultValue) {
  let acc = defaultValue;
  
  for (var i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  
  return acc;
}

const arrSum = arr => reduce(arr, (sum, current) => sum + current, 0);



function money(_, n) {
  var arr = n.split(" ");
  arr.sort((a, b) => b - a);
  
  for (i = 0; i < arr.length; i++) {
    const possibleMaxSum = arrSum(arr.slice(0, i+1));
    const possibleMinSum = arrSum(arr.slice(i+1));
    
    if (possibleMaxSum > possibleMinSum) {
      return i+1;
    }
  }
}

console.log(money("5", "1 2 3 4 5"));
