/**
 * Функция для решения задачи 2а
 * @param {string} Data - Строка с данными о количестве конов и результатах игроков
 * @return {string}  - Возвращает отсортированную строку, в которой указано имя победителя
 *
 * @example
 *    findWinner(["3", "mike -2", "andrew 3", "mike 2"])
 */

const transformPlayers = data =>
  data.slice(1).map(el => {
    const [playerName, score] = el.split(" ");
    return { playerName, score: Number(score) };
  });

const findWinner = data => {
  const obj = {};

  const players = transformPlayers(data);

  let winner = players[0].playerName;

  for (let i = 0; i < data.length; i++) {
    const [playerName, score] = data[i].split(" ");

    if (playerName in obj) {
      obj[playerName] += score;
    } else {
      obj[playerName] = score;
    }

    if (obj[winner] < obj[playerName]) {
      winner = playerName;
    }
  }

  return winner;
};

console.log(findWinner(["3", "mike -2", "andrew 3", "mike 2"]));
//console.log(typeof winner);
