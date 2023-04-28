/**
 * Programmers
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * Problem Number: 1845
 * Level: 1
 * Algorithm: 해시
 */

/* pseudocode
   1. 총 선택 횟수가 준비된 폰켓몬의 종류보다 적으면 선택 횟수만큼의 종류를 얻을 수 있다.
      ([1, 1, 2, 3, 4, 4]에서 3마리를 선택하면 최대 3종류 획득 가능)
   2. 총 선택 횟수가 준비된 폰켓몬의 종류보다 많으면 준비된 폰켓몬의 종류만큼의 종류를 얻을 수 있다.
      ([1, 1, 1, 2, 2, 2]에서 3마리를 선택하면 최대 2종류 획득 가능)
*/

/* Use Object */
function solution(nums) {
  const ponkemon = {};
  let pick = nums.length / 2;

  for (const species of nums) {
    ponkemon[species] = (ponkemon[species] || 0) + 1;
  }

  let count = Object.keys(ponkemon).length;

  return pick < count ? pick : count;
}

/* Use Set */
function ponkemon(nums) {
  const pick = nums.length / 2;
  const species = new Set(nums);

  return pick < species.size ? pick : species.size;
}
