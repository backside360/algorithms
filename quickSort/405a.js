/**
 * Функция для решения задачи 405
 * @param {string} Data - Строка с данными о количестве кубиков
 * @return {string}  - Возвращает отсортированную строку, в которой кубики расположены по возрастанию
 *
 * @example
 *    cubic("3 2 1 2");
 */

const getSortedCubic = data =>
  data
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");

console.log(getSortedCubic("3 2 1 2"));
