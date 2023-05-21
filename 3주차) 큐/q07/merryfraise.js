/**
 * LeetCode
 * https://leetcode.com/problemset/all
 * Problem Number: 950
 * Level: Medium
 * Algorithm: Array / Queue / Sorting / Simulation
 */

/**
 * @param {number[]} deck
 * @return {number[]}
 */

/* pseudocode
   1. 요구사항은 함수를 거쳐 나온 배열이 맨 위의 카드를 뽑고,
      그 다음 카드를 맨 뒤로 보내는 과정을 거쳤을 때 오름차순이 되도록 만들어라
   2. 이 과정을 반대로 하면 맨 뒤의 카드를 맨 앞으로 가져오고, (pop and unshift)
      뽑은 카드를 다시 맨 위로 배치시키면 됨 (unshift)
*/

var deckRevealedIncreasing = function (deck) {
  const result = [];

  // deck을 모든 과정을 거쳐 오름차순이 된 배열으로 가정
  deck.sort((a, b) => a - b);

  while (deck.length > 0) {
    const popFromDeck = deck.pop();

    // result에 아무 요소도 없다면 unshift가 아니라 push 진행
    if (!result.length) result.push(popFromDeck);
    else {
      // deck에 남은 카드 존재 여부와 상관 없이 result에서는 항상 unshift가 발생
      result.unshift(popFromDeck);

      /* deck에 요소가 존재한다면 result에서는 맨 뒤의 카드를 맨 앞으로 가져오는 과정이 필요
         (pop and unshift) */
      if (deck.length) result.unshift(result.pop());
    }
  }

  return result;
};
