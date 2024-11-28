function find_numbers(x) {
  const result = [];
  for (let i = 1; i <= x; i++) { // перебор чисел от 1 до x
    for (let k = 0; k <= 10; k++) { // вводим граничение по степени у 3 (допускаются степени больше)
      for (let l = 0; l <= 10; l++) { // вводим граничение по степени у 5 (допускаются степени больше)
        for (let m = 0; m <= 10; m++) { // вводим граничение по степени у 7 (допускаются степени больше)
          if (3**k * 5**l * 7**m === i) {
            result.push(i);
            break; // Если число найдено, переходим к следующему
          }
        }
      }
    }
  }
  return result;
}

let number = 10;
let klm_numbers = find_numbers(number);
if (klm_numbers.length > 0) { // проверка на существование таких чисел
  console.log(`Числа от 1 до ${number}, удовлетворяющие условию (3^K * 5^L * 7^M = x): ${klm_numbers.join(', ')}`);
} else {
  console.log("Нет чисел, удовлетворяющих условию.");
}
