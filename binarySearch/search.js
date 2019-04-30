/**
  * Функция бинарного поиска в отсортированном списке
  * @param {array} list - Список элементов по которым необходимо выполнить поиск
  * @param {number} item - Элемент который необходимо найти в списке
  * @return {null|number} - Возвращает найденный элемент или если элемент не найдет null
  *
  * @example
  *   const list = [1,2,3,4,5];
  *   const item = 4;
  *   binarySearch(list, item);
  */
function binarySearch(list, item) {
  /** Старт поиска */
  let low = 0;
  /** Конец поиска */
  let high = list.length - 1;

  
  /** Цикл */
  while (low <= high) {
    /** Указатель текущий выбранный элемент в списке  */
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

let myList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(myList, 5));
