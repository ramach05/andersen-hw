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

console.log(makeObjectDeepCopy(test));
