// Написать свою реализацию встроенной функции массивов filter. Назвать функцию myFilter и сделать так, чтобы любой массив мог использовать данную функцию как "родную". В качестве параметров он должен принимать callback-функцию и как необязательный параметр объект, который будет использован в качестве this в рамках внутренних вызовов данной callback-функции.
// В конечном итоге ваша реализация myFilter должна работать точно также как и встроенный метод filter. Callback-функция, переданная в качестве параметра, также должна вызываться с теми же параметрами, что и оригинал (элемент, индекс, массив).

Array.prototype.myFilter = function (callback) {
  const arr = this;
  const res = [];

  arr.forEach((el) => {
    const elem = el.toString();
    const ind = arr.indexOf(el);

    if (callback(elem, ind, arr)) {
      res.push(el);
    }
  });

  return res;
};

const asd = [
  "spray",
  "exuberant",
  42,
  "destruction",
  { a: "asd", b: 42 },
  ["qwe", "zxc", 567],
  "present",
  1234567,
];

console.log(
  "asd.myFilter() :>> ",
  asd.myFilter((i, ind, arr) => {
    if (!isNaN(i)) {
      console.log("ind :>> ", ind);
      return i;
    }
  })
);
