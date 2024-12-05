// Поразрядная сортировка 

function radixSort(arr) {
  const max = Math.max(...arr); // находим максимальное число в массиве чтобы понять сколько разрядов
  let exp = 1;                  // нам нужно для полной сортировки

  while (max / exp >= 1) {
    const buckets = Array.from({ length: 10 }, () => []); // создаем массив из подмассивов

    // Распределить элементы по корзинам
    for (let i = 0; i < arr.length; i++) { //  Каждый элемент массива распределяется по соответствующей корзине на основе текущей цифры разряда
      const digit = Math.floor((arr[i] / exp) % 10);
      buckets[digit].push(arr[i]);
    }

    // Объединить корзины
    let k = 0;
    for (let i = 0; i < buckets.length; i++) {      // После распределения всех элементов по корзинам они объединяются обратно
      for (let j = 0; j < buckets[i].length; j++) { // в исходный массив в порядке возрастания цифр текущего разряда.
        arr[k++] = buckets[i][j];
      }
    }

    exp *= 10;
  }

  return arr;
}

// Пример использования
const numbers = [5, 1, 2, 8, 5, 7, 4];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers);
