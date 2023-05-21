/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [0];
  let ans = [];
  for (let i = 1; i < temperatures.length; i++) {
    let j = stack.length - 1;
    while (temperatures[stack[j]] < temperatures[i]) {
      let value = stack.pop();
      ans[value] = i - value;
      j--;
    }
    stack.push(i);
  }
  stack.forEach((el) => (ans[el] = 0));
  return ans;
};

// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function (temperatures) {
//   let stack = [];
//   let ans = [];
//   for (let i = temperatures.length - 1; i > -1; i--) {
//     while (temperatures[stack[stack.length - 1]] <= temperatures[i]) {
//       stack.pop();
//     }
//     ans[i] = stack.length ? stack[stack.length - 1] - i : 0;
//     stack.push(i);
//   }
//   return ans;
// };
