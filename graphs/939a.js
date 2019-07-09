/**
 * Функция для решения задачи 939а
 * @param {string} Planes - Строка с данными о выборе самолётов
 * @return {string}  - Возвращает строку о существовании треугольника
 *
 * @example
 *    findLove('5 5 4 5 3')
 */

const findLove = planes => {
  let step;
  const graph = {};
  let arr = planes.split(' ');
  for (let i = 0; i < arr.length; i++) {
    graph[i + 1] = arr[i];
  }
  for (let i = 1; i <= arr.length; i++) {
    step = graph[i];
    for (let y = 0; y < 2; y++) {
      step = graph[step];
    }
    if (step == i) {
      return 'YES';
    }
  }
  return 'NO';
};

console.log(findLove('5 5 4 5 3'));
