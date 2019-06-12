/**
 * Функция для решения задачи 405
 * @param {string} Data - Строка с данными о количестве кубиков
 * @return {string}  - Возвращает отсортированную строку, в которой кубики расположены по возрастанию
 *
 * @example
 *    cubic("3 2 1 2");
 */

function cubic(data) {
  var arrData = data.split(" ");
  arrData.sort(function(a, b) {
    return a - b;
  });
  var gravityNumber = arrData.join(" ");
  return gravityNumber;
}

console.log(cubic("3 2 1 2"));
