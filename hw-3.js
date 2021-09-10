Array.prototype.myFilter = function (callbackFn) {
  const res = [];

  this.forEach((el, ind, arr) => {
    if (callbackFn(el, ind, arr)) {
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
