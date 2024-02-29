
function callLimit(fn, limit, callback) {
  // Тут что-то написать
  let count = 0;

  const innerFn = (...arg) => {
    count++;

    if (count <= limit) fn(...arg);

    if (count === limit && callback) {
      callback();
    };
  };

  innerFn.reset = () => {
    count = 0;
  };
  return innerFn;
}

// function callLimit(fn: (...arg: any[])=> any, limit:number, callback: () => void): (...arg: any[]) => any;

function log(title, message) {
  console.log(title + ': ' + message);
}

var logLimited = callLimit(log, 3);
logLimited('title', 'desc'); // 'title: desc'
logLimited('title2', 'desc'); // 'title2: desc'
logLimited('title3', 'desc'); // 'title3: desc'
logLimited('title4', 'desc'); // Этот не сработает

logLimited.reset(); // Перезагрузили таймер
// Можно еще 3 раза вызвать
logLimited('title5', 'desc'); // 'title5: desc'
logLimited('title6', 'desc'); // 'title6: desc'
logLimited('title7', 'desc'); // 'title7: desc'

var logLimited2 = callLimit(log, 2, () => console.log('finish'));
logLimited2('foo', 'bar'); // 'foo: bar'
logLimited2('foo2', 'bar'); // 'foo2: bar' 'finish'