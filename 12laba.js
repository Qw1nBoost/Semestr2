function externalMultiwayMergeSort(arr, numWays = 3) { // numWays - количество "файлов"
    if (arr.length <= 1) return arr;
  
    const chunkSize = Math.ceil(arr.length / numWays); // Размер "файла"
  
    // Разделение на части (имитация создания файлов)
    const chunks = [];
    for (let i = 0; i < numWays; i++) {
      chunks.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
  
    // Сортировка каждой части (имитация сортировки "файлов" в памяти)
    for (let i = 0; i < numWays; i++) {
      chunks[i].sort((a, b) => a - b);
    }
  
  
    // Слияние отсортированных частей
    let merged = [];
    while (chunks.some(chunk => chunk.length > 0)) {
      let minVal = Infinity;
      let minIndex = -1;
  
      for (let i = 0; i < numWays; i++) {
        if (chunks[i].length > 0 && chunks[i][0] < minVal) {
          minVal = chunks[i][0];
          minIndex = i;
        }
      }
  
      merged.push(chunks[minIndex].shift()); //Извлекаем минимальный элемент
    }
  
    return merged;
  }
  
  
  //Пример использования:
  const arr = [170, 45, 75, 90, 802, 24, 2, 66, 1000, 500, 300, 120, 200, 800, 60, 70, 900, 10];
  const sortedArr = externalMultiwayMergeSort(arr, 3); // 3 "файла"
  console.log("Отсортированный массив:", sortedArr);