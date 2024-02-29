//! дан массив чисел, требуется найти число подмассивов, в которых значения всех чисел различны.

const countUniqueSubarrays = (initialArr) => {
  if (!Array.isArray(initialArr)) throw new Error('Not array');

  let count = 0;
  const sumArr = [];

  for (let i = 0; i < initialArr.length; i++) {
    const subArr = [initialArr[i]];

    for (let j = 0; j < initialArr.length; j++) {
      const item = initialArr[j];

      if (subArr.every((value) => value !== item)) {
        subArr.push(item);
      }
    }


  }
}






console.log(countUniqueSubarrays([1, 2, 3, 4, 5])); // Выведет: 5
console.log(countUniqueSubarrays([1, 2, 3, 2, 1])); // Выведет: 3
console.log(countUniqueSubarrays([1, 2, 3, 4, 5, 1])); // Выведет: 4