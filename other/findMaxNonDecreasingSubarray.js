// в массиве из чисел нужно найти наибольший неубывающий подотрезок, то есть такой подотрезок из чисел, где каждое следующее число больше или равно предыдущему.

const findMaxNonDecreasingSubarray = (initialArr) => {
  if (!Array.isArray(initialArr)) throw new Error('Not array');

  let resRange = [];
  let targetRange = [];

  for (let i = 0; i < initialArr.length; i++) {
    const targetNumber = initialArr[i];

    if (
      typeof targetNumber === 'number' && targetNumber !== NaN && Math.abs(targetNumber) !== Infinity
      && (!targetRange.length || targetNumber >= targetRange[targetRange.length - 1])
    ) {
      targetRange.push(targetNumber);
    } else {
      targetRange = [];
      continue
    }

    if (targetRange.length > resRange.length) {
      resRange = [...targetRange];
    }
  }


  return resRange;
}

// [1,55,123, 3, -99,-4,5,34,Infinity,222 ,5 ,0]
