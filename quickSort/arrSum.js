/**
 * Функция суммирование чисел в массиве
 * @param {array} arr - Массив c данными
 * @return {number}  - Возвращает сумму числе в массиве
 *
 * @example
 *    sum([4, 5, 2, 1]);
 */

function sum(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([2, 4, 6]));
