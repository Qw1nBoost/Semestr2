function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Текущий элемент для вставки
        let j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

const userNumber = '7 5 1 23 853 213 989 -123 -1'
const numbers = userNumber.split(" ").map(Number);

// Сортировка и вывод результата
const sortedNumbers = insertionSort(numbers);
console.log(`Отсортированная последовательность: ${sortedNumbers.join(", ")}`);