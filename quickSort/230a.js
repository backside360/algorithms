/**
 * Функция для решения задачи 230а
 * @param {array} arrData - Массив c данными
 * @return {string}  - Возвращает строку, которая отвечает на вопрос о прохождении либо о провале уровня
 *
 * @example
 *    dragon(["2 2", "1 50", "30 1"]);
 */

function dragonLevel(arrData) {
  var power = Number(arrData[0].split(" ")[0]);
  var dragons = arrData.slice(1).sort(function(a, b) {
    return Number(a.split(" ")[0] - b.split(" ")[0]);
  });
  for (var i = 0; i < dragons.length; i++) {
    if (power > Number(dragons[i].split(" ")[0])) {
      power += Number(dragons[i].split(" ")[1]);
    } else {
      return "NO";
    }
  }
  return "YES";
}

console.log(dragon(["2 2", "1 50", "30 1"]));
