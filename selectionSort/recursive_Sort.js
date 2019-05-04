const { sortData } = require("../data.json");

/**
 * Функция поиска наименьшего идекса в массиве
 * @param {Array} arr -  Массив, в котором необходимо произвести поиск
 * @return {number} - Возвращает индекс наименьшего элемента в массиве
 */
function findSmallest(arr) {
  var smallest = arr[0];
  var smallestIndex = 0;
  var arrLen = arr.length;

  for (var i = 0; i < arrLen; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

/**
 * Функция сортировки с использованием рекурсии
 * @param {Array} arr - Массив, в котором необходимо произвести поиск
 * @return {Array} -  Возвращает отсортированный массив
 */
function selectionSort(arr) {
  if (!arr.length) return [];
  var smallest = arr.splice(findSmallest(arr), 1);
  return smallest.concat(selectionSort(arr));
}

console.log("Sorted Array: ", selectionSort(sortData.data));
