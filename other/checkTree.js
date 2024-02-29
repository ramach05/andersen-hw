// Нужно реализовать функцию которая сообщает есть ли значение в дереве.
// Результат проверки вывести в консоль

const checkTree = (tree, val) => {
  for (const key in tree) {
    if (key === "value") {
      if (tree[key] === val) {
        return true;
      } else {
        continue;
      }
    } else {
      const res = checkTree(tree[key], val);

      if (res === true) return res;
    }
  }

  return false;
};

console.log("A", checkTree(initialTree, "A")); // true
console.log("B", checkTree(initialTree, "B")); // true
console.log("C", checkTree(initialTree, "C")); // true
console.log("E", checkTree(initialTree, "E")); // true
console.log("A14", checkTree(initialTree, "A14")); // true
console.log("B14", checkTree(initialTree, "B14")); // true
console.log("C14", checkTree(initialTree, "C14")); // true
console.log("C12", checkTree(initialTree, "C12")); // true
console.log("B12", checkTree(initialTree, "B12")); // true
console.log("C12", checkTree(initialTree, "C12")); // true
console.log("X", checkTree(initialTree, "X")); // false
console.log("R", checkTree(initialTree, "R")); // false
console.log("W", checkTree(initialTree, "W")); // false

const initialTree = {
  a: {
    value: "A",
    b: {
      value: "B",
      c: {
        value: "C",
      },
    },
    b1: {
      value: "B",
      c: {
        value: "C",
      },
    },
  },
  b: {
    value: "A14",
    b2: {
      value: "B14",
      c: {
        value: "C14",
      },
    },
    b3: {
      value: "B12",
      c: {
        value: "C12",
      },
    },
  },
  value: "E",
};
