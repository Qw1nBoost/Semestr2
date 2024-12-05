function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Базовый случай: массив с одним или нулевым элементом уже отсортирован
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);  // Левая половина массива
    const right = arr.slice(mid);    // Правая половина массива
  
    // Рекурсивно сортируем левую и правую половины
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Сливаем отсортированные половины
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    // Сравниваем элементы из левой и правой половин и добавляем меньший в result
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Добавляем оставшиеся элементы из левой половины (если есть)
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    // Добавляем оставшиеся элементы из правой половины (если есть)
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
  }
  
  // Пример использования:
  const arr = [170, 45, 75, 90, 802, 24, 2, 66];
  const sortedArr = mergeSort(arr);
  console.log("Отсортированный массив:", sortedArr); // Вывод: Отсортированный массив: [2, 24, 45, 66, 75, 90, 170, 802]