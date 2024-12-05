function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Базовый случай: массив с 0 или 1 элементом уже отсортирован
    }
  
    const pivot = arr[Math.floor(arr.length / 2)]; // Выбираем средний элемент как опорный
    const left = [];
    const right = [];
    const equal = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        equal.push(arr[i]); // Добавляем элементы, равные опорному
      }
    }
  
    // Рекурсивно сортируем левую и правую части
    return quickSort(left).concat(equal, quickSort(right));
  }
  
  
  // Пример использования:
  const arr = [170, 45, 75, 90, 802, 24, 2, 66];
  const sortedArr = quickSort(arr);
  console.log("Отсортированный массив:", sortedArr); // Вывод: Отсортированный массив: [2, 24, 45, 66, 75, 90, 170, 802]