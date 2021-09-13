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
