/**
 * Функция для решения задачи 4c
 * @param {Array} login - Массив строк с логинами, которые нужно проверить
 * @return {Array}  - Возвращает массив строк с результатами проверки логинов
 *
 * @example
 *    checkLogin(["aba", "abab", "aba", "aba"])
 */

function checkLogin(login) {
  let arr = [];
  let database = {};
  for (let i = 0; i < login.length; i++) {
    if (!(login[i] in database)) {
      database[login[i]] = "name";
      arr.push("OK");
    } else {
      for (let y = 1; y < 100000; y++) {
        let newLogin = login[i] + y;
        if (!(newLogin in database)) {
          database[newLogin] = "name";
          arr.push(newLogin);
          break;
        }
      }
    }
  }
  return arr;
}

console.log(checkLogin(["aba", "abab", "aba", "aba"]));
