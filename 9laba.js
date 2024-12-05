function heapSort(arr) {
    const n = arr.length;
  
    // Построить кучу
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Извлечь элементы из кучи и поместить их в отсортированный массив
    for (let i = n - 1; i >= 0; i--) {
      // Поменять местами корень кучи (максимальный элемент) с последним элементом
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      // Восстановить кучу для оставшихся элементов
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // Функция для преобразования поддерева в кучу
  function heapify(arr, n, i) {
    let largest = i; // Инициализировать наибольший элемент как корень
    let left = 2 * i + 1; // Индекс левого потомка
    let right = 2 * i + 2; // Индекс правого потомка
  
    // Если левый потомок больше корня
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // Если правый потомок больше наибольшего элемента
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // Если наибольший элемент не корень
    if (largest !== i) {
      // Поменять местами корень с наибольшим элементом
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
  
      // Рекурсивно преобразовать поддерево в кучу
      heapify(arr, n, largest);
    }
  }
  
  // Пример использования
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedNumbers = heapSort(numbers);
  console.log(sortedNumbers); // Вывод: [1, 2, 5, 5, 6, 9]