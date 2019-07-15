/**
 * Функция для решения задачи 115а
 * @param {array} employees - Массив с числами ,распределяющих иерархию сотрудников
 * @return {number}  - Возвращает минимальное количество групп сотрудников
 *
 * @example
 *    findGroups([-1, 1, 2, 1, -1])
 */

const findGroups = employees => {
  let arr = employees;
  let maxDepth = 0;
  for (let i = 0; i < arr.length; i++) {
    let thisDepth = 0;
    let t = i;
    while (arr[t] != -1) {
      t = arr[t] - 1;
      thisDepth++;
    }
    if (thisDepth > maxDepth) {
      maxDepth = thisDepth;
    }
  }
  return maxDepth + 1;
};

console.log(findGroups([-1, 1, 2, 1, -1]));
