/**
 * Функция для решения задачи 160
 * @param {string} m - Количество монет
 * @param {string} n - Достоинство монет
 * @return {string}  - Возвращает строку, которая содержит значение монеты , которую нужно забрать себе
 *
 * @example
 *    money("5", "1 2 3 4 5");
 */

const arrSum = arr => arr.reduce((sum, current) => sum + current, 0);

function money(m, n) {
  var arr = n.split(" ").sort((a, b) => b - a);
  for (i = 0; i < arr.length; i++) {
    if (arrSum(arr.slice(0, i + 1)) > arrSum(arr.slice(i + 1))) {
      return i;
    }
  }
}

console.log(money("5", "1 2 3 4 5"));
