
/**
 * Банкомат.
 *
 * В банкомате есть купюры — 50, 100, 500, 1000, 5000 руб. Номиналы купюр только такие, они не меняются
 * и доступны в константе nominals.
 * Есть ограничение на количество каждой из купюр (аргумент limits), его нужно держать в актуальном
 * состоянии (мутировать).
 * Нужно вернуть купюры и их количество, которыми можно выдать запрашиваемую сумму, в виде
 * объекта в формате, аналогичном объекту лимитов.
 * При прочих равных возможностях выдать одну и ту же сумму разными купюрами приоритет отдаётся крупным.
 * Если выдать запрашиваемую сумму не получится в принципе (сумма не кратна минимальной купюре) —
 * вернуть ошибку 'Error: Incorrect value'.
 * Если в банкомате недостаточно нужных купюр — вернуть ошибку 'Error: Not enough money'.
*/

function getCash(sum, limits, nominals) {
  if (sum % nominals[nominals.length - 1] !== 0) throw new Error('Error: Incorrect value');

  const result = {};

  for (const nominal of nominals) {
    if (sum === 0) return result;

    const countOfNominal = limits[nominal];

    if (!countOfNominal) continue;

    const count = Math.min(Math.floor(resultSum / nominal), countOfNominal);

    if (count > 0) {
      result[nominal] = count;
      limits[nominal] -= count; // мутируем количество банкнот в банкомате limits.
      sum -= count * nominal;
      continue
    }
  }

  throw new Error('Error: Not enough money');
}

function test() {
  const nominals = [5000, 1000, 500, 100, 50];
  // пример: в банкомате 9200 следующими номиналами
  const limits = { 1000: 6, 5000: 0, 500: 3, 100: 5, 50: 4 }

  // Далее последовательные вызова функции getCash с одним и тем же объектом limits
  console.log(getCash(1250, limits, nominals))    // { 1000: 1, 100: 2, 50: 1 }
  console.log(getCash(1000000, limits, nominals)) // 'Error: Not enough money'
  console.log(getCash(2400, limits, nominals))    // { 1000: 2, 100: 3, 50: 2 }
  console.log(getCash(6512, limits, nominals))    // 'Error: Incorrect value'
  console.log(getCash(50, limits, nominals))     // { 50: 1 }
  console.log(getCash(50, limits, nominals))      // 'Error: Not enough money'
  console.log(getCash(5500, limits, nominals))   // { 1000: 3, 500: 5 }
}

test();



