/**
 * Функция для решения задачи 230а
 * @param {array} arrData - Массив c данными
 * @return {string}  - Возвращает строку, которая отвечает на вопрос о прохождении либо о провале уровня
 *
 * @example
 *    dragon(["2 2", "1 50", "30 1"]);
 */

function dragonLevel(kirito, ...dragons) {
  let power = Number(kirito.split(" ")[0]);

  for (var i = 0; i < dragons.length; i++) {
    const dragonPower = Number(dragons[i].split(" ")[0]);
    const dragonExp = Number(dragons[i].split(" ")[1]);

    if (power > dragonPower) {
      power += dragonExp;
    } else {
      return "No";
    }
  }
  return "YES";
}

console.log(dragonLevel("2 2", "1 50", "53 1"));
