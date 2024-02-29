// Stack ----------------------------

class Stack {
  size = 0;
  top = null;

  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || !isFinite(maxSize))
      throw new Error("Ошибка!");

    this.maxSize = maxSize;
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

// LinkedList ----------------------------

class NodeEl {
  constructor(elem) {
    this.elem = elem;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(elem) {
    const node = new NodeEl(elem);

    if (!this.length) {
      this.head = node;
    } else {
      let currentHead = this.head;

      while (currentHead.next) {
        currentHead = currentHead.next;
      }
      currentHead.next = node;
    }

    this.length++;
  }

  prepend(elem) {
    const node = new NodeEl(elem);

    if (!this.length) {
      this.head = node;
    } else {
      const currentFirstNode = this.head;
      this.head = node;
      node.next = currentFirstNode;
    }
    this.length++;
  }

  find(elem) {
    let currentHead = this.head;

    if (!this.length) {
      return currentHead;
    }

    while (currentHead.elem !== elem) {
      currentHead = currentHead.next;
    }

    return currentHead;
  }

  toArray() {
    if (!this.length) return [];

    let currentHead = this.head;
    const arr = [currentHead.elem];

    while (currentHead.next) {
      currentHead = currentHead.next;
      arr.splice(arr.length, 0, currentHead.elem);
    }
    return arr;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function")
      throw new Error("Ошибка!");

    const linkedList = new LinkedList();

    for (const i of iterable) {
      linkedList.append(i);
    }
    return linkedList;
  }
}

// Queue -------------------------

class NodeEl {
  next = null;

  constructor(prev) {
    this.prev = prev;
  }
}

class Queue {
  length = 0;
  queue = [];

  addEl() {
    if (this.length) {
      const prevEl = this.queue[this.queue.length - 1];
      const newEl = new NodeEl(prevEl);
      this.queue.push(newEl);
      prevEl.next = newEl;
    } else {
      this.queue.push(new NodeEl());
    }

    this.length++
  }

  deleteEl() {
    if (this.length < 1) throw new Error('Очередь пустая')

    this.queue.unshift();
    this.queue[0].prev = undefined;

    this.length--;
  }

  getQueueLength() {
    return this.length;
  }
}