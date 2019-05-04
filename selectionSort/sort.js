const { sortData } = require("../data.json");

/**
 * Функция поиска наименьшего идекса в массиве
 * @param {array} array - Массив, в котором необходимо произвести поиск
 * @return {number} - Возвращает индекс наименьшего элемента в массиве
 *
 * @example
 *   const array = [1,2,3,4,5];
 *   findSmallestIndex(array);
 */

function findSmallestIndex(array) {
  var smallestElement = array[0]; 
  var smallestIndex = 0; 

  for (var i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/**
 * Функция сортировки массива по возрастанию
 * @param {array} array - Массив, в котором необходимо произвести поиск
 * @return {array} sortedArray - Возвращает отсортированный массив
 *
 * @example
 *    const array = [5, 12, 32, 1, 4, 340, 120];
 *    function selectionSort(array);
 */

function selectionSort(array) {
  var sortedArray = [];
  var length = array.length;

  for (var i = 0; i < length; i++) {
    // Находим наименьший элемент
    var smallestIndex = findSmallestIndex(array);
    // Добавляем наименьший элемент в новый массив
    sortedArray.push(array.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}

console.log("Sorted Array: ", selectionSort(sortData.data));
