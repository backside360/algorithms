/**
 * Функция суммирование чисел в массиве c использованием рекурсии
 * @param {array} arr - Массив c данными
 * @return {number}  - Возвращает сумму числе в массиве
 *
 * @example
 *    sum([4, 5, 2, 1]);
 */

function sum(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3]));
