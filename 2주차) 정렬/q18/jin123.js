/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let order = arr2.reduce((acc, cur, i) => acc.set(cur, i), new Map());
  arr1.sort((a, b) => {
    if (order.has(a) && order.has(b)) return order.get(a) - order.get(b);
    if (!order.has(a) && !order.has(b)) return a - b;
    if (!order.has(a)) return 1;
    else return -1;
  });
  return arr1;
};
