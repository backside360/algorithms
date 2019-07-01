/**
 * Функция для решения задачи 514c
 * @param {array} parts - Массив строк, который находится в памяти
 * @param {array} requests - Массив строк, который нужно сравнить с уже имеющися
 * @return {Array}  - Возвращает массив строк с результатами проверки строк
 *
 * @example
 *    checkPart(["aaaaa", "acacaca"], ["aabaa", "ccacacc", "caaac"])
 */

const checkPart = (parts, requests) => {
  let arr = [];
  for (let i = 0; i < requests.length; i++) {
    for (let y = 0; y < parts.length; y++) {
      if (parts[y].length === requests[i].length) {
        let counter = 0;
        for (let g = 0; g < parts[y].length; g++) {
          if (parts[y][g] != requests[i][g]) {
            counter += 1;
          }
        }
        if (counter == 1) {
          arr.push("YES");
        } else {
          arr.push("NO");
        }
      }
    }
  }
  return arr;
};

console.log(checkPart(["aaaaa", "acacaca"], ["aabaa", "ccacacc", "caaac"]));
