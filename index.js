// -------------------- 1 задача --------------------

const firstValue = prompt("Введите число");
const secondValue = prompt("Введите систему счисления");

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

const thirdValue = prompt("Введите первое число");
const number1 = Number(thirdValue);

if (isNaN(number1)) {
  console.log("Некорректный ввод!");
} else {
  const fourthValue = prompt("Введите второе число");
  const number2 = Number(fourthValue);

  if (isNaN(number2)) {
    console.log("Некорректный ввод!");
  } else {
    console.log(makeOperations(thirdValue, fourthValue));
  }
}

function makeOperations(a, b) {
  return `Ответ: ${a + b}, ${a / b}`;
}
