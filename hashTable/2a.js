/**
 * Функция для решения задачи 2а
 * @param {string} Data - Строка с данными о количестве конов и результатах игроков
 * @return {string}  - Возвращает отсортированную строку, в которой указано имя победителя
 *
 * @example
 *    findWinner(["3", "mike -2", "andrew 3", "mike 2"])
 */

function findWinner(data) {
  let obj = {};
  data = data.slice(1);
  let winner;
  for (let i = 0; i < data.length; i++) {
    var nameScore = data[i].split(" ");
    if (nameScore[0] in obj) {
      obj[nameScore[0]] += Number(nameScore[1]);
    } else {
      obj[nameScore[0]] = Number(nameScore[1]);
    }
    if (winner === undefined) {
      winner = nameScore[0];
    } else {
      if (obj[winner] < obj[nameScore[0]]) {
        winner = nameScore[0];
      }
    }
  }
  return winner;
}

console.log(findWinner(["3", "mike -2", "andrew 3", "mike 2"]));
//console.log(typeof winner);
