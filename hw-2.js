function makeObjectDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return console.log("Нужно передать объект!");
  }
  if (Array.isArray(obj)) {
    return [...obj];
  }

  const res = {};

  function recursionFn(object, result) {
    for (const key in object) {
      const value = object[key];

      if (
        typeof value !== "object" ||
        value === null ||
        typeof value === "function"
      ) {
        result[key] = value;
        continue;
      }
      if (typeof value === "object" && Array.isArray(value) && value.length) {
        result[key] = value.map((item) => item);
        continue;
      }
      if (typeof value === "object" && Array.isArray(value)) {
        result[key] = [];
        continue;
      }
      if (typeof value === "object") {
        result[key] = {};
        recursionFn(value, result[key]);
      }
    }
  }

  recursionFn(obj, res);
  return res;
}

const asd = [42, "asdasd", "886"];
console.log(makeObjectDeepCopy(asd));

function selectFromInterval(arrNum, firstValue, secondValue) {
  if (
    !Array.isArray(arrNum) ||
    arrNum.some((i) => isNaN(i)) ||
    isNaN(firstValue) ||
    isNaN(secondValue)
  ) {
    throw new Error("Ошибка!");
  }

  let firstIndex;
  let secondIndex;

  if (firstValue < secondValue) {
    firstIndex = firstValue;
    secondIndex = secondValue;
  } else {
    firstIndex = secondValue;
    secondIndex = firstValue;
  }

  const res = arrNum.filter(
    (value) => value >= firstIndex && value <= secondIndex
  );

  return res;
}

const myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function () {
  const current = this.from;
  const last = this.to;

  if (
    isNaN(current) ||
    isNaN(last) ||
    last < current ||
    current === "" ||
    last === ""
  ) {
    throw new Error("Ошибка!");
  }

  return {
    current: current,
    last: last,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
