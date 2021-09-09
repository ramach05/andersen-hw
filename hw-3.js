Array.prototype.myFilter = function (callbackFn) {
  const arr = this;
  const res = [];

  arr.forEach((el) => {
    const elem = el.toString();
    const ind = arr.indexOf(el);

    if (callbackFn(elem, ind, arr)) {
      res.push(el);
    }
  });

  return res;
};

function createDebounceFunction(callbackFn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => callbackFn(), delay);
  };
}
