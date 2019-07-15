/**
 * Функция для решения задачи 500а
 * @param {number} cell - Номер желаемой ячейки
 * @param {string} cellSystem - Транспортная система, которая указывает количество шагов
 * @return {string}  - Возвражает ответ о возможности прибытия в желаемую ячейку, использую данную транспортную систему
 *
 * @example
 *    checkCellRoute(4, '1 2 1 2 1 2 1')
 */

const checkCellRoute = (cell, cellSystem) => {
  let goal = cell - 1;
  let sum = 0;
  let arr = cellSystem.split(' ').map(function(item) {
    return parseInt(item);
  });
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i] + i;
  }
  let y = 0;
  while (y < goal) {
    y = obj[y];
    if (y == goal) {
      return 'YES';
    }
  }
  return 'NO';
};

console.log(checkCellRoute(4, '1 2 1 2 1 2 1'));
