/**
 * @param {number[]} deck
 * @return {number[]}
 */

var deckRevealedIncreasing = function (deck) {
  let numArr = Array.from({ length: deck.length }, (_, i) => i);
  deck.sort((a, b) => a - b);
  let ans = [];
  while (deck.length) {
    ans[numArr.shift()] = deck.shift();
    numArr.push(numArr.shift());
  }
  return ans;
};

// var deckRevealedIncreasing = function (deck) {
//   let numArr = Array.from(
//     { length: deck.length },
//     (_, i) => deck.length - i - 1
//   );
//   deck.sort((a, b) => b - a);
//   let ans = [];
//   while (deck.length) {
//     ans[numArr.pop()] = deck.pop();
//     numArr.unshift(numArr.pop());
//   }
//   return ans;
// };
