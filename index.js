const firstValue = prompt("Введите первое число");
const secondValue = prompt("Введите второе число");

// -------------------- 1 задача --------------------

function convertNumber(a, b) {
  const number = Number(a);
  const numberSystem = Number(b);

  if (isNaN(number) || isNaN(numberSystem)) {
    return console.log("Некорректный ввод!");
  }
  return number.toString(numberSystem);
}

console.log(convertNumber(firstValue, secondValue));

// -------------------- 2 задача --------------------

function getNumber(a, b) {
  const number1 = Number(a);
  const number2 = Number(b);

  if (isNaN(number1) || isNaN(number2)) {
    return console.log("Некорректный ввод!");
  }
  return `Ответ: ${number1 + number2}, ${number1 / number2}`;
}

console.log(getNumber(firstValue, secondValue));
