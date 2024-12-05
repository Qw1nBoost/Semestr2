function calculate(expression) {
  try {
    // Удаляем пробелы и знак равенства
    expression = expression.replace(/\s/g, '').replace('=', '');

    // Разбиваем выражение на токены
    const tokens = [];
    let currentNumber = '';

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if (char.match(/\d|\./)) {
        currentNumber += char;
      } else {
        if (currentNumber) {
          tokens.push(parseFloat(currentNumber));
          currentNumber = '';
        }
        tokens.push(char);
      }
    }
    if (currentNumber) {
      tokens.push(parseFloat(currentNumber));
    }

    // Преобразование в обратную польскую нотацию (RPN)
    const outputQueue = [];
    const operatorStack = [];
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!isNaN(token)) {
        outputQueue.push(token);
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.pop(); // Удаляем '('
      } else if (token in precedence) {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(' && precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      }
    }

    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop());
    }

    // Вычисление RPN
    const stack = [];
    for (let i = 0; i < outputQueue.length; i++) {
      const token = outputQueue[i];
      if (!isNaN(token)) {
        stack.push(token);
      } else if (token === '+' || token === '-' || token === '*' || token === '/') {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        if (token === '+') {
          stack.push(operand1 + operand2);
        } else if (token === '-') {
          stack.push(operand1 - operand2);
        } else if (token === '*') {
          stack.push(operand1 * operand2);
        } else if (token === '/') {
          if (operand2 === 0) {
            return null; // Деление на ноль
          }
          stack.push(operand1 / operand2);
        }
      }
    }

    // Проверяем, остался ли только один элемент в стеке, то есть результат вычисления
    if (stack.length !== 1) {
      return null; // Неправильный формат выражения
    }
    return stack[0];
  } catch (error) {
    return null; // Некорректное выражение
  }
}


const expression = "2 + 2 * 2 / 0 = ";
const result = calculate(expression);
if (result !== null) {
  console.log("Результат:", result);
} else {
  console.log("Ошибка в выражении");
}
