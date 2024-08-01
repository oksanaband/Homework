//Функция для вычисления выражения
function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return b;
  }
}

// Функция для получения приоритета оператора
function getPriority(op) {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  return 0;
}

const values = []; // Стек для чисел
const ops = []; // Стек для операторов

for (let i = 0; i < expression.length; i++) {
  const char = expression[i];

  // Если текущий символ - число, считываем его
  if (!isNaN(char)) {
    let num = '';

    // Считываем все цифры, чтобы сформировать многозначное число
    while (i < expression.length && !isNaN(expression[i])) {
      num += expression[i];
      i++;
    }
    values.push(Number(num));
    i--; // Уменьшаем индекс, так как мы увеличиваем его в конце цикла
  } else if (char === '(') {
    ops.push(char); // Добавляем открывающую скобку в стек операторов
  } else if (char === ')') {
    // Вычисляем все операторы до открывающей скобки
    while (ops.length && ops[ops.length - 1] !== '(') {
      const right = values.pop();
      const left = values.pop();
      const op = ops.pop();
      values.push(calculate(left, right, op));
    }
    ops.pop(); // Удаляем открывающую скобку
  } else {
    // Обрабатываем оператор
    while (ops.length && getPriority(ops[ops.length - 1]) >= getPriority(char)) {
      const right = values.pop();
      const left = values.pop();
      const op = ops.pop();
      values.push(calculate(left, right, op));
    }
    ops.push(char); // Добавляем текущий оператор
  }
}

// Обрабатываем оставшиеся операторы
while (ops.length) {
  const right = values.pop();
  const left = values.pop();
  const op = ops.pop();
  values.push(calculate(left, right, op));

}
