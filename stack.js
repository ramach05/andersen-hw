class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || !isFinite(maxSize))
      throw new Error("Ошибка!");

    this.maxSize = maxSize;
    this.size = 0;
    this.top = null;
  }

  push = (elem) => {
    if (this.size >= this.maxSize) throw new Error("Ошибка!");

    const newElem = new Elem(elem);
    newElem.previous = this.top;
    this.top = newElem;
    this.size += 1;
    return this.top;
  };

  pop = () => {
    if (this.size < 1) throw new Error("Ошибка!");

    const deletedElem = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return deletedElem;
  };

  peek = () => {
    if (this.size < 1) return null;
    return this.top;
  };

  isEmpty = () => {
    if (this.size < 1) return true;
    return false;
  };

  toArray = () => {
    let currentSize = this.size;
    if (!currentSize) return [];

    let top = this.top;
    const arr = [top.elem];

    while (currentSize > 1) {
      arr.splice(0, 0, top.previous.elem);
      top = top.previous;
      currentSize -= 1;
    }
    return arr;
  };

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function")
      throw new Error("Ошибка!");

    const stack = new Stack(iterable.length);

    for (const i of iterable) {
      stack.push(i);
    }

    return stack;
  }
}

class Elem {
  constructor(elem) {
    this.elem = elem;
    this.previous = null;
  }
}

module.exports = { Stack };
