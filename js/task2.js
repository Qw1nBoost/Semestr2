function isBalanced(str) {
    const openBraces = ['(', '[', '{'];
    const closeBraces = [')', ']', '}'];
    let stack = [];
  
    for (let el of str) {
        if (openBraces.includes(el)) {
            stack.push(el);
        } else if (closeBraces.includes(el)) {
            if (!stack.length || openBraces.indexOf(stack.pop()) !== closeBraces.indexOf(el)) {
                return false;
            }
        }
    }
  
    return !stack.length;
}

function evaluateExpression(expression) {
    // Убираем последний символ '=' при необходимости
    if (expression[expression.length - 1] === '=') {
        expression = expression.slice(0, -1);
    }

    // Проверка правильности размещения скобок
    const isBracketValid = isBalanced(expression);
    if (!isBracketValid) {
        return `Ошибка: неверное размещение скобок`;
    }

    // Попытка вычисления выражения
    let result;
    try {
        result = parseFloat(eval(expression));
    } catch (error) {
        if (error instanceof ReferenceError || error instanceof SyntaxError) {
            return `Ошибка: ${error.message}`;
        } else if (error instanceof TypeError) {
            return `Ошибка: деление на ноль`;
        } else {
            throw error;
        }
    }

    // Возвращаем результат
    return result;
}

console.log(evaluateExpression('(1+2*4)/8='))
console.log(evaluateExpression('1/0='))