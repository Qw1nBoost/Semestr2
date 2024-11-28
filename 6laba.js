// Может быть как устойчивый, так и неустойчивый. На массиве из 
// n элементов имеет время выполнения в худшем, среднем и лучшем случае
// O(n^2), предполагая что сравнения делаются за постоянное время.


// 1.Находим номер минимального значения в текущем списке.
// 2.Производим обмен этого значения со значением первой неотсортированной позиции
// (обмен не нужен, если минимальный элемент уже находится на данной позиции).
// 3.Теперь сортируем хвост списка, исключив из рассмотрения уже отсортированные элементы.

function insertion_sort(arr) {
  let n = arr.length;

  for (let i = 0; i < n-1; i++) { // цикл начинается с первого элеминта массива
    let temp = arr[i]; // создаем копию первого элемента
    let minIndex = i; // на данном этапе приравниваем мин. индекс к i
    for (let j= i+1; j < n; j++) { // элемент с индексом j стоит после элемента с индексом i
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex !== i){       //|
      arr[i] = arr[minIndex]; //|--- Выполняем свап элементов списка
      arr[minIndex] = temp;   //|
    }
  }

  return arr;
}
  
  // Пример использования
let numbers = [7, 3, 12, -3, -8, 0, 5];
let sorted_numbers = insertion_sort(numbers);
console.log(`Отсортированный массив: ${sorted_numbers}`);
