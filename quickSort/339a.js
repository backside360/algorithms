/**
 * Функция сортировки строки возрастанию
 * @param {string} numbers - Строка, в котором необходимо произвести поиск
 * @return {string}  - Возвращает отсортированную строку
 *
 * @example
 *    findSum("5+2+3+1");
 */

function findSum(numbers) {
  var arr = numbers.split("+");
  arr.sort(function(a, b) {
    return a - b;
  });
  var newSum = arr.join("+");
  return newSum;
}

console.log(findSum("3+2+1"));
