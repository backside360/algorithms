/**
 * Функция сортировки строки возрастанию
 * @param {string} numbers - Строка, в котором необходимо произвести поиск
 * @return {string}  - Возвращает отсортированную строку
 *
 * @example
 *    findSum("5+2+3+1");
 */

const findSum = numbers =>
  numbers
    .split("+")
    .sort((a, b) => a - b)
    .join("+");

console.log(findSum("3+2+1"));
