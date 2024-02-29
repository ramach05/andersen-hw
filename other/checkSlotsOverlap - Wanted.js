// Вот пример задачи на календарь с использованием JavaScript. В этом примере мы создаем массив слотов, которые представляют собой события в календаре. Затем мы пишем алгоритм, который проверяет, не пересекаются ли слоты, и если пересекаются, то возвращает сообщение об ошибке.

// Создаем массив слотов
const slots = [
  { start: new Date(2022, 0, 1, 10, 0, 0), end: new Date(2022, 0, 1, 12, 0, 0) },
  { start: new Date(2022, 0, 1, 14, 0, 0), end: new Date(2022, 0, 1, 16, 0, 0) },
  { start: new Date(2022, 0, 1, 18, 0, 0), end: new Date(2022, 0, 1, 20, 0, 0) },
  { start: new Date(2022, 0, 1, 22, 0, 0), end: new Date(2022, 0, 2, 2, 0, 0) }
];

// -------
//     ---------

//    -----
// -------------

// Алгоритм проверки пересечения слотов - сложность O(N^2)
function checkSlotsOverlap(slots) {
  for (let i = 0; i < slots.length - 1; i++) {
    const slot1 = slots[i];

    for (let j = i + 1; j < slots.length; j++) {
      const slot2 = slots[j];

      if (
        (slot1.start < slot2.end &&
          slot1.end > slot2.start)
      ) {
        return true;
      }
    }
  }

  return false;
}

// В этом примере мы создаем массив слотов, представляющих события в календаре. Затем мы используем функцию checkSlotsOverlap, которая проверяет, пересекаются ли слоты. Если слоты пересекаются, функция возвращает true, иначе возвращает false. В конце мы вызываем функцию checkSlotsOverlap и выводим результат в консоль.

// Проверяем пересечение слотов
const result = checkSlotsOverlap(slots);
if (result) {
  console.log("Слоты пересекаются");
} else {
  console.log("Слоты не пересекаются");
}

// --------------------------------------
// Второе решение более быстрое - сложность O(NlogN)
const checkOverlap = (arr) => {
  if (!Array.isArray(arr)) return;

  if(arr.length < 2) return false;

  const sortArr = arr.sort(); // сложность сортировки O(NlogN)

  for (let i = 1; i < sortArr.length; i++) {
    const [start1, end1] = sortArr[i - 1];
    const [start2, end2] = sortArr[i];

    if (start2 < end1) return true;
  }

  return false;
}
