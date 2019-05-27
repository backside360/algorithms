/**
 * Функция подсчета количества дней для преодоления определенного километража
 * @param {number} fDay - Число км, которое собираемся пройти в первый день
 * @param {number} totalKm - Желаемое общее число км
 * @return {number} - Возвращает день достижение цели
 *
 * @example
 *   var firstDay = 10;
 *   var totalKm = 100;
 *   findDay(10,100);
 */



function findDay(fDay, totalKm) {
  var day = 1;
  while (fDay < totalKm) {
    totalKm -= fDay;
    fDay *= 1.7;
    day += 1;
  }
  return day;
}

console.log(findDay(10, 9));
