// -------------------- 1 задача (глубокая копия объекта) --------------------

const test = {
  a: 42,
  b: "asd",
  c: {
    as: 4242,
    qw: "qweqwe",
  },
  d: {
    asd: 424242,
    zxc: "zxczxc",
    78: {
      34: function dd() {
        console.log("some");
      },
      tyui: [45, "234", 567],
      "ty 42 ui": 42424242,
    },
  },
  e: function ee() {
    console.log("some other");
  },
  f: [],
};

function makeObjectDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return console.log("Нужно передать объект!");
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

// console.log(makeObjectDeepCopy(test));

// -------------------- 2 задача (выбрать из интервала) --------------------

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

// console.log(selectFromInterval([1, 3, 5], 5, 2));
// console.log(selectFromInterval([-2, -15, 0, 4], -13, -5));
// console.log(selectFromInterval(["aaa"], 2, 3));

// -------------------- 3 задача (итерировать объект) --------------------

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

for (let item of myIterable) {
  console.log(item);
}
