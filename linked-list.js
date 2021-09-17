class Node {
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
    const node = new Node(elem);

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
    const node = new Node(elem);

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
