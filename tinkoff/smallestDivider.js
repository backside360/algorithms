/**
 * Функция поиска наименьшего делителя
 * @param {number} n - Число, для которого ищем наименьший делитель
 * @return {number} - Возвращает результат - наименьший делитель.
 *
 * @example
 *   var yourNumber = 234
 *   minDivisor(yourNumber);
 */

function minDivisor(n) {
  i = 1;
  while (i <= n) {
    i += 1;
    if (n % i == 0) {
      return i;
    }
  }
}

console.log(minDivisor(13));
