function bubbleSort(arr) {
    var n = arr.length;
  
    // Основной цикл сортировки
    for (var i = 0; i < n; i++) {
      // Переход к следующему элементу
      for (var j = 0; j < n - i - 1; j++) {
        // Если текущий элемент больше следующего
        if (arr[j] > arr[j + 1]) {
          // Меняем их местами
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }

// Чтение входной строки и преобразование её в список целых чисел
const userNumber = '7 5 1 23 853 213 989 -123 -1'
const numbers = userNumber.split(" ").map(Number);

// Сортировка и вывод результата
const sortedNumbers = bubbleSort(numbers);
console.log(`Отсортированная последовательность: ${sortedNumbers.join(", ")}`);