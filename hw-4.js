// 1) Реализовать функцию concatStrings, которая может быть вызвана следующим образом: concatStrings('first')('second')('third')().
// Результатом вызова данной функции должна являться новая строка, содержащая все переданные таким образом строки.
// Если одно из значений является невалидной строкой (пустая строка - это валидная строка), то возвращать результат, полученный до текущего момента (ошибок не бросать!)
// Кроме этого добавить функции второй необязательный параметр - separator. Он также должен являться валидной строкой, однако в случаях, когда вместо валидной строки на его место передано что-то ещё - запускаем функцию как будто без него вообще (иными словами игнорируем, никаких ошибок кидать не нужно). Если же всё-таки параметр был валидной строкой, то результирующая строка должна содержать все переденные строки, разделённые значчением separator.

// > Примеры:
// Вызываем функцию: concatStrings('first')('second')('third')()
// Получаем результат: 'firstsecondthird'
// Вызываем функцию: concatStrings('first', null)('second')()
// Получаем результат: 'firstsecond'
// Вызываем функцию: concatStrings('first', '123')('second')('third')()
// Получаем результат: 'first123second123third'
// Вызываем функцию: concatStrings('some-value')('')('')(null)
// Получаем результат: 'some-value'
// Вызываем функцию: concatStrings('some-value')(2)
// Получаем результат: 'some-value'
// Вызываем функцию: concatStrings('some-value')('333')(123n)
// Получаем результат: 'some-val333'

function concatStrings(firstWord, separator) {
  return function (nextWord) {
    if (typeof nextWord !== "string") return firstWord;

    if (typeof separator !== "string") {
      const newStr = firstWord + nextWord;
      return concatStrings(newStr);
    }

    const newStr = firstWord + separator + nextWord;
    return concatStrings(newStr);
  };
}

// console.log(concatStrings("first")("second")("third")(), "firstsecondthird");
// console.log(concatStrings("first", null)("second")(), "firstsecond");
// console.log(
//   concatStrings("first", "123")("second")("third")(),
//   "first123second123third"
// );
// console.log(concatStrings("some-value")("")("")(null), "some-value");
// console.log(concatStrings("some-value")(2), "some-value");
// console.log(concatStrings("some-value")("333")(123n), "some-val333");

// 2) Создать класс Calculator. Конструктор класса должен принимать два валидных числа, иначе (если параметра не два или хотя бы один из них невалидный number) бросать ошибку (throw new Error('')). Данный класс должен иметь методы setX, setY, logSum, logMul, logSub, logDiv.
// - setX(num) - задаёт первому из чисел новое значение. Кидать ошибку если параметр не передан или является невалидным числом;
// - setY(num) - задаёт второму из чисел новое значение. Кидать ошибку если параметр не передан или является невалидным числом;
// - logSum() - выводит в консоль сумму двух наших чисел внутри класса;
// - logMul() - выводит в консоль произведение двух наших чисел внутри класса;
// - logSub() - выводит в консоль разность двух наших чисел внутри класса;
// - logDiv() - выводит в консоль частное двух наших чисел внутри класса ИЛИ кидает ошибку, если второе число (Y) равняется нулю.
// !ВАЖНО! Все методы класса должны отрабатывать корректно ДАЖЕ в случае копирования функций в отдельные переменные.

class Calculator {
  constructor(x, y) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      !isFinite(x) ||
      !isFinite(y)
    ) {
      throw new Error("Ошибка!");
    }
    this.x = x;
    this.y = y;
  }

  logSum = () => {
    console.log(this.x + this.y);
  };
  logMul = () => {
    console.log(this.x * this.y);
  };
  logSub = () => {
    console.log(this.x - this.y);
  };
  logDiv = () => {
    if (this.y === 0) {
      throw new Error("Ошибка!");
    }
    console.log(this.x / this.y);
  };
  setX = (num) => {
    if (typeof num !== "number" || !isFinite(num)) {
      throw new Error("Ошибка!");
    }
    this.x = num;
  };
  setY = (num) => {
    if (typeof num !== "number" || !isFinite(num)) {
      throw new Error("Ошибка!");
    }
    this.y = num;
  };
}

const calculator = new Calculator(12, 3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
calculator.setX(15);
calculator.logDiv(); // 5

const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv(); // 5
calculator.setY(444n); // Ошибка!
